const panels = document.querySelectorAll('.panel');

function toggleOpen() {
  this.classList.toggle('open');
}

function toggleActive(e) {
  console.log(e.propertyName)
  if(e.propertyName.includes('flex')) { // using "include flex" here because === flex-grow doesn't work for Safari
    this.classList.toggle('open-active');
  } 
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen)); // remember, functions with "()" will run on page load. We don't always want that so we remove them.
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));