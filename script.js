   	
   	 var  nav = document.getElementById('nav');
      
        window.onscroll = function(){
  
            if (window.pageYOffset >100) {
  
                nav.style.background = "transparent";
                nav.style.opacity = "0.50";
            }
            else{
                nav.style.background = "transparent";
                nav.style.boxShadow = "none";
            }
        }
  
        $(document).ready(function() {
            $(".feb").click(function() {
                 $('html, body').animate({
                     scrollTop: $(".features").offset().top
                 }, 1500);
             });
            })

