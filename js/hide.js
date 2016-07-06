 var $burguerButton = document.getElementById('burguer-button');
      var $menu = document.getElementById('menu');

      $burguerButton.addEventListener('click', toggleMenu);//nombre de la funcion 

      function toggleMenu(){
        $menu.classList.toggle('active')//nombre del a clase .css
      };