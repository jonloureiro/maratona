console.log(document.getElementById('card-home'));

if (document.getElementById('card-home') == null) {
  let sidenav = document.getElementById('sidenav');
  if (sidenav.classList.contains('fadeInRight')) {
    console.log(sidenav);
  } else {
    sidenav.classList.add('fadeInRight');
  }
}
