import { connect, MapStateToPropsParam, MapDispatchToPropsParam, ConnectedComponentClass } from "react-redux";
import { StoreState } from "./store";
import { ComponentType } from "react";
import { tuneLightLevel, toggleSwitch, turnOnSwitch, turnOffSwitch } from "./appAcrtions";

export const wrapConnector = () => {

  const mapStateToProps = (state: StoreState) => ({
    switch: state.switch,
    lightLevel: state.lightLevel,
  });

  const mapDispatchToProps = {
    tune: (l: number) => tuneLightLevel(l),
    toggle: () => toggleSwitch(),
    turnOn: () => turnOnSwitch(),
    turnOff: () => turnOffSwitch(),
  };

  return (Comp: ComponentType<never>) => (
    connector(
      mapStateToProps,
      mapDispatchToProps
    )(Comp)
  )
}

const connector = <StateProps, DispatchProps, OwnProps>(
  mapStoP: MapStateToPropsParam<StateProps, OwnProps, StoreState>,
  mapDtoP: MapDispatchToPropsParam<DispatchProps, OwnProps>
) => (
  (Comp: ComponentType<never>) => (
    connect<StateProps, DispatchProps, OwnProps, StoreState>(
      mapStoP,
      mapDtoP
    )(Comp)
  )
)

export default connector;
