$(document).ready(() => {

  const clockDisplay = $('#digitalClock');

  const updateDigitalClock = () => {
    const currentDateAndTime = new Date(Date.now());

    const hours = currentDateAndTime.getHours() < 10 ? "0" + currentDateAndTime.getHours() : currentDateAndTime.getHours();
    const mins = currentDateAndTime.getMinutes() < 10 ? "0" + currentDateAndTime.getMinutes() : currentDateAndTime.getMinutes();
    const secs = currentDateAndTime.getSeconds() < 10 ? "0" + currentDateAndTime.getSeconds() : currentDateAndTime.getSeconds();

    clockDisplay.html(`
      <p>${currentDateAndTime.toDateString()}</p>
      <p>${hours}:${mins}:${secs}</p>
    `);
  };

  window.setInterval(updateDigitalClock, 1000);
});