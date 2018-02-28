import { createSelector } from 'reselect';
import { AppState } from './models';

export const getNavStart = (state: AppState) => state.navigation.isNavStart;
export const getNavEnd = (state: AppState) => state.navigation.isNavEnd;
export const getNavOpen = (state: AppState) => state.navigation.isNavOpen;