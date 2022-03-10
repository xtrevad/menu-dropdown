const animateDropDownMenus = () => {
  const btns = document.getElementsByClassName('drop-btn');
  const btnL = [...btns];
  btnL.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const b = e.target.nextElementSibling;
      b.classList.toggle('dropdown-content-expanded');
      if (b.style.maxHeight) {
        b.style.maxHeight = null;
      } else {
        b.style.maxHeight = `${b.scrollHeight}px`;
      }
    });
  });
};

export default animateDropDownMenus;
