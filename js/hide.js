 var $burguerButton = document.getElementById('burguer-button');
 var $menu = document.getElementById('menu');

      $burguerButton.addEventListener('click', toggleMenu);

      function toggleMenu(){
        $menu.classList.toggle('active')
      };