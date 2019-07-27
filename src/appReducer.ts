export enum AppActionType {
  Toggle = 'toggle',
  On = 'TurnOn',
  Off = 'TurnOff',
  Reset = 'Reset'
}

export interface Action {
  type: AppActionType;
}

export type AppReducerState = {
  switch: boolean;
};

export const initState: AppReducerState = {
  switch: false
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
    default:
      return state;
  }
};

export default appReducer;
