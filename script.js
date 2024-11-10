// Asegúrate de que el código JavaScript esté bien definido
document.addEventListener("DOMContentLoaded", function () {
    var audios = document.getElementById("audioPrueba");
    
    window.playAudio = function() {
        audios.play().catch((error) => {
            console.log("La reproducción automática no está permitida. Haz clic en la página para reproducir el audio.");
        });
        document.getElementById("btnPlay").classList.add("hidden");
        document.getElementById("btnPausa").classList.remove("hidden");
    };

    window.pauseAudio = function() {
        audios.pause();
        document.getElementById("btnPausa").classList.add("hidden");
        document.getElementById("btnPlay").classList.remove("hidden");
    };
});


$(document).ready(function() {
    var fechaCuentaRegresiva = "01/18/2025 19:00:00"; // Fecha y hora del evento
    var colorCirculosCuentaRegresiva = "#565656";
    var colorTextoCuentaRegresiva = "#565656";

    // Cuenta regresiva
    var fechaInicio = new Date().getTime();
    var fechaFin = new Date(fechaCuentaRegresiva).getTime();
    var diff = (fechaFin - fechaInicio) / 1000; // Diferencia en segundos

    // Configuración de la cuenta regresiva
    $(".countdown").ClassyCountdown({
        theme: "black",

        labelsOptions: {
            style: "font-size: 17px;font-family: 'Montserrat', sans-serif;",
        },

        style: {
            secondsElement: {
                gauge: {
                    fgColor: "#F00",
                },
            },

            days: {
                gauge: {
                    thickness: 0.01,
                    fgColor: colorCirculosCuentaRegresiva,
                },
                textCSS: "color:" + colorTextoCuentaRegresiva + ";font-size: 30px;font-family: 'Montserrat', sans-serif;",
            },

            hours: {
                gauge: {
                    thickness: 0.01,
                    fgColor: colorCirculosCuentaRegresiva,
                },
                textCSS: "color:" + colorTextoCuentaRegresiva + ";font-size: 30px !important;font-family: 'Montserrat', sans-serif;",
            },

            minutes: {
                gauge: {
                    thickness: 0.01,
                    fgColor: colorCirculosCuentaRegresiva,
                },
                textCSS: "color:" + colorTextoCuentaRegresiva + ";font-size: 30px !important;font-family: 'Montserrat', sans-serif;",
            },

            seconds: {
                gauge: {
                    thickness: 0.01,
                    fgColor: colorCirculosCuentaRegresiva,
                },
                textCSS: "color:" + colorTextoCuentaRegresiva + ";font-size: 30px !important;font-family: 'Montserrat', sans-serif;",
            },
        },

        // Fecha de finalización
        end: $.now() + diff,

        // Callback al finalizar
        onEndCallback: function () {
            console.log("¡El evento ha comenzado!");
        },
    });
});



document.addEventListener('DOMContentLoaded', function() {
    const fechaInicioEvento = new Date('2025-01-18T19:00:00-04:00'); // 7:00 p.m. hora República Dominicana
    const fechaFinEvento = new Date('2025-01-18T22:00:00-04:00'); // 10:00 p.m. hora República Dominicana
    const tituloEvento = "Boda de José Francisco & Yanibel";

    function formatDateToICS(inputDate, zona) {
        const date = new Date(inputDate);
        if (zona) date.setHours(date.getHours() - 3); // Ajusta la zona horaria si es necesario
        const formattedDate = date.toISOString().replace(/[-:]/g, "").slice(0, 15) + "Z";
        return formattedDate;
    }

    function formatGoogleCalendarLink(startDate, endDate) {
        const formattedStartDate = formatDateToICS(startDate);
        const formattedEndDate = formatDateToICS(endDate);
        const formattedTituloEvento = encodeURIComponent(tituloEvento);
        return `https://calendar.google.com/calendar/render?action=TEMPLATE&dates=${formattedStartDate}%2F${formattedEndDate}&text=${formattedTituloEvento}`;
    }



    function formatAppleCalendarLink(startDate, endDate) {
        const formattedStartDate = formatDateToICS(startDate);
        const formattedEndDate = formatDateToICS(endDate);
        const formattedTituloEvento = encodeURIComponent(tituloEvento);
        return `data:text/calendar;charset=utf-8,BEGIN:VCALENDAR%0AVERSION:2.0%0ABEGIN:VEVENT%0ADTSTART:${formattedStartDate}%0ADTEND:${formattedEndDate}%0ASUMMARY:${formattedTituloEvento}%0AEND:VEVENT%0AEND:VCALENDAR`;
    }

   
    function calendarios() {
        document.getElementById('LinkCalendarGoogle').href = formatGoogleCalendarLink(fechaInicioEvento, fechaFinEvento);
        document.getElementById('LinkCalendarApple').href = formatAppleCalendarLink(fechaInicioEvento, fechaFinEvento);
        
    }

    calendarios();
});


// EFECTOS VISUALES POR CLASE.
  
