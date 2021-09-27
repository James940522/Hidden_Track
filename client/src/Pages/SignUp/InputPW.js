import React from 'react';

function InputPW ({
  inputValue,
  handleInputValue,
  validMessage,
  handleValidMessage
}) {
  // 비밀번호 입력 상태 변경
  function handlePW (e) {
    handleInputValue('password', e.target.value);
  }

  // 비밀번호 확인 입력 상태 변경
  function handleMatchPW (e) {
    handleInputValue('matchPassword', e.target.value);
  }

  // 비밀번호 유효성 검사 함수
  function isValidPW () {
    // const pattern1 = /[a-zA-Z]/;
    // const pattern2 = /[~!@#$%^&]/;
    // console.log(pattern1, pattern2)
    // for (let i = 0; i < inputValue.password.length; i++) {
    //   if (!pattern1.includes(inputValue.password[i])) {
    //     setPWValidMessage('비밀번호는 영문자(대소문자)를 포함해야 합니다.');
    //   }
    // }

    // if (inputValue.password.length < 8 || inputValue.password.length > 16) {
    //   setPWValidMessage('비밀번호는 8자 이상 16자 이하여야 합니다.');
    // }

    const check = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,16}$/.test(inputValue.password);
    console.log(check);

    if (!check) {
      handleValidMessage('validPW', '비밀번호는 8자 이상 16자 이하, 알파벳과 숫자 및 특수문자를 하나 이상 포함해야 합니다.');
    }

    if (check || !inputValue.password) {
      handleValidMessage('validPW', '');
    }
  }

  // 비밀번호 일치 여부 검사 함수
  function isMatchPW () {
    if (inputValue.password !== inputValue.matchPassword) {
      handleValidMessage('matchPW', '비밀번호가 일치하지 않습니다.');
    }

    if (inputValue.password === inputValue.matchPassword || !inputValue.matchPassword) {
      handleValidMessage('matchPW', '');
    }
  }

  return (
    <div className='sign-up-pw-box'>
      <div>
        비밀번호: <input type='password' placeholder='비밀번호를 입력하세요' onChange={(e) => handlePW(e)} onKeyUp={isValidPW} />
        {validMessage.validPW ? <p className='sign-up-pw-msg'>{validMessage.validPW}</p> : <p className='sign-up-pw-msg' />}
      </div>
      <div>
        비밀번호 확인: <input type='password' placeholder='비밀번호 확인' onChange={(e) => handleMatchPW(e)} onKeyUp={isMatchPW} />
        {validMessage.matchPW ? <p className='sign-up-pw-msg'>{validMessage.matchPW}</p> : <p className='sign-up-pw-msg' />}
      </div>
    </div>
  );
}

export default InputPW;
