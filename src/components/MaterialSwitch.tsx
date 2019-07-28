import React from 'react';

import Switch from '@material-ui/core/Switch';
import { StoreState } from '../store';
import { toggleSwitch } from '../appAcrtions';
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

export default wrapConnector()(MaterialSwitch);
