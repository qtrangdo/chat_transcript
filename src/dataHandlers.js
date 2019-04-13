const months = {
  1: 'January',
  2: 'February',
  3: 'March',
  4: 'April',
  5: 'May',
  6: 'June',
  7: 'July',
  8: 'August',
  9: 'September',
  10: 'October',
  11: 'November',
  12: 'December',
};

const days = {
  0: 'Sunday',
  1: 'Monday',
  2: 'Tuesday',
  3: 'Wednesday',
  4: 'Thursday',
  5: 'Friday',
  6: 'Saturday',
};

const getDate = (chatDate) => {
  const dateParts = chatDate.split('-');
  const year = parseInt(dateParts[0], 10);
  const monthIndex = parseInt(dateParts[1], 10) - 1; // month index starts at 0
  const date = parseInt(dateParts[2], 10);
  const dayIndex = new Date(year, monthIndex, date).getDay()
  return `${days[dayIndex]}, ${months[monthIndex + 1]} ${date}, ${year}`
};

const getTime = (timestamp) => {
  const time = timestamp.slice(11,16).split(':');
  const ampm = parseInt(time[0]) >= 12 ? 'PM' : 'AM';
  time[0] = parseInt(time[0]) >= 12 ? parseInt(time[0]) - 12 : time[0];
  return `${time.join(':')} ${ampm}`;
}

module.exports = {
  getDate,
  getTime,
}