(() => {
  const numTimeEl = document.querySelector(".num_time h4");

  const digit = () => {
    const now = new Date();
    const hour = String(now.getHours()).padStart(2, "0");
    const min = String(now.getMinutes()).padStart(2, "0");
    const sec = String(now.getSeconds()).padStart(2, "0");

    numTimeEl.innerText = `${hour}시 ${min}분 ${sec}초`;
  };

  digit();
  setInterval(digit, 1000);
})();
