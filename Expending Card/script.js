const body = document.body;
const panels = document.querySelectorAll('.panel');


panels.forEach((panel, index) => {
  panel.addEventListener('click', () => {
    removeActiveClass()
    panel.classList.add('active');
    body.style.backgroundImage = panels[index].style.backgroundImage;
  })
})

function removeActiveClass() {
  panels.forEach(panel => {
    panel.classList.remove('active');
  })
}
