import React from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import { StoreState } from './store';
import { toggleSwitch } from './appAcrtions';

const App = (props: AppProps) => {
  return (
    <div className="App">
      <header className={`App-header ${props.switch && 'turn-on'}`}>
        <div onClick={props.toggle}>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      </header>
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

const mapDispatchToProps = {
  toggle: () => toggleSwitch(),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
