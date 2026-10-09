const reservationForm = document.querySelector('#reservation-form');
if (reservationForm) {
  const status = document.querySelector('#reservation-status');
  const submit = reservationForm.querySelector('[type="submit"]');
  const date = document.querySelector('#booking-date');
  const time = document.querySelector('#booking-time');
  const endpoint = reservationForm.dataset.endpoint;
  const configured = /^https:\/\/formspree\.io\/f\/[a-zA-Z0-9]+$/.test(endpoint);
  const lisbonNow = () => {
    const parts = new Intl.DateTimeFormat('en-GB', {timeZone:'Europe/Lisbon',year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',hourCycle:'h23'}).formatToParts(new Date());
    const values = Object.fromEntries(parts.map(part => [part.type, part.value]));
    return {date:`${values.year}-${values.month}-${values.day}`, time:`${values.hour}:${values.minute}`};
  };
  const validateVisit = () => {
    const now = lisbonNow();
    date.min = now.date;
    date.setCustomValidity('');
    time.setCustomValidity('');
    if (!date.value) return;
    const day = new Date(`${date.value}T12:00:00Z`).getUTCDay();
    if (date.value < now.date) date.setCustomValidity('Escolha uma data a partir de hoje.');
    else if (day === 1) date.setCustomValidity('O restaurante encerra à segunda-feira. Escolha outro dia.');
    if (!time.value) return;
    const lunch = time.value >= '12:00' && time.value < '15:00';
    const dinner = day !== 0 && time.value >= '19:00' && time.value < '22:00';
    if (!lunch && !dinner) time.setCustomValidity(day === 0 ? 'Ao domingo, escolha uma hora entre as 12h e antes das 15h.' : 'Escolha uma hora entre as 12h e antes das 15h, ou entre as 19h e antes das 22h.');
    else if (date.value === now.date && time.value <= now.time) time.setCustomValidity('Escolha uma hora que ainda não tenha passado.');
  };
  validateVisit();
  date.addEventListener('change', validateVisit);
  time.addEventListener('input', validateVisit);
  if (configured) {
    reservationForm.action = endpoint;
    submit.disabled = false;
    status.textContent = 'A reserva só fica confirmada após contacto do restaurante.';
  }
  reservationForm.addEventListener('submit', async event => {
    event.preventDefault();
    if (!configured || submit.disabled) return;
    validateVisit();
    if (!reservationForm.reportValidity()) return;
    submit.disabled = true;
    submit.textContent = 'A enviar…';
    status.textContent = 'A enviar o seu pedido de reserva…';
    status.dataset.state = 'pending';
    try {
      const response = await fetch(endpoint, {method:'POST',body:new FormData(reservationForm),headers:{Accept:'application/json'}});
      if (!response.ok) throw new Error('submission-failed');
      reservationForm.reset();
      validateVisit();
      status.dataset.state = 'success';
      status.textContent = 'Pedido enviado. A nossa equipa irá entrar em contacto consigo para confirmar a disponibilidade. A reserva ainda não está confirmada.';
    } catch {
      status.dataset.state = 'error';
      status.textContent = 'Não foi possível confirmar o envio. Os dados continuam preenchidos. Pode tentar novamente ou ligar 21 493 0380. Se já enviou um pedido, confirme com a equipa antes de repetir.';
    } finally {
      submit.disabled = false;
      submit.textContent = 'Pedir reserva';
    }
  });
}
