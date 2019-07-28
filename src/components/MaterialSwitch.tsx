import React from 'react';
import { connect } from 'react-redux';

import Switch from '@material-ui/core/Switch';
import { StoreState } from '../store';
import { toggleSwitch } from '../appAcrtions';

const MaterialSwitch = (props: MaterialSwitchProps) => (
  <div className="material-switch">
    <Switch
      checked={props.switch}
      onChange={props.toggle}
    />
  </div>
)

type StateProps = {
  switch: boolean;
};

type DispatchProps = {
  toggle: () => void;
};

type MaterialSwitchProps = StateProps & DispatchProps;

const mapStateToProps = (state: StoreState): StateProps => ({
  switch: state.switch,
});

const mapDispatchToProps: DispatchProps = {
  toggle: () => toggleSwitch(),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MaterialSwitch);
