import { AppActionType } from "./appReducer";

export const toggleSwitch = () => ({
  type: AppActionType.Toggle
})

export const turnOnSwitch = () => ({
  type: AppActionType.On
})

export const turnOffSwitch = () => ({
  type: AppActionType.Off
})

export const resetSwitch = () => ({
  type: AppActionType.Reset
})

