$(document).ready(function() {
   
    $("#executive-member").owlCarousel({

      autoplay: false,
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
      navText: ["<img src='../images/arrow-left-circle.svg'>","<img src='../images/arrow-right-circle.svg'>"],
      responsive: {
          0: {
          items: 1
          },

          600: {
          items: 1
          },

          1024: {
          items: 1
          },

          1366: {
          items: 3
          }
      }
      });
      $("#about-member").owlCarousel({

        autoplay: false,
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
        navText: ["<img src='../images/arrow-left-circle.svg'>","<img src='../images/arrow-right-circle.svg'>"],
        responsive: {
            0: {
            items: 1
            },
  
            600: {
            items: 1
            },
  
            1024: {
            items: 1
            },
  
            1366: {
            items: 3
            }
        }
        });
        $("#about-youth").owlCarousel({
  
          autoplay: false,
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
          navText: ["<img src='../images/arrow-left-circle.svg'>","<img src='../images/arrow-right-circle.svg'>"],
          responsive: {
              0: {
              items: 1
              },
    
              600: {
              items: 1
              },
    
              1024: {
              items: 1
              },
    
              1366: {
              items: 3
              }
          }
          });
          $("#advisory").owlCarousel({
    
            autoplay: false,
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
            navText: ["<img src='../images/arrow-left-circle.svg'>","<img src='../images/arrow-right-circle.svg'>"],
            responsive: {
                0: {
                items: 1
                },
      
                600: {
                items: 1
                },
      
                1024: {
                items: 1
                },
      
                1366: {
                items: 3
                }
            }
            });

          $("#amendment").owlCarousel({
    
            autoplay: false,
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
            navText: ["<img src='../images/arrow-left-circle.svg'>","<img src='../images/arrow-right-circle.svg'>"],
            responsive: {
                0: {
                items: 1
                },
      
                600: {
                items: 1
                },
      
                1024: {
                items: 1
                },
      
                1366: {
                items: 3
                }
            }
            });


          $("#youth").owlCarousel({
    
            autoplay: false,
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
            navText: ["<img src='../images/arrow-left-circle.svg'>","<img src='../images/arrow-right-circle.svg'>"],
            responsive: {
                0: {
                items: 1
                },
      
                600: {
                items: 1
                },
      
                1024: {
                items: 1
                },
      
                1366: {
                items: 3
                }
            }
            });
  });