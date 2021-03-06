import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import './index.scss';

function HashTag ({ tagList, searchTag }) {
  // const tagList = [{ tag: '가을' }, { tag: '우울할때듣는곡' }, { tag: '설렘' }, { tag: '드라이브' }, { tag: '감미로운' }, { tag: '인디' }, { tag: '랩' }, { tag: '흑인음악' }, { tag: '카페' }, { tag: '10' }, { tag: '11' }, { tag: '12사' }, { tag: '13' }, { tag: '14사432랑' }, { tag: '15사랑' }, { tag: '16사' }, { tag: '17사랑' }, { tag: '18사' }, { tag: '19' }, { tag: '2' }];
  const history = useHistory();
  // console.log('해시태그', tagList);
  const [allTag, setAllTag] = useState(['음악']);

  useEffect(() => {
    if (!tagList) {
      axios.get(`${process.env.REACT_APP_API_URL}/search/hashtag`)
        .then(res => {
          console.log('fdsfa', res.data);
          setAllTag(res.data.hashTag);
        });
    }
  }, []);

  // 해시태그 클릭시 실행되는 함수
  function clickHashTag (e, idx) {
    // console.log('타겟',tagList[idx].tag)
    e.preventDefault();
    // console.log(e.target.getAttribute('value'))
    // console.log(e.target.parentElement.getAttribute('value'))
    // console.log('키',e.target.childNodes.getAttribute('value'))
    let hashTag;
    if (tagList) {
      hashTag = tagList[idx].tag;
    } else {
      hashTag = allTag[idx].tag;
    }

    history.push({
      pathname: `/searchtrack/${hashTag}`,
      state: {
        hashTag: hashTag
      }
    });
  }

  console.log(tagList);

  return (
    <section id='hashtag-section'>
      <ul className='hashtag-ul'>
        {tagList
          ? tagList.map((el, idx) => {
            return (
            // <li key={idx} className={selectedTag === el.tag ? 'tag clicked-tag' : 'tag'} value={el.tag}>
              <li key={idx} className={searchTag === el.tag ? 'tag clicked-tag' : 'tag'} onClick={(e) => { clickHashTag(e, idx); }}>
                <span className='tag-title'>#{el.tag}</span>
              </li>
            );
          })
          : allTag.map((el, idx) => {
            return (
              <li key={idx} className={searchTag === el ? 'tag clicked-tag' : 'tag'} onClick={(e) => { clickHashTag(e, idx); }}>
                <span className='tag-title'>#{el}</span>
              </li>
            );
          })}
      </ul>
    </section>
  );
}

export default HashTag;
