import { combineReducers } from 'redux';

import githubInfo from './githubInfo';
import githubRepos from './githubRepos';

export const reducers = combineReducers({ githubInfo, githubRepos });