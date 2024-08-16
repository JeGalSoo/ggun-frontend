import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import enUS from 'date-fns/locale/en-US'
import 'react-big-calendar/lib/css/react-big-calendar.css';

const locales = {
  'en-US': enUS,
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})

const events = [
    {
        id: 0,
        title: '시프트업',
        allDay: true,
        start: new Date(2024, 7, 0),
        end: new Date(2024, 7, 1),
    },
    {
        id: 1,
        title: '이베스트팩6호',
        start: new Date(2024, 7, 7),
        end: new Date(2024, 7, 10),
    },

    {
        id: 2,
        title: '엑셀세라퓨틱스',
        start: new Date(2024, 8, 13, 0, 0, 0),
        end: new Date(2024, 8, 20, 0, 0, 0),
    },

    {
        id: 3,
        title: '에스케이증권제13호스팩',
        start: new Date(2016, 10, 6, 0, 0, 0),
        end: new Date(2016, 10, 13, 0, 0, 0),
    },

    {
        id: 4,
        title: '엔에이치스팩31호',
        start: new Date(2024, 7, 9, 0, 0, 0),
        end: new Date(2024, 7, 10, 0, 0, 0),
    },
    {
        id: 5,
        title: '산일전기',
        start: new Date(2024, 7, 11),
        end: new Date(2024, 7, 13),
        desc: 'Big conference for important people',
    },
    {
        id: 6,
        title: '피앤에스미캐닉스',
        start: new Date(2024, 7, 12, 10, 30, 0, 0),
        end: new Date(2024, 7, 12, 12, 30, 0, 0),
        desc: 'Pre-meeting meeting, to prepare for the meeting',
    },
    {
        id: 7,
        title: '아이빔테크놀로지',
        start: new Date(2024, 7, 12, 12, 0, 0, 0),
        end: new Date(2024, 7, 12, 13, 0, 0, 0),
        desc: 'Power lunch',
    },
    {
        id: 8,
        title: '키움제9호스팩',
        start: new Date(2024, 7, 12, 14, 0, 0, 0),
        end: new Date(2024, 7, 12, 15, 0, 0, 0),
    },
    {
        id: 9,
        title: '티디에스팜',
        start: new Date(2024, 7, 12, 17, 0, 0, 0),
        end: new Date(2024, 7, 12, 17, 30, 0, 0),
        desc: 'Most important meal of the day',
    },
    {
        id: 10,
        title: '이엔셀',
        start: new Date(2024, 7, 12, 20, 0, 0, 0),
        end: new Date(2024, 7, 12, 21, 0, 0, 0),
    },
    {
        id: 11,
        title: '뱅크웨어글로벌',
        start: new Date(2024, 7, 13, 7, 0, 0),
        end: new Date(2024, 7, 13, 10, 30, 0),
    },
    {
        id: 12,
        title: '교보스팩16호',
        start: new Date(2024, 7, 17, 19, 30, 0),
        end: new Date(2024, 7, 18, 2, 0, 0),
    },
    {
        id: 12.5,
        title: '유라클',
        start: new Date(2024, 7, 17, 19, 30, 0),
        end: new Date(2024, 7, 17, 23, 30, 0),
    },
    {
        id: 13,
        title: '넥스트바이오메디컬',
        start: new Date(2024, 7, 20, 19, 30, 0),
        end: new Date(2024, 7, 22, 2, 0, 0),
    },
    {
        id: 14,
        title: '아이언디바이스',
        start: new Date(new Date().setHours(new Date().getHours() - 3)),
        end: new Date(new Date().setHours(new Date().getHours() + 3)),
    },
    {
        id: 15,
        title: '케이쓰리아이',
        start: new Date(),
        end: new Date(),
    },
  ]


export default function BigCalendar () {
  return(
    <Calendar
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 700, margin :"50px", }}
    />
)
}