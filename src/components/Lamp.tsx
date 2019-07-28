import React from 'react';
import '../lamp.scss';
import { wrapConnector } from '../connector';

const Lamp = (props: LampProps) => {
  const style = {
    opacity: props.lightLevel,
  };
  return (
    <div className="lamp">
      <div className="stand"></div>
      <div className="shade"></div>
      <div className={`light ${props.switch && 'light-up'}`} style={style}></div>
    </div>
  );
}

type StateProps = {
  switch: boolean;
  lightLevel: number;
};

type LampProps = StateProps;

export default wrapConnector(
  ['switch', 'lightLevel'],
  []
)(Lamp);
