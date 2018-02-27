import { Action, ActionReducer } from "@ngrx/store";
import { NAV_START, NAV_END, NAV_ERROR } from "./actions";

import { INavigation } from './models';

export const State: INavigation = {
  isNavStart: false,
  isNavEnd: false,
  isNavError: false
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

    default:
      return state;
  }
}