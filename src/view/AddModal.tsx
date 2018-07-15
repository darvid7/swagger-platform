import React, { Component } from 'react';

import { Button, Typography } from '@material-ui/core';
import { observable } from 'mobx';
import { Observer } from 'mobx-react';
import { RouteComponentProps } from 'react-router';

import { FloatingModal } from 'basic/FloatingModal';
import { SpecModal } from 'view/basic/SpecModal';
import { createStyled } from 'view/createStyled';

const Styled: any = createStyled(theme => ({
  errorModalPaper: {
    maxWidth: theme.spacing.unit * 48,
  },
  modalContent: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing.unit * 3,
  },
  buttonRow: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: theme.spacing.unit,
  },
}));

export interface AddModalProps extends RouteComponentProps<{}> {
  innerModal: typeof SpecModal;
}

/**
 * A modal window that allows the user to add a SDK Plan to the dashboard.
 * Currently only supports specifying a target, version and options as a valid JSON.
 */
export class AddModal extends Component<AddModalProps, {}> {
  /**
   * Whether or not the 'failed to add Plan' modal is open
   */
  @observable private showErrorModal: boolean = false;

  private closeErrorModal = () => {
    this.showErrorModal = false;
  };

  public render() {
    console.log('here');
    return (
      <Styled>
        {({ classes }) => (
          <Observer>
            {() => [
              this.props.innerModal,
              <FloatingModal
                key={1}
                open={this.showErrorModal}
                onClose={this.closeErrorModal}
                classes={{ paper: classes.errorModalPaper }}
              >
                <div className={classes.modalContent}>
                  <Typography variant="title">Error</Typography>
                  <Typography>An error occurred adding the SDK Plan.</Typography>
                </div>
                <div className={classes.buttonRow}>
                  <Button color="primary" onClick={this.closeErrorModal}>
                    Ok
                  </Button>
                </div>
              </FloatingModal>,
            ]}
          </Observer>
        )}
      </Styled>
    );
  }
}
