import { createSelector } from 'reselect';
import { AppState } from './models';

export const getNavStart = (state: AppState) => state.navigation.isNavStart;