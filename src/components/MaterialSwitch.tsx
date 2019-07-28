import React from 'react';

import Switch from '@material-ui/core/Switch';
import { wrapConnector } from '../connector';

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

export default wrapConnector<StateProps, DispatchProps, {}>(
  ['switch'],
  ['toggle']
)(MaterialSwitch);
