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

  function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }