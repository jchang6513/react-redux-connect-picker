import _ from 'lodash';
import { connect, MapStateToPropsParam, MapDispatchToPropsParam } from "react-redux";
import { StoreState } from "./store";
import { ComponentType } from "react";
import { tuneLightLevel, toggleSwitch, turnOnSwitch, turnOffSwitch } from "./appAcrtions";

const defaultStatePicker = [
  'switch',
  'lightLevel',
];

const defaultDispatchPicker = [
  'tune',
  'toggle',
  'turnOn',
  'turnOff'
];

export const wrapConnector = <StateProps, DispatchProps, OwnProps>(
  sPicker: string[] = defaultStatePicker,
  dPicker: string[] = defaultDispatchPicker
) => {

  const mapStateToProps = (state: StoreState): StateProps => {
    const stateProps = {
      switch: state.switch,
      lightLevel: state.lightLevel,
    }
    return _.pick(stateProps, sPicker) as StateProps
  };

  const mapDispatchToProps = _.pick({
    tune: (l: number) => tuneLightLevel(l),
    toggle: () => toggleSwitch(),
    turnOn: () => turnOnSwitch(),
    turnOff: () => turnOffSwitch(),
  }, dPicker) as DispatchProps;

  return (Comp: ComponentType<never>) => (
    connect<StateProps, DispatchProps, OwnProps, StoreState>(
      mapStateToProps,
      mapDispatchToProps
    )(Comp)
  )
}

export const connector = <StateProps, DispatchProps, OwnProps>(
  mapStoP: MapStateToPropsParam<StateProps, OwnProps, StoreState>,
  mapDtoP: MapDispatchToPropsParam<DispatchProps, OwnProps>
) => (
  (Comp: ComponentType<never>) => (
    connect<StateProps, DispatchProps, OwnProps, StoreState>(
      mapStoP,
      mapDtoP
    )(Comp)
  )
);
