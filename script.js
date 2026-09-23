const cover = document.getElementById('invitationCover');
const invitation = document.getElementById('invitation');
const song = document.getElementById('weddingSong');

function openInvitation() {
  cover.classList.add('is-opening');
  invitation.classList.add('is-visible');
  invitation.setAttribute('aria-hidden', 'false');
  document.body.classList.remove('locked');
  song.volume = 0.78;
  song.play().catch(() => {});
  window.setTimeout(() => cover.remove(), 900);
}

cover.addEventListener('click', openInvitation, { once: true });

const weddingTime = new Date('2026-10-06T18:00:00+03:00').getTime();
const countdownElements = {
  days: document.getElementById('days'), hours: document.getElementById('hours'),
  minutes: document.getElementById('minutes'), seconds: document.getElementById('seconds')
};

function updateCountdown() {
  const remaining = Math.max(0, weddingTime - Date.now());
  const totalSeconds = Math.floor(remaining / 1000);
  const values = {
    days: Math.floor(totalSeconds / 86400), hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60), seconds: totalSeconds % 60
  };
  Object.entries(values).forEach(([key, value]) => {
    countdownElements[key].textContent = String(value).padStart(2, '0');
  });
}

updateCountdown();
window.setInterval(updateCountdown, 1000);
