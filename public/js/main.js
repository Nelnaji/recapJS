const navContainer = document.querySelector('.nav--bar');
const tabs = document.querySelectorAll('.nav__tab');
const tabsContent = document.querySelectorAll('.contenu-ex');

navContainer.addEventListener('click', function (e) {
    const clicked = e.target.closest('.nav__bar');
  console.log(clicked);
    // Guard clause
    if (!clicked) return;
  
    // Remove active classes
      tabsContent.forEach(c => c.classList.remove('contenu-ex-active'));
  
  
    // Activate content area
    document
      .querySelector(`.contenu-ex-${clicked.dataset.tab}`)
      .classList.add('contenu-ex-active');
  });
  