function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
function show(shown, hidden, navbar) {
  // document.getElementById(shown).style.display='block';
  document.getElementById(navbar).style.display='none';
  var x = document.getElementById(shown);
  var y = document.getElementById(hidden);
  if (x.style.display === 'none') {
    x.style.display = 'block';
    // if (y.style.display === 'block') {
      y.style.display = 'none'
    // }
  }
  // else {
  //   x.style.display = 'none';
  //   // if (y.style.display === 'none') {
  //     y.style.display = 'block';
  //   // }
  // }

  return false;
}
function myFunction() {
  var x = document.getElementById('myDIV');
  if (x.style.display === 'none') {
    x.style.display = 'block';
  } else {
    x.style.display = 'none';
  }
}