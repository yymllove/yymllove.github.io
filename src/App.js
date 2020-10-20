/* eslint-disable jsx-a11y/accessible-emoji */
import { GoMail } from 'react-icons/go';
import { GoHome } from 'react-icons/go';
import {IoMdFilm, IoMdHeart} from 'react-icons/io';
import { IoIosMailUnread, IoIosContacts } from 'react-icons/io';
import { FaBullhorn, FaCameraRetro } from 'react-icons/fa';
import React, { Component } from 'react';
import './App.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import data from './data.json'
class App extends Component {
  constructor(props) {
    super(props);
    console.log(data);
  }
  render() {
    const listItems = data.map((number) =>
      <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date={number.date}
      iconStyle={number.iconStyle}
      icon={number.icon}>
      <h3 className="vertical-timeline-element-title">{number.title}</h3>
      <a href={number.href}>{number.text}</a>
      </VerticalTimelineElement>
    );
    console.log(listItems)
    return (
      <div>
        <h1 className="App">姚远<span>&</span>马乐的小窝</h1>
        <VerticalTimeline>
          {listItems}
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2019-01-12"
            iconStyle={{ background: '#ffd662', color: 'black' }}
            icon={<IoIosContacts/>}>
            <h3 className="vertical-timeline-element-title">回济南&&见家长</h3>
            <p>YY同学精心为所有人准备了礼物，并在交谈中展现了十足的人格魅力</p>
            <p>长辈们和小弟弟对YY简直super满意，ML都惊呆了</p>
            <p>过年就要去YY家了，ML加油哦</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2019-01-06"
            iconStyle={{ background: '#0f7dc2', color: 'white' }}
            icon={<FaBullhorn/>}>
            <h3 className="vertical-timeline-element-title">YY发说说官宣了</h3>
            <p>我向来说一不二</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2019-01-04"
            iconStyle={{ background: '#615550', color: '#f0ead6' }}
            icon={<FaCameraRetro/>}>
            <h3 className="vertical-timeline-element-title">第一次合影</h3>
            <p>图略</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2019-01-02"
            iconStyle={{ background: 'white', color: 'pink' }}
            icon={<IoMdHeart/>}>
            <h3 className="vertical-timeline-element-title">一起撸猫</h3>
            <p>ML邀请YY去家里撸猫</p>
            <p>YY提出借宿一晚</p>
            <p>屋外天寒地冻，善良的ML收留了他</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2019-01-01"
            iconStyle={{ background: 'PaleGoldenRod', color: 'black' }}
            icon={<IoIosMailUnread/>}>
            <h3 className="vertical-timeline-element-title">2019 第一天</h3>
            <p>互相发了一封新年email</p>
            <p>永远都要在一起哦</p>
          </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2018-12-31"
            iconStyle={{ background: 'Aquamarine', color: 'black' }}
            icon={<GoHome/>}>
            <h3 className="vertical-timeline-element-title">小窝建成</h3>
            <p>往后人生，多多指教</p>
          </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2018-12-30"
            iconStyle={{ background: 'WhiteSmoke', color: 'black' }}
            icon={<IoMdFilm/>}>
            <h3 className="vertical-timeline-element-title">第一次以男女朋友的身份约会</h3>
            <ul>
              <li>看了🎬<a href="https://www.imdb.com/title/tt9408490/" target="_blank" rel="noopener noreferrer">来电狂响</a> </li>
              <li>第一次牵手👫</li>
            </ul>
          </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2012-12-29"
            iconStyle={{ background: 'pink', color: 'white' }}
            icon={<GoMail />}
          >
            <h3 className="vertical-timeline-element-title">姚远向马乐表白啦</h3>
            <ul>
              <li>YY: SYN 做我女朋友好吗?</li>
              <li>ML: ACK 好哦好哦 SYN 做我男朋友好吗?</li>
              <li>YY: ACK 好哦好哦 我会永远❤️你哦!</li>
            </ul>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    );
  }
}

export default App;
