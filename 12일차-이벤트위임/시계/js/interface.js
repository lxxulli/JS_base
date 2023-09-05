(() => {
  const clockEl = document.querySelector(".clock");
  for (let i = 1; i <= 6; i++) {
    const lineEl = document.createElement("div");
    lineEl.classList.add("line");
    lineEl.classList.add(`line${i}`);
    clockEl.appendChild(lineEl);
  }
})();
