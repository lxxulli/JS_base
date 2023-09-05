(() => {
  const hEl = document.querySelector(".hour");
  const mEl = document.querySelector(".min");
  const sEl = document.querySelector(".sec");

  const clock = () => {
    const now = new Date();
    const hour = now.getHours() * 30;
    const min = now.getMinutes() * 6;
    const sec = now.getSeconds() * 6;

    hEl.style.transform = `translate(-50%) rotateZ(${hour}deg)`;
    mEl.style.transform = `translate(-50%) rotateZ(${min}deg)`;
    sEl.style.transform = `translate(-50%) rotateZ(${sec}deg)`;
  };

  clock();

  setInterval(clock, 1000);
})();
