import { Action, ActionReducer } from "@ngrx/store";
import { NAV_START, NAV_END, NAV_ERROR, NAV_OPEN, NAV_CLOSE } from "./actions";

import { INavigation } from './models';

export const State: INavigation = {
  isNavStart: false,
  isNavEnd: false,
  isNavError: false,
  isNavOpen: false
}

export const LoadingReducer = (state = State, action) => {
  switch (action.type) {
    case NAV_START:
      return {
        ...state,
        ...action.payload
      }

    case NAV_END:
      return {
        ...state,
        ...action.payload
      }

    case NAV_ERROR:
      return {
        ...state,
        ...action.payload
      }

    case NAV_OPEN:
    case NAV_CLOSE:
    console.log(action.payload)
      return {
        ...state,
        ...action.payload
      }

    default:
      return state;
  }
}