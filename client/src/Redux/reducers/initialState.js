export const initialState = {
  isLogin: {
    isLogin: false
  },
  isLoginModalOpen: {
    isLoginModalOpen: false
  },
  accessToken: {
    accessToken: ''
  },
  userInfo: {
    id: '',
    loginId: '',
    profile: '',
    nickName: '',
    // nickName: '',
    // admin: 'listener',
    admin: 'listener',
    // 만약 admin이 'artist'라면 아래 정보도 받음
    userArtist: {
      agency: '',
      email: '',
      debut: ''
    }
  },
  // onClickModify: {
  // onClickModify: true
  //   onClickModify: false
  // },
  isLoading: {
    isLoading: false
  },
  trackList: [
    // {
    //   id: 1,
    //   img: 'https://take-closet-bucket.s3.ap-northeast-2.amazonaws.com/%EC%95%A8%EB%B2%94+img/Traffic_light.jpg',
    //   title: '신호등',
    //   userid: 1,
    //   user: {
    //     nickname: '이무진'
    //   }
    // },
    // {
    //   id: 2,
    //   img: 'https://take-closet-bucket.s3.ap-northeast-2.amazonaws.com/%EC%95%A8%EB%B2%94+img/Sweet_Dreams.jpg',
    //   title: 'Sweet Dreams',
    //   userid: 2,
    //   user: {
    //     nickname: 'Eurythmics'
    //   }
    // },
    // {
    //   id: 3,
    //   img: 'https://take-closet-bucket.s3.ap-northeast-2.amazonaws.com/%EC%95%A8%EB%B2%94+img/wind.jpg',
    //   title: '바람이나 좀 쐐',
    //   userid: 3,
    //   user: {
    //     nickname: '개리'
    //   }
    // }
  ],

  trackDetail: {
    track: {
      id: 1,
      title: 'OHAYO MY NIGHT',
      img: 'https://hidden-track-bucket.s3.ap-northeast-2.amazonaws.com/trackimage/6661632750318621.jpg',
      genre: '랩/힙합',
      soundtrack: 'https://hidden-track-bucket.s3.ap-northeast-2.amazonaws.com/trackfile/1632749816864.mp3',
      releaseAt: '2020.06.20',
      lyric: '',
      user: {
        nickName: '디핵 (D-Hack), PATEKO (파테코)'
      },
      hashtags: [],
      replies: []
    },
    like: '',
    gradeAev: '',
    myLike: false
  },

  // {
  //   id: 7,
  //   title: 'OHAYO MY NIGHT',
  //   img: 'https://hidden-track-bucket.s3.ap-northeast-2.amazonaws.com/trackimage/6661632750318621.jpg',
  //   genre: '랩/힙합',
  //   releaseAt: '2020.06.20',
  //   lyric: `
  //   너를 사랑하고 있어
  //   너를 사랑하고 있어
  //   자기야 날 사랑해주면 안 될까
  //   말처럼 쉽지는 않은 걸 알지만
  //   세게 날 안아주면 안 될까
  //   오늘따라 세상이 무섭단 말이야
  //   잠깐 인공호흡을 해주라
  //   왠지 숨이 잘 안 쉬어져서 난
  //   날 놓을 거면 과거에 놔주라
  //   네가 있는 시간에서 죽어갈 거야
  //   우리 그냥 결혼하면 안 될까
  //   돈은 내가 열심히 벌 테니까
  //   이 세상과 내가 눈감는 날
  //   까지만 날 사랑한다 말해주라
  //   내가 너를 사랑해도
  //   네가 날 안 사랑해도
  //   우린 나름대로 행복할 거야
  //   내 방 천장에 그려 본
  //   내 우주에게 물어본
  //   말은 나를 사랑하면 안 될까
  //   오사카나 오키나와의 바다
  //   내 뮤비들을 찍었던 곳 말이야
  //   같이 가자 약속했었잖아
  //   그 약속이 깨질까 봐 겁이 나
  //   WHUTUF이 결혼한다 하던 날
  //   진짜 처음으로 걔가 부럽더라
  //   하얀 웨딩드레스를 입은 아름다운
  //   너와 영원을 말할 수 있을까
  //   가족이 되어주라
  //   내 집이 되어주라
  //   나도 날 줄 테니 너도 널 주라
  //   평생의 연인이야
  //   네 말대로 말이야
  //   그래 별과 우주잖아
  //   날 사랑하지 않는다면
  //   나의 사랑 반을 받아
  //   남은 사랑의 반도
  //   내가 채워줄 거야 꼭
  //   내가 너를 사랑해도
  //   네가 날 안 사랑해도
  //   우린 나름대로 행복할 거야
  //   내 방 천장에 그려 본
  //   내 우주에게 물어본
  //   말은 나를 사랑하면 안 될까
  //   내가 너를 사랑해도
  //   네가 날 안 사랑해도
  //   우린 나름대로 행복할 거야
  //   내 방 천장에 그려 본
  //   내 우주에게 물어본
  //   말은 나를 사랑하면 안 될까`,
  //   soundTrack: 'https://hidden-track-bucket.s3.ap-northeast-2.amazonaws.com/trackfile/1632749816864.mp3',
  //   user: {
  //     nickName: '디핵 (D-Hack), PATEKO (파테코)'
  //   }
  // }

  // playList: [
  //   {
  //     id: 1,
  //     track: {
  //       id:1,
  //       title: '신호등',
  //       img: 'https://take-closet-bucket.s3.ap-northeast-2.amazonaws.com/%EC%95%A8%EB%B2%94+img/Traffic_light.jpg',
  //       genre: '록/메탈',
  //       releaseAt: '2021-05-14',
  //       lyric: `
  //       이제야 목적지를 정했지만
  //       가려한 날 막아서네 난 갈 길이 먼데
  //       새빨간 얼굴로 화를 냈던
  //       친구가 생각나네
  //       이미 난 발걸음을 떼었지만
  //       가려한 날 재촉하네 걷기도 힘든데
  //       새파랗게 겁에 질려 도망간
  //       친구가 뇌에 맴도네
  //       건반처럼 생긴 도로 위
  //       수많은 동그라미들 모두가
  //       멈췄다 굴렀다 말은 잘 들어
  //       그건 나도 문제가 아냐
  //       붉은색 푸른색 그 사이
  //       3초 그 짧은 시간
  //       노란색 빛을 내는
  //       저기 저 신호등이
  //       내 머릿속을 텅 비워버려
  //       내가 빠른지도
  //       느린지도 모르겠어
  //       그저 눈앞이 샛노랄 뿐이야
  //       솔직히 말하자면 차라리
  //       운전대를 못 잡던 어릴 때가
  //       더 좋았었던 것 같아
  //       그땐 함께 온 세상을
  //       거닐 친구가 있었으니
  //       건반처럼 생긴 도로 위
  //       수많은 조명들이 날 빠르게
  //       번갈아 가며 비추고 있지만
  //       난 아직 초짜란 말이야
  //       붉은색 푸른색 그 사이
  //       3초 그 짧은 시간
  //       노란색 빛을 내는 저기 저 신호등이
  //       내 머릿속을 텅 비워버려
  //       내가 빠른지도
  //       느린지도 모르겠어
  //       그저 눈앞이 샛노랄 뿐이야
  //       꼬질꼬질한 사람이나
  //       부자 곁엔 아무도 없는
  //       삼색 조명과 이색 칠 위에
  //       서 있어 괴롭히지 마
  //       붉은색 푸른색 그 사이
  //       3초 그 짧은 시간
  //       노란색 빛을 내는 저기 저 신호등이
  //       내 머릿속을 텅 비워버려
  //       내가 빠른지도
  //       느린지도 모르겠어
  //       그저 눈앞이 샛노랄 뿐이야`,
  //       soundTrack: 'https://hidden-track-bucket.s3.ap-northeast-2.amazonaws.com/trackfile/1632746909728.mp3',
  //       user: {
  //         nickName: '이무진'
  //       }
  //   }
  //   },
  //   {
  //     id: 2,
  //     track: {
  //       id: 2,
  //       title: 'Sweet Dreams',
  //       img: 'https://take-closet-bucket.s3.ap-northeast-2.amazonaws.com/%EC%95%A8%EB%B2%94+img/Sweet_Dreams.jpg',
  //       genre: 'POP',
  //       releaseAt: '1991',
  //       lyric: `
  //       Sweet dreams are made of this
  //       Who am I to disagree
  //       I travel the world
  //       And the seven seas
  //       Everybody's looking for something
  //       Some of them want to use you
  //       Some of them want to get used by you
  //       Some of them want to abuse you
  //       Some of them want to be abused

  //       Sweet dreams are made of this
  //       Who am I to disagree
  //       I travel the world
  //       And the seven seas
  //       Everybody's looking for something

  //       Hold your head up
  //       Keep your head up MOVIN ON
  //       Hold your head up MOVIN ON
  //       Keep your head up MOVIN ON
  //       Hold your head up MOVIN ON
  //       Keep your head up MOVIN ON
  //       Hold your head up MOVIN ON
  //       Keep your head up

  //       Some of them want to use you
  //       Some of them want to get used by you
  //       Some of them want to abuse you
  //       Some of them want to be abused

  //       Hold your head up
  //       Keep your head up MOVIN ON
  //       Hold your head up MOVIN ON
  //       Keep your head up MOVIN ON
  //       Hold your head up MOVIN ON
  //       Keep your head up MOVIN ON
  //       Hold your head up MOVIN ON
  //       Keep your head up

  //       Sweet dreams are made of this
  //       Who am I to disagree
  //       I travel the world
  //       And the seven seas
  //       Everybody's looking for something
  //       Sweet dreams are made of this
  //       Who am I to disagree
  //       I travel the world
  //       And the seven seas
  //       Everybody's looking for something
  //       Sweet dreams are made of this
  //       Who am I to disagree
  //       I travel the world
  //       And the seven seas
  //       Everybody's looking for something
  //       Sweet dreams are made of this
  //       Who am I to disagree
  //       I travel the world
  //       And the seven seas
  //       Everybody's,`,
  //       soundTrack: 'https://hidden-track-bucket.s3.ap-northeast-2.amazonaws.com/trackfile/1632746834137.mp3',
  //       user: {
  //         nickName: 'Eurythmics'
  //       }
  //     }
  //   },
  //   {
  //     id: 3,
  //     track: {
  //       id: 3,
  //       title: '바람이나 좀 쐐',
  //       img: 'https://take-closet-bucket.s3.ap-northeast-2.amazonaws.com/%EC%95%A8%EB%B2%94+img/wind.jpg',
  //       genre: '랩/힙합',
  //       releaseAt: '2015.09.21',
  //       lyric: `
  //       나가서 바람이나 좀 쐐
  //       아무도 찾지 않는 곳에
  //       조금 슬퍼 보이면 어때
  //       너만 그런 게 아닐 텐데
  //       때로는 lonely lonely lonely
  //       때로는 lonely lonely lonely
  //       나가서 바람이나 좀 쐐
  //       아무도 찾지 않는 곳에
  //       너와 헤어지고 난 후에 한번에 관계
  //       역시 넌 최고였어
  //       사랑을 할 땐 감동밖에
  //       누가 널 만나게 될진 모르겠지만
  //       그 자식 운이 텄네
  //       그래 슬픈 생각보단
  //       오히려 이렇게 쿨한게 편해
  //       열 편의 영화 열 번의 취함
  //       열 명의 위로와 열 번의 낮과 밤
  //       그걸로 충분하면 좋겠어
  //       지금 이 힘든 이별을 견디는 시간
  //       많은 일들과 작은 웃음들
  //       억지로 만들어가며 적응하는 중
  //       좋은 것만 생각해
  //       그래야 좀 맘이 편해
  //       어차피 사랑도 세월 따라 다 변해
  //       추억 같은 노래
  //       그래 어쩌면 지금 내게 필요한 건
  //       힘이 들 때마다
  //       네가 항상 웃으면서 내게 했던 그 말
  //       나가서 바람이나 좀 쐐
  //       아무도 찾지 않는 곳에
  //       조금 슬퍼 보이면 어때
  //       너만 그런 게 아닐 텐데
  //       때로는 lonely lonely lonely
  //       때로는 lonely lonely lonely
  //       나가서 바람이나 좀 쐐
  //       아무도 찾지 않는 곳에
  //       사랑은 가고
  //       난 그냥 또 혼자 사는 남자
  //       라면 물 맞추기 선수
  //       가끔씩은 혼잣말하며
  //       외로운 소파와 함께 살아
  //       잠이 들기 전엔 TV 드라마 혹은 영화
  //       네가 없이도 시간은 잘도 흘러가고
  //       너의 연락 없는 전화는 그냥 꺼놔
  //       아마 내일도 그러겠지만
  //       알게 뭐야 끝난 거야
  //       이미 우리 사랑은 죽었고
  //       이별은 춥고 가슴 아픈 평화
  //       또 때로는 무서운 밤의
  //       긴 침묵 같은 거야
  //       이별이 그런 거지 뭐
  //       멀쩡하다가도 울컥하는
  //       실컷 미워하다가 눈물 참는 거
  //       밤이 되면 높은 빌딩
  //       깜박거리는 빨간 불빛
  //       그처럼 네가 떠올라 더 지쳐가는 거
  //       이별은 그런 거야 이별은 그런 거야
  //       멀쩡하다가도 울컥 하는 거
  //       이별은 그런 거야 이별은 그런 거야
  //       실컷 미워하다가도 눈물 참는 거
  //       나가서 바람이나 좀 쐐
  //       아무도 찾지 않는 곳에
  //       조금 슬퍼 보이면 어때
  //       너만 그런 게 아닐 텐데
  //       때로는 lonely lonely lonely
  //       때로는 lonely lonely lonely
  //       나가서 바람이나 좀 쐐
  //       이제는 내가 없는 곳에
  //       나가서 바람이나 좀 쐐
  //       조금 슬퍼 보이면 어때
  //       나가서 바람이나 좀 쐐
  //       조금 슬퍼 보이면 어때`,
  //       soundTrack: 'https://take-closet-bucket.s3.ap-northeast-2.amazonaws.com/%EC%9D%8C%EC%95%85/05.+%EB%B0%94%EB%9E%8C%EC%9D%B4%EB%82%98+%EC%A2%80+%EC%90%90+(Feat.+MIWOO).mp3',
  //       user: {
  //         nickName: '개리'
  //       }
  //   }
  //   },
  //   {
  //     id: 4,
  //     track: {
  //       id: 4,
  //       title: 'Love',
  //       img: 'https://take-closet-bucket.s3.ap-northeast-2.amazonaws.com/%EC%95%A8%EB%B2%94+img/love.jpg',
  //       genre: '댄스',
  //       releaseAt: '2008.01.17',
  //       lyric: `
  //       야릇야릇한 널 향한 나의 맘
  //       들리니 I need you I love you
  //       이런이런 날 어서 가져가줘
  //       들리니 I need you I love you
  //       Oh 내 맘을 담아 날리는 내 kiss
  //       너를 향한 사랑 담아
  //       넌 아직 잘 모를 거야
  //       내 맘이 어떤지
  //       알면서도 이렇게
  //       날 혼자 둔거니
  //       L O V E
  //       사랑이란 이름 아래 난 내 맘
  //       대 로 지 이
  //       너도 역시 날 좋아하고
  //       있을 거라고 믿는다네
  //       난 너를 그려 매 순간에
  //       하루 종일 현실을 난 망각해
  //       하지만 이럴 수 밖에
  //       아른아른한 너의 목소리
  //       들리니 I need you I love you
  //       나긋나긋이 난 대답하겠지
  //       들리니 I need you I love you
  //       야릇야릇한 널 향한 나의 맘
  //       들리니 I need you I love you
  //       이런이런 날 어서 가져가줘
  //       들리니 I need you I love you
  //       L O V E L O V E
  //       L O V E L O V E
  //       아이 그러지 말고 얘기를 해봐
  //       늦기 전에 말을 해봐
  //       나 아닌 누군가로는
  //       안되는 걸 알아
  //       깐깐한 널 알잖아
  //       나 밖엔 없잖아
  //       내게 다가올 듯 말듯한
  //       네 행동에 다른 사람들은
  //       모르는 듯 해
  //       언제나 니 시선의
  //       그 끝은 바로 나나나 나였어
  //       처음부터 느끼던 바였어
  //       그대여 용기를 내 어서
  //       솔직해져 봐 yeah that's all
  //       아른아른한 너의 목소리
  //       들리니 I need you I love you
  //       나긋나긋이 난 대답하겠지
  //       들리니 I need you I love you
  //       야릇야릇한 널 향한 나의 맘
  //       들리니 I need you I love you
  //       이런이런 날 어서 가져가줘
  //       들리니 I need you I love you
  //       I need you I want you
  //       I love you L O V E
  //       Fly
  //       너와 함께라면 난
  //       Cry
  //       I don't cry no more aiight
  //       네 세계로
  //       내가 들어가게
  //       나에게로
  //       다가와줘 ma babe
  //       그 누가 나를 차지해도
  //       I want you need you
  //       love you babe
  //       Is it all right
  //       Is it all right
  //       그렇지 않잖아 모든 게 차이나
  //       내 웃음 뒤에 숨긴 눈물이
  //       흘러 내려 버리기 전에
  //       나의 손을 잡아줘
  //       그리고 내게 말해줘 L O V E
  //       아른아른한 너의 목소리
  //       들리니 I need you I love you
  //       나긋나긋이 난 대답하겠지
  //       들리니 I need you I love you
  //       야릇야릇한 널 향한 나의 맘
  //       들리니 I need you I love you
  //       이런이런 날 어서 가져가줘
  //       들리니 I need you I love you`,
  //       soundTrack: 'https://take-closet-bucket.s3.ap-northeast-2.amazonaws.com/%EC%9D%8C%EC%95%85/003+%5B%EB%B8%8C%EB%9D%BC%EC%9A%B4+%EC%95%84%EC%9D%B4%EB%93%9C+%EA%B1%B8%EC%8A%A4+Single%5D+-+02+L.O.V.E.mp3',
  //       user: {
  //         nickName: '브라운 아이드 걸스'
  //       }
  //   }
  //   },
  //   {
  //     id: 5,
  //     track: {
  //       id: 5,
  //       title: 'To Myself',
  //       img: 'https://take-closet-bucket.s3.ap-northeast-2.amazonaws.com/%EC%95%A8%EB%B2%94+img/to_my_self.jpeg',
  //       genre: '랩/힙합',
  //       releaseAt: '2017.03.15',
  //       lyric: `
  //       DPR we gang gang
  //       rep it every day ay
  //       I ain’t feelin them fakes
  //       they don’t entertain
  //       DPR we gang gang
  //       DPR we gang gang
  //       DPR we gang gang
  //       DPR we gang gang
  //       okay now
  //       drop that sound
  //       tear it down
  //       when around
  //       then we out
  //       then we out
  //       hold us down
  //       hold us down
  //       오늘도 완벽한 그림을 그려
  //       또 꿈을 꾸며 나는 오늘을 잊어
  //       I look at the stars &
  //       I look in the mirror
  //       너는 날 믿고 나는 널 더 믿어
  //       알고있지 가끔가다 힘들거
  //       언제나 지켜 가족과 너의 신념
  //       행동 보다 말로 하는건 참 쉬워
  //       그러니 실천으로 다음 페이지
  //       till i die 에서도 내가 말했지 yeah
  //       imma be a legend you
  //       just watch and see yeah
  //       hater 들은 여전히 말만 많지
  //       괜찮아 이젠 팬들이
  //       나의 곁에 있지 yeah
  //       힘이되는 응원 너가 고맙기에
  //       1분1초 빨리 지금 너한테
  //       너를 위한 음악
  //       studio late night
  //       오늘 밤 에도 난
  //       thinking to my self
  //       Who am I
  //       now i know
  //       thinking to my self
  //       yeah yeah
  //       i don’t know
  //       just got me
  //       thinking to my self
  //       thinking to my
  //       Who am I
  //       yeah yeah
  //       i don’t know
  //       just got me
  //       thinking to my
  //       DPR we gang gang
  //       okay now
  //       drop that sound
  //       tear it down
  //       when around
  //       then we out
  //       then we out
  //       hold us down
  //       hold us down
  //       okay
  //       일단 sitdown & rewind the time
  //       24시를 돌려 그래 먼 옛날
  //       sns는 없고
  //       motorola 하면 당연 부자
  //       또 댄스음악이 유행했던
  //       back to 1993
  //       엄마가 고생끝에 낳은 홍다빈
  //       여러 문제 많았지만 결국 극복
  //       했고 끝내 전설이 될 아이
  //       fast forward
  //       yeah look at me now woo
  //       지금의 위치는 무대 위야 uh
  //       이제서야 느낌이 와
  //       내앞에 보여지는 여러 fan들의
  //       얼굴 내가 그토록 그리던 그림이고
  //       그리고 이젠
  //       with my one & only brothers
  //       펼쳐 새 시대
  //       yeah look at my team now
  //       yeah
  //       shhh got me
  //       thinking to my self
  //       Who am I
  //       now i know
  //       thinking to my self
  //       yeah yeah
  //       i don’t know
  //       just got me
  //       thinking to my self
  //       Who am I
  //       thinking to my
  //       Who am I
  //       yeah yeah
  //       i don’t know
  //       just got me
  //       DPR we gang gang
  //       okay now
  //       drop that sound
  //       tear it down
  //       when around
  //       then we out
  //       then we out
  //       hold us down
  //       hold us down
  //       DPR we gang gang
  //       DPR we gang gang
  //       rep it every day ay
  //       I ain’t feelin them fakes
  //       they don’t entertain
  //       DPR we gang gang
  //       DPR we gang gang
  //       DPR we gang gang
  //       DPR we gang gang
  //       DPR we gang gang
  //       okay now
  //       drop that sound
  //       tear it down
  //       when around
  //       then we out
  //       then we out
  //       hold us down
  //       hold us down`,
  //       soundTrack: 'https://take-closet-bucket.s3.ap-northeast-2.amazonaws.com/%EC%9D%8C%EC%95%85/DPR+LIVE+-+To+Myself.mp3',
  //       user: {
  //         nickName: 'DPR LIVE'
  //       }
  //     }
  //   },
  //   {
  //     id: 6,
  //     track: {
  //       id: 6,
  //       title: 'Better Now',
  //       img: 'https://take-closet-bucket.s3.ap-northeast-2.amazonaws.com/%EC%95%A8%EB%B2%94+img/betterNow.jpg',
  //       genre: '랩/힙합',
  //       releaseAt: '2018.04.27',
  //       lyric: `
  //       You probably think that
  //       you are better now better now
  //       You only say that
  //       'cause I'm not around
  //       not around
  //       You know I never meant
  //       to let you down let you down
  //       Woulda gave you anything
  //       woulda gave you everything
  //       You know I say that
  //       I am better nowbetter now
  //       I only say that
  //       'cause you're not around
  //       not around
  //       You know I never meant
  //       to let you down let you down
  //       Woulda gave you anything
  //       woulda gave you everything
  //       I did not believe
  //       that it would end no
  //       Everything came second
  //       to the Benzo
  //       You're not even speakin'
  //       to my friends no
  //       You knew all my uncles
  //       and my aunts though
  //       Twenty candles blow 'em out
  //       and open your eyes
  //       We were lookin' forward to the
  //       rest of our lives
  //       Used to keep my picture posted
  //       by your bedside
  //       Now it's in your dresser
  //       with the socks you don't like
  //       And I'm rollin' rollin' rollin' rollin'
  //       With my brothers
  //       like it's Jonas Jonas
  //       Drinkin' Henny and I'm tryna forget
  //       But I can't get this
  //       shit outta my head
  //       You probably think
  //       that you are better now better now
  //       You only say that
  //       'cause I'm not around
  //       not around
  //       You know I never meant to
  //       let you down let you down
  //       Woulda gave you anything
  //       woulda gave you everything
  //       You know I say
  //       that I am better now better now
  //       I only say that
  //       'cause you're not around
  //       not around
  //       You know I never meant to
  //       let you down let you down
  //       Woulda gave you anything
  //       woulda gave you everything
  //       I seen you with your other dude
  //       He seemed like he was pretty cool
  //       I was so broken over you
  //       Life it goes on what can you do
  //       I just wonder what it’s gonna take
  //       Another foreign or a bigger chain
  //       Because no matter how
  //       my life has changed
  //       I keep on looking back on better days
  //       You probably think
  //       that you are better now better now
  //       You only say that
  //       'cause I'm not around not around
  //       You know I never
  //       meant to let you down let you down
  //       Woulda gave you anything
  //       woulda gave you everything
  //       You know I say
  //       that I am better now better now
  //       I only say that
  //       'cause you're not around not around
  //       You know I never meant
  //       to let you down let you down
  //       Woulda gave you anything
  //       woulda gave you everything
  //       Oh-oh
  //       I promise
  //       I swear to you I'll be okay
  //       You're only the love of my life
  //       You probably think
  //       that you are better now better now
  //       You only say that
  //       'cause I'm not around not around
  //       You know I never meant
  //       to let you down let you down
  //       Woulda gave you anything
  //       woulda gave you everything
  //       You know I say
  //       that I am better now better now
  //       I only say that
  //       'cause you're not around not around
  //       You know I never meant to
  //       let you down let you down
  //       Woulda gave you anything
  //       woulda gave you everything
  //       Oh-oh`,
  //       soundTrack: 'https://take-closet-bucket.s3.ap-northeast-2.amazonaws.com/%EC%9D%8C%EC%95%85/Better+Now.mp3',
  //       user: {
  //         nickName: 'Post Malone'
  //       }
  //     }
  //   },
  //   {
  //     id: 7,
  //     track: {
  //       id:7,
  //       title: 'OHAYO MY NIGHT',
  //       img: 'https://hidden-track-bucket.s3.ap-northeast-2.amazonaws.com/trackimage/6661632750318621.jpg',
  //       genre: '랩/힙합',
  //       releaseAt: '2020.06.20',
  //       lyric: `
  //       너를 사랑하고 있어
  //       너를 사랑하고 있어
  //       자기야 날 사랑해주면 안 될까
  //       말처럼 쉽지는 않은 걸 알지만
  //       세게 날 안아주면 안 될까
  //       오늘따라 세상이 무섭단 말이야
  //       잠깐 인공호흡을 해주라
  //       왠지 숨이 잘 안 쉬어져서 난
  //       날 놓을 거면 과거에 놔주라
  //       네가 있는 시간에서 죽어갈 거야
  //       우리 그냥 결혼하면 안 될까
  //       돈은 내가 열심히 벌 테니까
  //       이 세상과 내가 눈감는 날
  //       까지만 날 사랑한다 말해주라
  //       내가 너를 사랑해도
  //       네가 날 안 사랑해도
  //       우린 나름대로 행복할 거야
  //       내 방 천장에 그려 본
  //       내 우주에게 물어본
  //       말은 나를 사랑하면 안 될까
  //       오사카나 오키나와의 바다
  //       내 뮤비들을 찍었던 곳 말이야
  //       같이 가자 약속했었잖아
  //       그 약속이 깨질까 봐 겁이 나
  //       WHUTUF이 결혼한다 하던 날
  //       진짜 처음으로 걔가 부럽더라
  //       하얀 웨딩드레스를 입은 아름다운
  //       너와 영원을 말할 수 있을까
  //       가족이 되어주라
  //       내 집이 되어주라
  //       나도 날 줄 테니 너도 널 주라
  //       평생의 연인이야
  //       네 말대로 말이야
  //       그래 별과 우주잖아
  //       날 사랑하지 않는다면
  //       나의 사랑 반을 받아
  //       남은 사랑의 반도
  //       내가 채워줄 거야 꼭
  //       내가 너를 사랑해도
  //       네가 날 안 사랑해도
  //       우린 나름대로 행복할 거야
  //       내 방 천장에 그려 본
  //       내 우주에게 물어본
  //       말은 나를 사랑하면 안 될까
  //       내가 너를 사랑해도
  //       네가 날 안 사랑해도
  //       우린 나름대로 행복할 거야
  //       내 방 천장에 그려 본
  //       내 우주에게 물어본
  //       말은 나를 사랑하면 안 될까`,
  //       soundTrack: 'https://hidden-track-bucket.s3.ap-northeast-2.amazonaws.com/trackfile/1632749816864.mp3',
  //       user: {
  //         nickName: '디핵 (D-Hack), PATEKO (파테코)'
  //       }
  //     }
  //   }
  // ]
  playList: [
    // {
    //   id: 7,
    //   title: 'OHAYO MY NIGHT',
    //   img: 'https://hidden-track-bucket.s3.ap-northeast-2.amazonaws.com/trackimage/6661632750318621.jpg',
    //   genre: '랩/힙합',
    //   releaseAt: '2020.06.20',
    //   lyric: `
    //   너를 사랑하고 있어
    //   너를 사랑하고 있어
    //   자기야 날 사랑해주면 안 될까
    //   말처럼 쉽지는 않은 걸 알지만
    //   세게 날 안아주면 안 될까
    //   오늘따라 세상이 무섭단 말이야
    //   잠깐 인공호흡을 해주라
    //   왠지 숨이 잘 안 쉬어져서 난
    //   날 놓을 거면 과거에 놔주라
    //   네가 있는 시간에서 죽어갈 거야
    //   우리 그냥 결혼하면 안 될까
    //   돈은 내가 열심히 벌 테니까
    //   이 세상과 내가 눈감는 날
    //   까지만 날 사랑한다 말해주라
    //   내가 너를 사랑해도
    //   네가 날 안 사랑해도
    //   우린 나름대로 행복할 거야
    //   내 방 천장에 그려 본
    //   내 우주에게 물어본
    //   말은 나를 사랑하면 안 될까
    //   오사카나 오키나와의 바다
    //   내 뮤비들을 찍었던 곳 말이야
    //   같이 가자 약속했었잖아
    //   그 약속이 깨질까 봐 겁이 나
    //   WHUTUF이 결혼한다 하던 날
    //   진짜 처음으로 걔가 부럽더라
    //   하얀 웨딩드레스를 입은 아름다운
    //   너와 영원을 말할 수 있을까
    //   가족이 되어주라
    //   내 집이 되어주라
    //   나도 날 줄 테니 너도 널 주라
    //   평생의 연인이야
    //   네 말대로 말이야
    //   그래 별과 우주잖아
    //   날 사랑하지 않는다면
    //   나의 사랑 반을 받아
    //   남은 사랑의 반도
    //   내가 채워줄 거야 꼭
    //   내가 너를 사랑해도
    //   네가 날 안 사랑해도
    //   우린 나름대로 행복할 거야
    //   내 방 천장에 그려 본
    //   내 우주에게 물어본
    //   말은 나를 사랑하면 안 될까
    //   내가 너를 사랑해도
    //   네가 날 안 사랑해도
    //   우린 나름대로 행복할 거야
    //   내 방 천장에 그려 본
    //   내 우주에게 물어본
    //   말은 나를 사랑하면 안 될까`,
    //   soundTrack: 'https://hidden-track-bucket.s3.ap-northeast-2.amazonaws.com/trackfile/1632749816864.mp3',
    //   user: {
    //     nickName: '디핵 (D-Hack), PATEKO (파테코)'
    //   }
    // }
  ]

};
