$(document).ready(function() {
   
    $("#executive-member").owlCarousel({

      autoplay: true,
      lazyLoad: true,
      loop: true,
      margin: 20,
      /*
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      */
      responsiveClass: true,
      autoHeight: true,
      autoplayTimeout: 7000,
      smartSpeed: 800,
      nav: true,
      responsive: {
          0: {
          items: 1
          },

          600: {
          items: 2
          },

          1024: {
          items: 2
          },

          1366: {
          items: 3
          }
      }
      });
      $("#about-member").owlCarousel({

        autoplay: true,
        lazyLoad: true,
        loop: true,
        margin: 20,
        /*
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        */
        responsiveClass: true,
        autoHeight: true,
        autoplayTimeout: 7000,
        smartSpeed: 800,
        nav: true,
        responsive: {
            0: {
            items: 1
            },
  
            600: {
            items: 3
            },
  
            1024: {
            items: 3
            },
  
            1366: {
            items: 3
            }
        }
        });
        $("#about-youth").owlCarousel({
  
          autoplay: true,
          lazyLoad: true,
          loop: true,
          margin: 20,
          /*
          animateOut: 'fadeOut',
          animateIn: 'fadeIn',
          */
          responsiveClass: true,
          autoHeight: true,
          autoplayTimeout: 7000,
          smartSpeed: 800,
          nav: true,
          responsive: {
              0: {
              items: 1
              },
    
              600: {
              items: 3
              },
    
              1024: {
              items: 3
              },
    
              1366: {
              items: 3
              }
          }
          });
          $("#advisory").owlCarousel({
    
            autoplay: true,
            lazyLoad: true,
            loop: true,
            margin: 20,
            /*
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            */
            responsiveClass: true,
            autoHeight: true,
            autoplayTimeout: 7000,
            smartSpeed: 800,
            nav: true,
            responsive: {
                0: {
                items: 1
                },
      
                600: {
                items: 3
                },
      
                1024: {
                items: 3
                },
      
                1366: {
                items: 3
                }
            }
            });

          $("#amendment").owlCarousel({
    
            autoplay: true,
            lazyLoad: true,
            loop: true,
            margin: 20,
            /*
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            */
            responsiveClass: true,
            autoHeight: true,
            autoplayTimeout: 7000,
            smartSpeed: 800,
            nav: true,
            responsive: {
                0: {
                items: 1
                },
      
                600: {
                items: 3
                },
      
                1024: {
                items: 3
                },
      
                1366: {
                items: 3
                }
            }
            });
  });