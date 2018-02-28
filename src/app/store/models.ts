import { Action } from "@ngrx/store";
import { LoadingReducer } from "./loading.reducer";

export interface INavigation {
    isNavStart: boolean;
    isNavEnd: boolean;
    isNavError: boolean;
    isNavOpen: boolean;
}

export interface AppState {
    navigation: INavigation
}

export const reducers = {
    navigation: LoadingReducer
}