function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
function show(shown, hidden1, hidden2) {
  // document.getElementById(shown).style.display='block';
  document.getElementById(hidden1).style.display='none';
  document.getElementById(hidden2).style.display='none';
  document.getElementById(shown).style.display='block';

  if(shown === 'choose-page') {
      document.getElementById(shown).style.display='flex';
  }
  // var x = document.getElementById(shown);
  // var y = document.getElementById(hidden);
  // if (x.style.display === 'none') {
    // x.style.display = 'block';
    // if (y.style.display === 'block') {
      // y.style.display = 'none'
    // }
  // }
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

// function backChoose(shown) {

// }