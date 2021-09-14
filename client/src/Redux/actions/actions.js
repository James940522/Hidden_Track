export const USER_INFO = 'USER_INFO';
export const INPUT_MUSIC = 'INPUT_MUSIC';
export const IS_LOGIN = 'IS_LOGIN';
export const IS_LOGIN_MODAL_OPEN = 'IS_LOGIN_MODAL_OPEN';
export const TRACK_DETAIL = 'TRACK_DETAIL';

export function getUserInfo (userInfo) {
  return {
    type: USER_INFO,
    payload: {
      userInfo: userInfo
    }
  };
}

export function isLoginHandler (boolean) {
  return {
    type: IS_LOGIN,
    payload: {
      isLogin: boolean
    }
  };
}

export function isLoginModalOpenHandler (boolean) {
  return {
    type: IS_LOGIN_MODAL_OPEN,
    payload: {
      isLoginModalOpen: boolean
    }
  };
}

export function inputPlayList (playList) {
  return {
    type: INPUT_MUSIC,
    payload: {
      playList: playList
    }
  };
}

export function getTrackDetails (trackDetail) {
  return {
    type: TRACK_DETAIL,
    payload: {
      trackDetail: trackDetail
    }
  };
}