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
  const target = e.target as HTMLElement | null;
  if (!target) return;

  const btn = target.closest('.counter__btn') as HTMLElement | null;
  if (!btn) return;

  const counterId = btn.dataset.counter;
  const action = btn.dataset.action;

  if (!counterId || !action) return;

  const counterValueEl = document.querySelector(
    `.counter__value[data-counter="${counterId}"]`
  ) as HTMLElement | null;

  if (!counterValueEl) return;

  const currentValue = parseInt(counterValueEl.textContent || '1', 10);

  if (action === 'plus') {
    counterValueEl.textContent = (currentValue + 1).toString();
  }

  if (action === 'minus' && currentValue > 1) {
    counterValueEl.textContent = (currentValue - 1).toString();
  }

  const items = document.querySelectorAll<HTMLElement>('.counter__value');
  let sum = Array.from(items).reduce((accum, item) => {
    const count = parseInt(item.textContent || '0', 10);
    return accum + count;
  }, 0);

  sum *= 12450;

  const thousandEl = document.getElementById('thousand');
  const unitEl = document.getElementById('unit');

  if (thousandEl) {
    thousandEl.textContent = Math.floor(sum / 1000).toString();
  }

  if (unitEl) {
    const unit = sum % 1000;
    unitEl.textContent =
      unit < 100 ? unit.toString().padStart(3, '0') : unit.toString();
  }
});
