import React from 'react';

import Button from '@material-ui/core/Button';
import { wrapConnector } from '../connector';

const MaterialButton = (props: MaterialButtonProps) => (
  <div className="material-button">
    <Button variant="contained" color={props.switch ? 'primary' : 'default'} onClick={props.turnOn}>
      On
    </Button>
    <Button variant="contained" color={!props.switch ? 'primary' : 'default'} onClick={props.turnOff}>
      Off
    </Button>
  </div>
)

type StateProps = {
  switch: boolean;
};

type DispatchProps = {
  turnOn: () => void;
  turnOff: () => void;
};

type MaterialButtonProps = StateProps & DispatchProps;

export default wrapConnector<StateProps, DispatchProps, {}>(
  ['switch'],
  ['turnOn', 'turnOff']
)(MaterialButton);
