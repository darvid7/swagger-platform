import React, { Component } from 'react';

import { observable, action } from 'mobx';
import { RouteComponentProps } from 'react-router';

import { SpecModal } from 'basic/SpecModal';
import { state as specState, AddedSpec } from 'state/SpecState';

// export interface AddSpecModalProps extends Component<RouteComponentProps<{}>, {}> {
//   readonly onCloseModal: () => void;
//   readonly onSubmitSpec: (spec: AddedSpec) => void;
//   readonly showSubmitProgress?: boolean;
// }

/**
 * A modal window that allows the user to add a Spec to the dashboard.
 * Currently only supports specifying a name and URL.
 */
export class AddSpecModal extends Component<RouteComponentProps<{}>, {}> {
  /**
   * Whether or not a progress indicator should be shown
   */
  @observable private showProgressIndicator: boolean = false;

  /**
   * Whether or not the 'failed to add Spec' modal is open
   */
  @observable private showErrorModal: boolean = false;

  private closeModal = () => {
    this.props.history.push('/');
  };

  /**
   * Event fired when the user presses the 'Add' button.
   */
  @action
  private onAddSpec = async (submittedSpec: AddedSpec) => {
    this.showProgressIndicator = true;
    try {
      await specState.addSpec(submittedSpec);
      this.closeModal();
    } catch (e) {
      console.error(e);
      this.showErrorModal = true;
    } finally {
      this.showProgressIndicator = false;
    }
  };

  public render() {
    return (
      <SpecModal
        key={0}
        submitButtonProps={{
          children: 'Add',
        }}
        onSubmitSpec={this.onAddSpec}
        onCloseModal={this.closeModal}
        showSubmitProgress={this.showProgressIndicator}
      />
    );
  }
}
