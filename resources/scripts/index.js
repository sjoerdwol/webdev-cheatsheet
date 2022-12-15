//SELECTORS
const nav_home = document.getElementById('nav_home');
const nav_html = document.getElementById('nav_html');
const nav_css = document.getElementById('nav_css');
const nav_js = document.getElementById('nav_js');
const nav_react = document.getElementById('nav_react');
const sections = document.getElementsByTagName('section');

//ASSIGNMENTS
nav_home.onmousedown = navOnClick;
nav_html.onmousedown = navOnClick;

//FUNCTIONS
function navOnClick(event) {

  console.log(event, event.target)

  for(let i = 0; i < sections.length; i++) {
    sections[i].classList.add('hidden');
  }

  if(event.target === nav_home) {
    sections[0].classList.remove('hidden');
    console.log('Now showing Home Screen!');
  } else if(event.target === nav_html) {
    sections[1].classList.remove('hidden');
    console.log('Now showing HTML Screen!');
  } else if(event.target === nav_css) {
    sections[2].classList.remove('hidden');
    console.log('Now showing CSS Screen!');
  } else if(event.target === nav_js) {
    sections[3].classList.remove('hidden');
    console.log('Now showing JavaScript Screen!');
  } else if(event.target === nav_react) {
    sections[4].classList.remove('hidden');
    console.log('Now showing React Screen!');
  } else {
    console.log('Something weird happened: ' + event.target);
  };
};