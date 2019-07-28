import React from 'react';
import '../lamp.scss';
import { StoreState } from '../store';
import { connect } from 'react-redux';

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

const mapStateToProps = (state: StoreState): StateProps => ({
  switch: state.switch,
  lightLevel: state.lightLevel,
});


export default connect(
  mapStateToProps,
  {}
)(Lamp);
