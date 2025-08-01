const openBtn = document.getElementById('burgerOpen');
const closeBtn = document.getElementById('burgerClose');
const menu = document.getElementById('burgerMenu');

if (openBtn && menu) {
  openBtn.addEventListener('click', () => {
    menu.classList.add('burger--active');
  });
}

if (closeBtn && menu) {
  closeBtn.addEventListener('click', () => {
    menu.classList.remove('burger--active');
  });
}

//burger
document.querySelectorAll('.burger__item').forEach((item) => {
  item.addEventListener('click', () => {
    item.classList.toggle('open');
  });
});

//counter
document.addEventListener('click', function (e) {
  if (e.target?.closest('.counter__btn')) {
    const btn = e.target;
    const counterId = btn.dataset.counter;
    const counterValue = document.querySelector(
      `.counter__value[data-counter="${counterId}"]`
    );
    let currentValue = parseInt(counterValue.textContent);

    if (btn.dataset.action === 'plus') {
      counterValue.textContent = currentValue + 1;
    }

    if (btn.dataset.action === 'minus') {
      if (currentValue > 1) {
        counterValue.textContent = currentValue - 1;
      }
    }
  }
  const items = document.querySelectorAll('.counter__value');
  let sum = [...items].reduce((accum, item) => {
    return accum + +(item.textContent ?? 0);
  }, 0);
  sum *= 12450;
  console.log(sum);
  document.getElementById('thousand').textContent = Math.floor(sum / 1000);
  document.getElementById('unit').textContent = sum % 1000;
});
