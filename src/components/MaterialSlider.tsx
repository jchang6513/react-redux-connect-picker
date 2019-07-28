import React from 'react';

import Slider from '@material-ui/core/Slider';
import { wrapConnector } from '../connector';

const MaterialSlider = (props: MaterialSliderProps) => (
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

export default wrapConnector<StateProps, DispatchProps, {}>(
  ['lightLevel'],
  ['tune']
)(MaterialSlider);
