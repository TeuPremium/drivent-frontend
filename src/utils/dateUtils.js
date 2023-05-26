export function getFormatedTime(date) {
  const hour = formatTimeUnit(new Date(date).getUTCHours());
  const minute = formatTimeUnit(new Date(date).getUTCMinutes());

  return `${hour}:${minute}`;
}

function formatTimeUnit(number) {
  return number >= 10 ? number : `0${number}`;
}

export function getActivityDuration(start, end) {
  const diffTimeInMillis = new Date(end).getTime() - new Date(start).getTime();

  return diffTimeInMillis / 3600000;
}

export function getDifferenceBetweenActivities(previous, next) {
  return getActivityDuration(previous, next);
}
