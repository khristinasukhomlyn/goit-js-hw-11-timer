const refs = {
  articleRef: document.getElementById("timer-1"),
  daysRef: document.querySelector('[data-value = days]'),
  hoursRef: document.querySelector('[data-value = hours]'),
  minsRef: document.querySelector('[data-value = mins]'),
  secsRef: document.querySelector('[data-value = secs]'),
  startBtn: document.querySelector('button[data-action-start]'),
  stopBtn: document.querySelector('button[data-action-stop]'),
  clockface: document.querySelector('.timer'),
};


const timer = {
  intervalId: null,
  isActive: false,
  start() {
    if (this.isActive) {
      return;
    }

    this.isActive = true;
    const startTime = new Date('Jan 01, 2021');

    updateClockface(0);

    this.intervalId = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = startTime - currentTime;

      updateClockface(deltaTime);
    }, 1000);
  },
  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
    this.isActive = false;
    updateClockface(0);
  },
};

refs.startBtn.addEventListener('click', timer.start.bind(timer));
refs.stopBtn.addEventListener('click', timer.stop.bind(timer));

function updateClockface(time) {
 
  const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
  );
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

  refs.clockface.textContent = `${days}:${hours}:${mins}:${secs}`;
}

function pad(value) {
  return String(value).padStart(2, '0');
}



// const timer = {
//   intervalId: null,
//   isActive: false,
//   start() {
//     if (this.isActive) {
//       return;
//     }
// this.isActive = true;
// const targetTime = new Date('Jan 1, 2021');
// updateClockface(0);
// this.intervalId = setInterval(() => {
// const currentTime = Date.now();
// const time = targetTime - currentTime;
// updateClockface(time);
// }, 1000);
// },
// stop() {
// clearInterval(this.intervalId);
//   this.intervalId = null;
//   this.isActive = false;
// updateClockface(0);
// },
// };

// refs.startBtn.addEventListener('click', timer.start.bind(timer));
// refs.stopBtn.addEventListener('click', timer.stop.bind(timer));

// function updateClockface(time) {

//   const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
//   const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
//   const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//   const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

//   refs.daysRef.textContent = `${days}`;
//   refs.hoursRef.textContent = `${hours}`;
//   refs.minsRef.textContent = `${mins}`;
//   refs.secsRef.textContent = `${secs}`;
// }

// function pad(value) {
//   return String(value).padStart(2, '0');
// }

// // // Создай плагин настраиваемого таймера, который ведет обратный отсчет до предварительно определенной даты. Такой плагин может использоваться в блогах и интернет-магазинах, страницах регистрации событий, во время технического обслуживания и т. д.
// // // Плагин ожидает следующую HTML-разметку и показывает четыре цифры: дни, часы, минуты и секунды в формате XX:XX:XX:XX. Количество дней может состоять из более чем двух цифр.
// // // Плагин это класс CountdownTimer, экземпляр которого создает новый таймер с настройками.
// // // new CountdownTimer({
// // //   selector: '#timer-1',
// // //   targetDate: new Date('Jan 1, 2021'),
// // // });
// // // Для подсчета значений используй следующие готовые формулы, где time - разница между targetDate и текущей датой.







