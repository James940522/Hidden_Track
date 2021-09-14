import { combineReducers } from 'redux';
import { USER_INFO, IS_LOGIN, IS_LOGIN_MODAL_OPEN, INPUT_MUSIC, TRACK_DETAIL } from '../actions/actions';
import { initialState } from './initialState';

const rootReducer = combineReducers({
  isLoginReducer,
  isLoginModalOpenReducer,
  userInfoReducer,
  playListReducer,
  trackDetailReducer
});

// reducer : 변화를 일으키는 함수
function isLoginReducer (state = initialState.isLogin, action) {
  // state : 현재 상태, action을 전달받아 새로운 상태를 만들어서 반환함
  // 리듀서는 꼭 불변성을 지켜줘야 함
  switch (action.type) {
    case IS_LOGIN:
      return Object.assign({}, state, {
        isLogin: action.payload.isLogin
      });
    default: return state;
  }
}

function isLoginModalOpenReducer (state = initialState.isLoginModalOpen, action) {
  switch (action.type) {
    case IS_LOGIN_MODAL_OPEN:
      return Object.assign({}, state, {
        isLoginModalOpen: action.payload.isLoginModalOpen
      });
    default: return state;
  }
}

function userInfoReducer (state = initialState.userInfo, action) {
  switch (action.type) {
    case USER_INFO:
      return Object.assign({}, state, {
        userInfo: action.payload.userInfo
      });
    default: return state;
  }
}

function playListReducer (state = initialState.playList, action) {
  switch (action.type) {
    case INPUT_MUSIC:
      return Object.assign({}, state, {
        playList: action.payload.playList
      });
    default: return state;
  }
}

function trackDetailReducer (state = initialState.trackDetail, action) {
  switch (action.type) {
    case TRACK_DETAIL:
      return Object.assign({}, state, {
        trackDetail: action.payload.trackDetail
      });
    default: return state;
  }
}

export default rootReducer;