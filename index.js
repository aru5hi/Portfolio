function introButtonClick(){
  window.location = '#about';
};

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

document.getElementById('top').addEventListener('click', function(event){
  const dot = document.createElement('div');
  dot.classList.add('circle');
  console.log(event.clientX);
  dot.style.position = 'absolute';
  dot.style.left = event.clientX;
  dot.style.top = event.clientY;
  dot.style.backgroundColor = getRandomColor();
  this.appendChild(dot);
});

function resumeRedirect(){
  window.open("https://drive.google.com/file/d/1-PS3jMn4zYBBnF8t53ldKRMSw7F_vkwc/view?usp=sharing", '_blank');
}

(function() {
  var elements;
  var windowHeight;

  function init() {
    elements = document.querySelectorAll('.content');
    windowHeight = window.innerHeight;
  }

  function checkPosition() {
    let timer = 0;
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      var positionFromTop = elements[i].getBoundingClientRect().top;

      if (positionFromTop - windowHeight <= 0) {
          document.getElementById("about-1").classList.add('about-1-animation');
          document.getElementById("about").classList.add('about-animation');
          document.getElementById("about-2").classList.add('about-2-animation');
          document.getElementsByClassName("progress-value")[0].classList.add('progress-value-90');
          document.getElementsByClassName("progress-value")[1].classList.add('progress-value-90');
          document.getElementsByClassName("progress-value")[2].classList.add('progress-value-80');
          document.getElementsByClassName("progress-value")[3].classList.add('progress-value-80');
          document.getElementsByClassName("progress-value")[4].classList.add('progress-value-70');
          document.getElementsByClassName("progress-value")[5].classList.add('progress-value-60');
          document.getElementsByClassName("progress-value")[6].classList.add('progress-value-70');
          document.getElementsByClassName("progress-value")[7].classList.add('progress-value-60');
      }
    }
  }

  window.addEventListener('scroll', checkPosition);
  window.addEventListener('resize', init);

  init();
  checkPosition();
})();

(function() {
  var elements;
  var windowHeight;

  function init() {
    elements = document.querySelectorAll('.flex-item');
    windowHeight = window.innerHeight;
  }

  function checkPosition() {
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      var positionFromTop = elements[i].getBoundingClientRect().top;
      if (positionFromTop - windowHeight <= 0) {
        if(i === 0){
          document.getElementById("project").classList.add('social-animation');
          document.getElementsByClassName("social-banner")[0].classList.add('social-animation');
        }
          element.style.animationDelay = `${0.1*i}s`;
          element.classList.add('project-animation');

      }
    }
  }

  window.addEventListener('scroll', checkPosition);
  window.addEventListener('resize', init);

  init();
  checkPosition();
})();

(function() {
  var elements;
  var windowHeight;

  function init() {
    elements = document.querySelectorAll('form');
    windowHeight = window.innerHeight;
  }

  function checkPosition() {
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      var positionFromTop = elements[i].getBoundingClientRect().top;
      if (positionFromTop - windowHeight <= 0) {
          document.getElementById('contact').classList.add('contact-animation');

      }
    }
  }

  window.addEventListener('scroll', checkPosition);
  window.addEventListener('resize', init);

  init();
  checkPosition();
})();
