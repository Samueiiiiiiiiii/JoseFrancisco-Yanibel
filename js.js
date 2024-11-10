simplyCountdown('#cuenta-regresiva', {
    year: 2024, // Cambia al año deseado
    month: 12,  // Cambia al mes deseado
    day: 31,    // Cambia al día deseado
    hours: 0,   // Hora
    minutes: 0, // Minutos
    seconds: 0, // Segundos
    words: { 
        days: 'Días', 
        hours: 'Horas', 
        minutes: 'Minutos', 
        seconds: 'Segundos'
    },
    plural: true, // Usa plurales
    inline: false, // No usa inline para los elementos
    inlineClass: 'simply-countdown-inline',
    enableUtc: true, // Habilita UTC
    onEnd: function() { 
        alert('¡La cuenta regresiva ha terminado!'); // Acción cuando la cuenta regresiva termina
    },
    refresh: 1000, // Frecuencia de actualización
    sectionClass: 'simply-section', // Clases personalizadas para los contenedores
    amountClass: 'simply-amount', // Clases personalizadas para los números
    wordClass: 'simply-word', // Clases personalizadas para las palabras
    zeroPad: false, // No añade ceros a la izquierda
    countUp: false // No cuenta hacia arriba
});
