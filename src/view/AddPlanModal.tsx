import React, { Component } from 'react';

import { observable, action } from 'mobx';
import { RouteComponentProps } from 'react-router';

import { PlanModal } from 'basic/PlanModal';
import { state as planState, AddedPlan } from 'state/PlanState';

/**
 * A modal window that allows the user to add a SDK Plan to the dashboard.
 * Currently only supports specifying a target, version and options as a valid JSON.
 */
export class AddPlanModal extends Component<RouteComponentProps<{}>, {}> {
  /**
   * Whether or not a progress indicator should be shown
   */
  @observable private showProgressIndicator: boolean = false;

  /**
   * Whether or not the 'failed to add Plan' modal is open
   */
  @observable private showErrorModal: boolean = false;

  private closeModal = () => {
    console.log(this.props);
    this.props.history.push('/');
  };

  /**
   * Event fired when the user presses the 'Add' button.
   */
  @action
  private onAddSdkPlan = async (submittedPlan: AddedPlan) => {
    this.showProgressIndicator = true;
    try {
      await planState.addPlan(submittedPlan);
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
      <PlanModal
        key={0}
        submitButtonProps={{
          children: 'Add',
        }}
        onSubmitPlan={this.onAddSdkPlan}
        onCloseModal={this.closeModal}
        showSubmitProgress={this.showProgressIndicator}
      />
    );
  }
}
