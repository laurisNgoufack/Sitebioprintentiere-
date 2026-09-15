document.querySelectorAll('.logo-track').forEach((track) => {
  const content = track.querySelector('.logo-track-content');
  if (!content) return;

  const clone = content.cloneNode(true);
  clone.setAttribute('aria-hidden', 'true');
  track.appendChild(clone);
});