document.addEventListener("DOMContentLoaded", function () {
    var fadeInClass = "fade-in";
    var fadeInDownClass = "fadeInDown";
    var fadeInUpClass = "fadeInUp";
    var fadeInLeft = "fadeInLeft";
    var fadeInRight = "fadeInRight";
  
    var corazon = document.querySelector(".corazon");
    var ceremonia = document.querySelector(".ceremonia");
    var fiesta = document.querySelector(".fiesta");
    var unaColumna = document.querySelector(".unaColumna");
    var dresscode = document.querySelector(".dresscode");
    var calendario = document.querySelector(".calendario");
    var rsvp = document.querySelector(".rsvp");
    var text_drescode = document.querySelector(".text_drescode");
    var camara = document.querySelector(".camara");
    var title_nosotros = document.querySelector(".title_nosotros");
    var sub_title_nosotros = document.querySelector(".sub_title_nosotros");
    var globo = document.querySelector(".globo");
    var text_gracias = document.querySelector(".text_gracias");
  
  
  
    var div_musica = document.querySelector(".div_musica");
    var div_cbu = document.querySelector(".div_cbu");
    var div_fotos_nosotros = document.querySelector(".div_fotos_nosotros");
    var div_instagram = document.querySelector(".div_instagram");
    var div_rsvp = document.querySelector(".div_rsvp");
    var div_calendario = document.querySelector(".div_calendario");
    var div_frase = document.querySelector(".div_frase");
    var div_nuestraBoda = document.querySelector(".div_nuestraBoda");
  
  
    
    function isInViewport(element) {
      var rect = element.getBoundingClientRect();
      return rect.bottom >= 0 && rect.top <= (window.innerHeight || document.documentElement.clientHeight);
    }
  
  
    function aplicarAnimacionSiEnViewport(elemento, claseAnimacion, estilo) {
      if (isInViewport(elemento) && !elemento.classList.contains(claseAnimacion)) {
        elemento.classList.add(claseAnimacion);
        if (estilo) {
          elemento.style.opacity = "1";
        }
      }
    }
  
    document.addEventListener("scroll", function () {
      //--- FadeInDown ---
  
      unaColumna ? aplicarAnimacionSiEnViewport(unaColumna, fadeInDownClass, true) : null;
      fiesta ? aplicarAnimacionSiEnViewport(fiesta, fadeInDownClass, true) : null;
      ceremonia ? aplicarAnimacionSiEnViewport(ceremonia, fadeInDownClass, true) : null;
      div_frase ? aplicarAnimacionSiEnViewport(div_frase, fadeInDownClass, true) : null;
      text_drescode ? aplicarAnimacionSiEnViewport(text_drescode, fadeInDownClass, true) : null;
      div_rsvp ? aplicarAnimacionSiEnViewport(div_rsvp, fadeInDownClass, true) : null;
      div_calendario ? aplicarAnimacionSiEnViewport(div_calendario, fadeInDownClass, true) : null;
      div_instagram ? aplicarAnimacionSiEnViewport(div_instagram, fadeInDownClass, true) : null;
      sub_title_nosotros ? aplicarAnimacionSiEnViewport(sub_title_nosotros, fadeInDownClass, true) : null;
      div_cbu ? aplicarAnimacionSiEnViewport(div_cbu, fadeInDownClass, true) : null;
         
      //--- FadeInUp ---
  
      //--- FadeInLeft ---
       
  
      //--- FadeInRight ---
  
      //--- FadeIn ---
      text_gracias ? aplicarAnimacionSiEnViewport(text_gracias, fadeInClass, true) : null;
     
      div_musica ? aplicarAnimacionSiEnViewport(div_musica, fadeInClass, true) : null;
      globo ? aplicarAnimacionSiEnViewport(globo, fadeInClass, true) : null;
      title_nosotros ? aplicarAnimacionSiEnViewport(title_nosotros, fadeInClass, true) : null;
      div_fotos_nosotros ? aplicarAnimacionSiEnViewport(div_fotos_nosotros, fadeInClass, true) : null;
      camara ? aplicarAnimacionSiEnViewport(camara, fadeInClass, true) : null;
      corazon ? aplicarAnimacionSiEnViewport(corazon, fadeInClass, true) : null;
      div_nuestraBoda ? aplicarAnimacionSiEnViewport(div_nuestraBoda, fadeInClass, true) : null;
      rsvp ? aplicarAnimacionSiEnViewport(rsvp, fadeInClass, true) : null;  
      dresscode ? aplicarAnimacionSiEnViewport(dresscode, fadeInClass, true) : null; 
      calendario ? aplicarAnimacionSiEnViewport(calendario, fadeInClass, true) : null; 
    });
  });


  document.addEventListener("DOMContentLoaded", function () {
    // Función para verificar si el elemento está dentro del viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return rect.top >= 0 && rect.bottom <= window.innerHeight;
    }

    // Función para agregar la clase 'in' cuando el elemento está visible
    function checkAndFade() {
        const sections = document.querySelectorAll('.seccion-flores, .seccion-flores1, .seccion-flores2');
        
        sections.forEach(function (section) {
            if (isInViewport(section)) {
                section.classList.add('in');  // Agregar la clase 'in' para hacer visible el elemento
            }
        });
    }

    // Llamamos a la función al cargar la página
    checkAndFade();

    // Escuchar el evento de scroll para aplicar el fade
    window.addEventListener('scroll', function () {
        checkAndFade();
    });
});
