import { combineReducers } from 'redux';

import githubInfo from './githubInfo';
import githubRepos from './githubRepos';
import switchMode from './switchMode';

export const reducers = combineReducers({ githubInfo, githubRepos, switchMode });