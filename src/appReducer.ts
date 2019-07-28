export enum AppActionType {
  Toggle = 'toggle',
  On = 'TurnOn',
  Off = 'TurnOff',
  Tune = 'TuneLightLevel',
  Reset = 'Reset'
}

export interface Action {
  type: AppActionType;
}

export interface LevelAction {
  type: AppActionType;
  level: number
}

export type AppReducerState = {
  switch: boolean;
  lightLevel: number;
};

export const initState: AppReducerState = {
  switch: false,
  lightLevel: 1,
}

const appReducer = (state: AppReducerState = initState, action: Action): AppReducerState => {
  switch (action.type) {
    case AppActionType.Reset:
      return initState
    case AppActionType.Toggle:
      return { ...state, switch: !state.switch};
    case AppActionType.On:
      return { ...state, switch: true};
    case AppActionType.Off:
      return { ...state, switch: false};
    case AppActionType.Tune:
      const level = (action as LevelAction).level;
      return level === 0
        ? { switch: false, lightLevel: level}
        : { switch: true,  lightLevel: level}
    default:
      return state;
  }
};

export default appReducer;
