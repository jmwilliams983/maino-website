document.documentElement.classList.remove('no-js');
document.documentElement.classList.add('js');

const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#site-nav');

menuButton?.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  navigation.classList.toggle('open', !isOpen);
});

navigation?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navigation.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
  });
});

const year = document.querySelector('#year');
if (year) {
  year.textContent = new Date().getFullYear();
}

const revealElements = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 },
  );

  revealElements.forEach((element) => revealObserver.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add('visible'));
}

const copyButton = document.querySelector('#copy-handle');
copyButton?.addEventListener('click', async () => {
  const originalText = copyButton.textContent;
  if (!navigator.clipboard?.writeText) {
    copyButton.textContent = copyButton.dataset.handle;
    window.setTimeout(() => { copyButton.textContent = originalText; }, 1800);
    return;
  }

  try {
    await navigator.clipboard.writeText(copyButton.dataset.handle ?? '');
    copyButton.textContent = 'Name Copied';
  } catch {
    copyButton.textContent = "Main'O / Jermaine Williams";
  }
  window.setTimeout(() => { copyButton.textContent = originalText; }, 1800);
});
