function humanReadable(seconds) {
  let hh = Math.floor(seconds / 3600).toString();
  let mm = (Math.floor(seconds / 60) % 60).toString();
  let ss = (seconds % 60).toString();

  return `${hh.padStart(2, '0')}:${mm.padStart(2, '0')}:${ss.padStart(2, '0')}`;
}