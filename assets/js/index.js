console.log(document.getElementById('card-home'));

if (document.getElementById('card-home') == null) {
  console.log(document.getElementById('sidenav'));
  document.getElementById('sidenav').classList.add('fadeInRight');
}
