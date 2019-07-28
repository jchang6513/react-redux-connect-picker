import React from 'react';
import { connect } from 'react-redux';
import './App.scss';
import { StoreState } from './store';
import { toggleSwitch } from './appAcrtions';
import MaterialButton from './components/MaterialButton';
import MaterialSwitch from './components/MaterialSwitch';
import Lamp from './components/Lamp';
import MaterialSlider from './components/MaterialSlider';

const App = (props: AppProps) => {
  return (
    <div className="App">
      <div className="control-panel">
        <MaterialSwitch />
        <MaterialButton />
        <MaterialSlider />
      </div>
      <Lamp/>
    </div>
  );
}

type StateProps = {
  switch: boolean;
};

type DispatchProps = {
  toggle: () => void;
};

type AppProps = StateProps & DispatchProps;

const mapStateToProps = (state: StoreState): StateProps => ({
  switch: state.switch,
});

const mapDispatchToProps: DispatchProps = {
  toggle: () => toggleSwitch(),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
