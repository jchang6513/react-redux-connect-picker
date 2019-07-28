import React from 'react';
import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';
import { turnOnSwitch, turnOffSwitch } from '../appAcrtions';
import { StoreState } from '../store';

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

const mapStateToProps = (state: StoreState): StateProps => ({
  switch: state.switch,
});

const mapDispatchToProps: DispatchProps = {
  turnOn: () => turnOnSwitch(),
  turnOff: () => turnOffSwitch(),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MaterialButton);
