import React, { SFC } from 'react';

import { Button, Typography } from 'material-ui';

import { BuildStatusChip } from 'basic/BuildStatusChip';
import { Plan, BuildStatus } from 'model/Plan';
import { createStyled } from 'view/createStyled';
import {Observer} from "mobx-react";

const Styled: any = createStyled(theme => ({
  planItemContainer: {
    display: 'flex',
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    '& > *:not(:first-child)': {
      marginLeft: theme.spacing.unit,
    },
  },
  // TODO: Regularly used classes like this should be defined somewhere else
  center: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
}));

export interface PlanItemProps extends React.DOMAttributes<HTMLDivElement> {
  plan: Plan;
  onRunClicked: (plan: Plan) => Promise<void>;
}

/**
 * Very basic information about a SDK.
 * For use in lists, grids, etc.
 */

export const hack = (plan: Plan) => {
  const status: int = plan.buildStatus;
  console.log('plan bs: ' + plan.buildStatus);
  if (status === BuildStatus.RUNNING) {
    return "Running...";
  }
  if (status === BuildStatus.GENERATING) {
    return "Running...";
  }
  if (status === BuildStatus.PUSHING) {
    return "Running...";
  }
  if (status === BuildStatus.PUBLISHED) {
    return "Done!";
  }
  return "Run";
};

export const PlanItem: SFC<PlanItemProps> = ({ plan, onRunClicked }) => (
  <Styled>
    {({ classes }) => (
      <Observer>
        {
          ()=> (
            <div className={classes.planItemContainer}>
              <Typography>{plan.target}</Typography>
              <Typography variant="body1" color="textSecondary">
                {plan.version}
              </Typography>
              <div>
                <BuildStatusChip buildStatus={plan.buildStatus} />
              </div>
              <div>
                <Button
                  disabled={plan.buildStatus === BuildStatus.RUNNING}
                  onClick={() => onRunClicked(plan)}
                >
                  {hack(plan)}
                </Button>
              </div>
            </div>
          )
        }
      </Observer>
    )}
  </Styled>
);
