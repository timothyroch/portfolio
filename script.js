const sideMenu = document.querySelector('#sideMenu');
const navBar = document.querySelector("nav");
const navLinks = document.querySelector("nav ul");


function openMenu(){
  sideMenu.style.transform = 'translateX(-16rem)';
}

function closeMenu(){
  sideMenu.style.transform = 'translateX(16rem)';
}


window.addEventListener('scroll', ()=>{
  if(scrollY > 50){
    navBar.classList.add('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm', 'dark:bg-darkTheme', 'dark:shadow-white/20');
    navLinks.classList.remove('bg-white', 'shadow-sm', 'bg-opacity-50', 'dark:border', 'dark:border-white/50', 'dark:bg-transparent');
  }else{
    navBar.classList.remove('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm', 'dark:bg-darkTheme', 'dark:shadow-white/20');
    navLinks.classList.add('bg-white', 'shadow-sm', 'bg-opacity-50', 'dark:border', 'dark:border-white/50', 'dark:bg-transparent');

  }
})

// light mode and dark mode

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}

function toggleTheme(){
  document.documentElement.classList.toggle('dark')

  if(document.documentElement.classList.contains('dark')){
    localStorage.theme = 'dark';
  }else{
    localStorage.theme = 'light';
  }

}

function toggleProjects() {
  var elements = document.querySelectorAll('.extra_project');
  var button = document.getElementById('toggleButton');
  
  if (elements[0].classList.contains('hidden')) {
    // Show projects
    elements.forEach(function(element) {
      element.classList.remove('hidden');
      // Use requestAnimationFrame to ensure that the visible class is applied after removing hidden
      requestAnimationFrame(() => {
        element.classList.add('visible');
      });
    });
    // Update button text and onclick function
    button.innerHTML = `
      Show less
      <img src="./images/right-arrow-bold.png" alt="" class="w-4 dark:hidden">
      <img src="./images/right-arrow-bold-dark.png" alt="" class="w-4 hidden dark:block">
    `;
    button.setAttribute('onclick', 'toggleProjects()');
  } else {
    // Hide projects
    elements.forEach(function(element) {
      element.classList.remove('visible');
      // Ensure the hidden class is added after the animation ends
      element.addEventListener('transitionend', function() {
        element.classList.add('hidden');
      }, { once: true });
    });
    // Update button text and onclick function
    button.innerHTML = `
      Show more
      <img src="./images/right-arrow-bold.png" alt="" class="w-4 dark:hidden">
      <img src="./images/right-arrow-bold-dark.png" alt="" class="w-4 hidden dark:block">
    `;
    button.setAttribute('onclick', 'toggleProjects()');
  }
}



