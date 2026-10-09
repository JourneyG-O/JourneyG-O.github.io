// Content stays visible unless the optional reveal animation is ready.
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

const siteHeader = document.querySelector('.site-header');
const brandArtwork = document.querySelector('.brand-hero__artwork');

if (siteHeader && brandArtwork && 'IntersectionObserver' in window) {
  const brandObserver = new IntersectionObserver(([entry]) => {
    siteHeader.classList.toggle('is-brand-visible', !entry.isIntersecting);
  }, { rootMargin: '-80px 0px 0px 0px' });
  brandObserver.observe(brandArtwork);
}

if (!reducedMotion.matches && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.remove('is-reveal-pending');
        observer.unobserve(entry.target);
      }
    }
  }, { threshold: 0.1 });

  for (const element of document.querySelectorAll('[data-reveal]')) {
    observer.observe(element);
    element.classList.add('is-reveal-pending');
  }
}

// The letter stays readable; only its decorative underline is animated.
const aboutSection = document.querySelector('#about');
if (aboutSection && !reducedMotion.matches && 'IntersectionObserver' in window) {
  const underlineObserver = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      aboutSection.classList.remove('is-underline-pending');
      aboutSection.classList.add('is-underline-drawn');
      underlineObserver.unobserve(aboutSection);
    }
  }, { threshold: 0.25 });
  underlineObserver.observe(aboutSection);
  aboutSection.classList.add('is-underline-pending');
}

const copyEmailButton = document.querySelector('[data-copy-email]');
const contactStatus = document.querySelector('#contact-status');

if (copyEmailButton && contactStatus) {
  copyEmailButton.addEventListener('click', async () => {
    const email = copyEmailButton.dataset.copyEmail;
    copyEmailButton.disabled = true;
    contactStatus.textContent = '';

    try {
      await navigator.clipboard.writeText(email);
      contactStatus.textContent = 'Email address copied.';
    } catch {
      contactStatus.textContent = `Could not copy automatically. Please copy ${email}.`;
    } finally {
      copyEmailButton.disabled = false;
    }
  });
}
