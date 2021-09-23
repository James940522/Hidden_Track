import React, { useState } from 'react';
import { useHistory } from 'react-router';
import axios from 'axios';
import Condition from './Condition';
import InputID from './InputID';
import InputPW from './InputPW';
import InputNickName from './InputNickName';
import InputImage from './InputImage';
import SignUpModal from './SignUpModal';

import './index.scss';

function SignUp ({ handleNotice }) {
  // 기본 프로필 이미지
  const initialImage = 'https://take-closet-bucket.s3.ap-northeast-2.amazonaws.com/%EC%95%A8%EB%B2%94+img/profile.jpg';
  const [inputValue, setInputValue] = useState({
    id: '',
    password: '',
    matchPassword: '',
    nickName: '',
    imageFile: null,
    previewFile: null,
    imageUrl: initialImage,
    agency: '',
    debut: '',
    email: ''
  });
  const [validMessage, setValidMessage] = useState({
    duplicatedId: '',
    validPW: '',
    matchPW: '',
    duplicatedNick: ''
  });
  const [selectBtn, setSelectBtn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState('가입이 완료되었습니다.');

  const history = useHistory();

  // 입력값 수정하는 함수
  function handleInputValue (key, value) {
    setInputValue({ ...inputValue, [key]: value });
  }

  // 유효성 검사 메시지 입력하는 함수
  function handleValidMessage (key, message) {
    setValidMessage({ ...validMessage, [key]: message });
  }

  // 회원가입 완료 모달창 상태 변경 함수
  function handleModalOpen () {
    setIsOpen(!isOpen);
  }

  // 리스너, 아티스트 권한 선택 상태를 변경하는 함수
  function handleRadioBtn (e) {
    if (e.target.value === 'artist') {
      setSelectBtn(true);
    } else {
      setSelectBtn(false);
    }
  }

  // 이메일 유효성 검사 함수
  function validateEmail (email) {
    const regex = /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    return (email !== '' && email !== 'undefined' && regex.test(email));
  }

  // 가입하기 버튼 클릭시 유저 정보를 서버에 보내는 함수
  function requestSignUp (e) {
    e.preventDefault();

    // 기본 유효성 검사
    if (!inputValue.id || inputValue.id.length < 4 || validMessage.duplicatedId !== '사용 가능한 아이디 입니다.') {
      return handleNotice('아이디가 유효하지 않습니다.', 5000);
    } else if (!inputValue.password || validMessage.validPW || validMessage.matchPW) {
      return handleNotice('비밀번호가 유효하지 않습니다.', 5000);
    } else if (!inputValue.nickName || validMessage.duplicatedNick !== '사용 가능한 닉네임 입니다.') {
      return handleNotice('닉네임이 유효하지 않습니다.', 5000);
    }
    // 아티스트로 가입하는 경우의 유효성 검사
    if (selectBtn) {
      if (!inputValue.agency) return handleNotice('소속사를 입력해주세요.', 5000);
      else if (!inputValue.debut) return handleNotice('데뷔일을 입력해주세요.', 5000);
      else if (!validateEmail(inputValue.email)) return handleNotice('이메일이 유효하지 않습니다.', 5000);
    }

    // 만약 이미지를 첨부했다면
    if (inputValue.imageFile) {
      const formData = new FormData();
      formData.append('profile', inputValue.imageFile);
      // S3에 이미지 파일 폼데이터 전송 후 url 값 받아오기
      axios.post(`${process.env.REACT_APP_API_URL}/user/profile`, formData)
        .then(res => {
          console.log('S3 이미지 url 요청 응답', res.data);
          if (res.status === 200) handleInputValue('imageUrl', res.data.profile);
        })
        .then(res => {
          // 이미지 url을 성공적으로 받아왔다면
          if (res.status === 200) {
            // 회원가입 요청 보내기
            postSignUp();
          }
        })
        .catch(err => {
          console.log(err.response);
          if (err.response.status === 400) handleNotice('프로필 이미지 등록에 실패했습니다.', 5000);
          // if (err.response.status === 409) return handleNotice('이미 등록된 이미지입니다.', 5000);
        });
    }
    // 이미지 첨부 안했으면 기본 이미지로 회원가입 요청
    else {
      postSignUp();
    }
  }

  // 회원가입 요청 보내는 함수
  function postSignUp () {
    let admin = 'listener';
    if (selectBtn) admin = 'artist';
    console.log('dsfsdfsdfsd');
    axios.post(`${process.env.REACT_APP_API_URL}/user/signup`, {
      loginId: inputValue.id,
      password: inputValue.password,
      nickName: inputValue.nickName,
      profile: inputValue.imageUrl || initialImage,
      admin: admin,
      agency: inputValue.agency,
      debut: inputValue.debut,
      email: inputValue.email
    })
      .then(res => {
        console.log('회원가입 요청 응답', res.data);
        if (res.status === 201) {
          setText('가입이 완료되었습니다.');
          setIsOpen(true);
        }
      })
      .catch(err => {
        console.log(err.response);
        if (err.response.status === 400) {
          setText('잘못된 요청입니다.');
          setIsOpen(true);
        }
        if (err.response.status === 409) {
          setText('이미 등록된 사용자 입니다.');
          setIsOpen(true);
        }
      });
  }

  return (
    <div className='sign-up'>
      <h1 onClick={() => history.push('/')}>HIDDEN TRACK</h1>
      <h2>SignUp</h2>
      <form className='sign-up-container'>
        <div className='sign-up-input'>
          <InputID
            inputValue={inputValue}
            handleInputValue={handleInputValue}
            validMessage={validMessage}
            handleValidMessage={handleValidMessage}
          />
          <InputPW
            inputValue={inputValue}
            handleInputValue={handleInputValue}
            validMessage={validMessage}
            handleValidMessage={handleValidMessage}
          />
          <InputNickName
            inputValue={inputValue}
            handleInputValue={handleInputValue}
            validMessage={validMessage}
            handleValidMessage={handleValidMessage}
          />
        </div>
        <InputImage inputValue={inputValue} handleInputValue={handleInputValue} initialImage={initialImage} />
        <div className='sign-up-radio-box'>
          <div>
            <input type='radio' name='authority' value='listener' defaultChecked onClick={(e) => handleRadioBtn(e)} />리스너 권한으로 가입
          </div>
          <div>
            <input type='radio' name='authority' value='artist' onClick={(e) => handleRadioBtn(e)} />아티스트 권한으로 가입
          </div>
        </div>
        {selectBtn ? <Condition handleInputValue={handleInputValue} /> : null}
        <button onClick={(e) => requestSignUp(e)}>가입하기</button>
      </form>
      {isOpen
        ? <div>
          <SignUpModal isOpen={isOpen} handleModalOpen={handleModalOpen} text={text} />
        </div>
        : null}
    </div>
  );
}

export default SignUp;
