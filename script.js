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

document.querySelector('#year').textContent = new Date().getFullYear();

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

document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));

const copyButton = document.querySelector('#copy-handle');
copyButton?.addEventListener('click', async () => {
  const originalText = copyButton.textContent;
  try {
    await navigator.clipboard.writeText(copyButton.dataset.handle);
    copyButton.textContent = 'Name Copied';
  } catch {
    copyButton.textContent = "Main'O / Jermaine Williams";
  }
  window.setTimeout(() => { copyButton.textContent = originalText; }, 1800);
});
