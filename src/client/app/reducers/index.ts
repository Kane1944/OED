/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import { combineReducers } from 'redux';
import maps from './maps';
import { adminSlice } from './admin';
import { currentUserSlice } from './currentUser';
import { unsavedWarningSlice } from './unsavedWarning';
import { optionsSlice } from './options';
import { baseApi } from '../redux/api/baseApi';
import { graphSlice } from './graph';
import { appStateSlice } from './appStateSlice';

export const rootReducer = combineReducers({
	appState: appStateSlice.reducer,
	graph: graphSlice.reducer,
	admin: adminSlice.reducer,
	currentUser: currentUserSlice.reducer,
	unsavedWarning: unsavedWarningSlice.reducer,
	options: optionsSlice.reducer,
	// RTK Query's Derived Reducers
	[baseApi.reducerPath]: baseApi.reducer,
	maps
});