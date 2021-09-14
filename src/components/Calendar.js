import moment from 'moment';
import 'moment/locale/ru'
import PropTypes from 'prop-types';

moment.locale('ru');

const Calendar = (props) => {
  const sourceDate = moment(props.date);
  const currentDayNumber = sourceDate.format("DD");
  const currentDay = sourceDate.format("dddd");
  const currentMonth = sourceDate.format("MMMM");
  const currentYear = sourceDate.format("YYYY");
  const [month, year] = sourceDate.format('MMMM YYYY').split(' ');

  return (
    <div className="ui-datepicker">
      <div className="ui-datepicker-material-header">
        <div className="ui-datepicker-material-day">{currentDay}</div>
        <div className="ui-datepicker-material-date">
          <div className="ui-datepicker-material-day-num">{currentDayNumber}</div>
          <div className="ui-datepicker-material-month">{currentMonth}</div>
          <div className="ui-datepicker-material-year">{currentYear}</div>
        </div>
      </div>
      <div className="ui-datepicker-header">
        <div className="ui-datepicker-title">
          <span className="ui-datepicker-month">{month}</span>&nbsp;<span className="ui-datepicker-year">{year}</span>
        </div>
      </div>
      <table className="ui-datepicker-calendar">
        <colgroup>
          <col/>
          <col/>
          <col/>
          <col/>
          <col/>
          <col className="ui-datepicker-week-end"/>
          <col className="ui-datepicker-week-end"/>
        </colgroup>
        <thead>
        <tr>
          <th scope="col" title="Понедельник">Пн</th>
          <th scope="col" title="Вторник">Вт</th>
          <th scope="col" title="Среда">Ср</th>
          <th scope="col" title="Четверг">Чт</th>
          <th scope="col" title="Пятница">Пт</th>
          <th scope="col" title="Суббота">Сб</th>
          <th scope="col" title="Воскресенье">Вс</th>
        </tr>
        </thead>
        <tbody>
        {/* {daysInMonth} */}
        </tbody>
      </table>
    </div>
  )
}

export default Calendar;

Calendar.propTypes =
  {
    item: PropTypes.shape({
      currentDate: PropTypes.object
    })
  }