import React from 'react';
import { connect } from 'react-redux';

import Slider from '@material-ui/core/Slider';
import { StoreState } from '../store';
import { toggleSwitch, tuneLightLevel } from '../appAcrtions';

const MaterialSwitch = (props: MaterialSliderProps) => (
  <div className="material-slider">
    <Slider
      defaultValue={props.lightLevel}
      aria-labelledby="discrete-slider"
      valueLabelDisplay="auto"
      step={0.25}
      marks
      min={0}
      max={1}
      onChange={(e,v) => props.tune(v as number)}
    />
  </div>
)

type StateProps = {
  lightLevel: number;
};

type DispatchProps = {
  tune: (l: number) => void;
};

type MaterialSliderProps = StateProps & DispatchProps;

const mapStateToProps = (state: StoreState): StateProps => ({
  lightLevel: state.lightLevel,
});

const mapDispatchToProps: DispatchProps = {
  tune: (l: number) => tuneLightLevel(l),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MaterialSwitch);
