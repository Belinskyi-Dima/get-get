 const modal = document.getElementById('videoModal');
  const content = document.getElementById('modalContent');
  const closeEls = modal.querySelectorAll('[data-close]');


// ===== scroll
function smoothScrollTo(sel){
  const target = document.querySelector(sel);
  if (!target) return;

  // шукаємо фіксований хедер (підстав свій селектор за потреби)
  const header = document.querySelector('.site-header, .header, header.sticky, [data-sticky-header]');
  const headerH = header ? header.getBoundingClientRect().height : 0;
  const extra = 12; // трохи повітря

  const y = target.getBoundingClientRect().top + window.pageYOffset - headerH - extra;
  window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
}


document.addEventListener('click', (e) => {
  const el = e.target.closest('[data-scroll]');
  if (!el) return;

  e.preventDefault();
  const sel = el.getAttribute('data-scroll') || '#involve';
  smoothScrollTo(sel);
});



  document.querySelector('.steps-button--form')?.addEventListener('click', (e) => {
  e.preventDefault();

  openSuccess();          
});
  function openSuccess(){
    modal.classList.add('modal--success');
    modal.querySelector('.modal__dialog').setAttribute('aria-label', 'Повідомлення');
    document.body.classList.add('no-scroll');
    content.innerHTML = `
      <article class="success-card" role="document">
        <div class="success-card__emoji" aria-hidden="true">
          <img src="./img/modal-icon.svg" width="94" height="94" alt="google">
        </div>
        <h3 class="success-card__title">Ми отримали твій запит!</h3>
        <p class="success-card__text">Незабаром ми з тобою зв’яжемось</p>
      </article>
    `;
    modal.hidden = false;
  }

  // => input tell додай дата атрибут  data-only-digits
  document.querySelectorAll('input[data-only-digits]').forEach((el) => {
    el.addEventListener('input', () => {
      const max = el.maxLength > 0 ? el.maxLength : Infinity;
      el.value = el.value.replace(/\D+/g, '').slice(0, max); // залишає тільки 0–9
    });
  });
// ==тільки укр. номери
 document.querySelectorAll('input[data-only-ua-phone]').forEach((el) => {
    el.addEventListener('input', () => {
      let v = el.value;

      // лишаємо цифри та плюс
      v = v.replace(/[^\d+]/g, '');

      // якщо є '+', дозволяємо тільки на початку й лише один
      if (v.startsWith('+')) {
        v = '+' + v.slice(1).replace(/\D/g, '');
      } else {
        v = v.replace(/\D/g, '');
      }

      // обрізаємо довжину: з плюсом до 13 символів, без плюса — до 12
      v = v.startsWith('+') ? v.slice(0, 13) : v.slice(0, 12);

      el.value = v;
    });
  });

function openModal(src){
  // <<< ВАЖЛИВО: вимикаємо режим success
  modal.classList.remove('modal--success');
  const dlg = modal.querySelector('.modal__dialog');
  dlg.removeAttribute('style');                  // раптом щось ставили інлайном
  dlg.setAttribute('aria-label', 'Відео');

  content.innerHTML = '';
  content.appendChild(createPlayer(src));
  modal.hidden = false;
  document.body.classList.add('no-scroll');
  modal.querySelector('.modal__close').focus();
}
 
  function closeModal(){
  const video = content.querySelector('video');
  const iframe = content.querySelector('iframe');
  if (video)  try { video.pause(); } catch(e){}
  if (iframe) iframe.src = 'about:blank';
  content.innerHTML = '';
  modal.classList.remove('modal--success');      // <<< скидаємо стан
  modal.hidden = true;
  document.body.classList.remove('no-scroll');
}


  // Створення плеєра: mp4 або YouTube
  function createPlayer(url){
    const isYT = /youtube\.com|youtu\.be/.test(url);
    if(isYT){
      const embed = toYouTubeEmbed(url);
      const iframe = document.createElement('iframe');
      iframe.src = embed;
      iframe.allow = 'autoplay; encrypted-media; picture-in-picture';
      iframe.allowFullscreen = true;
      iframe.title = 'YouTube video player';
      return iframe;
    } else {
      const v = document.createElement('video');
      v.src = url;
      v.controls = true;
      v.autoplay = true;
      v.playsInline = true;
      return v;
    }
  }

function toYouTubeEmbed(url){
  const short = url.match(/youtu\.be\/([^?&]+)/);
  const long  = url.match(/[?&]v=([^&]+)/);
  const id = short?.[1] || long?.[1] || '';
  return id ? `https://www.youtube.com/embed/${id}?autoplay=1&playsinline=1&rel=0&modestbranding=1` : url;
}
// тригер відкриття
document.querySelectorAll('[data-video]').forEach(el => {
  const src = el.getAttribute('data-video');
  const open = () => src && openModal(src);
  el.addEventListener('click', open);
  el.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); }
  });
});

// закриття
closeEls.forEach(btn => btn.addEventListener('click', closeModal));
document.addEventListener('keydown', e => {
  if (!modal.hidden && e.key === 'Escape') closeModal();
});

