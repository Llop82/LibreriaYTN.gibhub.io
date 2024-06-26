function toggleMenu() {
    var menu = document.getElementById("navMenu");
    var button = document.getElementById("toggleButton");
    menu.style.display = "block";
    button.style.display = "none";
}

function hideMenu() {
    var menu = document.getElementById("navMenu");
    var button = document.getElementById("toggleButton");
    menu.style.display = "none";
    button.style.display = "block";
}

/*Desplazamiento de botones*/
const positions = [];

function initializeSliders() {
    const sliders = document.querySelectorAll('.slider-container');
    sliders.forEach((slider, index) => {
        positions[index] = 0;
        updateButtons(index);
    });
}

function updateButtons(index) {
    const track = document.querySelectorAll('.slide-track')[index];
    const items = track.querySelectorAll('.Items');
    const itemWidth = items[0].offsetWidth + parseInt(getComputedStyle(items[0]).marginRight);
    const containerWidth = document.querySelectorAll('.slider')[index].offsetWidth;
    const totalWidth = itemWidth * items.length;

    document.querySelectorAll('.slide-btn.left')[index].disabled = positions[index] >= 0;
    document.querySelectorAll('.slide-btn.right')[index].disabled = positions[index] <= -(totalWidth - containerWidth);
}

function slideLeft(index) {
    const track = document.querySelectorAll('.slide-track')[index];
    const items = track.querySelectorAll('.Items');
    const itemWidth = items[0].offsetWidth + parseInt(getComputedStyle(items[0]).marginRight);
    if (positions[index] < 0) {
        positions[index] += itemWidth;
        track.style.transform = `translateX(${positions[index]}px)`;
    }
    updateButtons(index);
}

function slideRight(index) {
    const track = document.querySelectorAll('.slide-track')[index];
    const items = track.querySelectorAll('.Items');
    const itemWidth = items[0].offsetWidth + parseInt(getComputedStyle(items[0]).marginRight);
    const containerWidth = document.querySelectorAll('.slider')[index].offsetWidth;
    const totalWidth = itemWidth * items.length;
    if (positions[index] > -(totalWidth - containerWidth)) {
        positions[index] -= itemWidth;
        track.style.transform = `translateX(${positions[index]}px)`;
    }
    updateButtons(index);
}

document.addEventListener('DOMContentLoaded', initializeSliders);

 // Obtener el término de búsqueda de la URL
 const urlParams = new URLSearchParams(window.location.search);
 const searchTerm = urlParams.get('q');
 document.getElementById('searchTerm').textContent = searchTerm;

 // Lista de libros con detalles
 const books = [
    //Cuentos
    {
        title: "El principito",
        author: "Antoine de Saint-Exupéry",
        price: 450,
        image: "Imagenes/Libros/Narrativa/Cuentos/El principito.jpg"
    },
    {
        title: "Dejame que te cuente",
        author: "Jorge Bucay",
        price: 250,
        image: "Imagenes/Libros/Narrativa/Cuentos/Dejame que te cuente.jpg"
    },
    {
        title: "El pajaro del alma",
        author: "Mijal Snunit",
        price: 150,
        image: "Imagenes/Libros/Narrativa/Cuentos/El pajaro del alma.jpg"
    },
    {
        title: "Historias de fantasmas",
        author: "Valentina Camerini",
        price: 350,
        image: "Imagenes/Libros/Narrativa/Cuentos/Historias de Fantasmas.jpg"
    },
    {
        title: "365 Cuentos para dormir",
        author: "Ediciones Saldaña",
        price: 300,
        image: "Imagenes/Libros/Narrativa/Cuentos/Cuentos para dormir.jpg"
    },
    {
        title: "Cuentos",
        author: "Hans Chistian Andersen",
        price: 349,
        image: "Imagenes/Libros/Narrativa/Cuentos/Cuentos.jpg"
    },
    {
        title: "Cuentos Malvados",
        author: "Espido Freire",
        price: 200,
        image: "Imagenes/Libros/Narrativa/Cuentos/Cuentos Malvados.jpg"
    },
    {
        title: "El mendigo y otros cuentos",
        author: "Fernando Pessoa",
        price: 400,
        image: "Imagenes/Libros/Narrativa/Cuentos/Acantilado.jpg"
    },
    {
        title: "Cuentos Fantasticos",
        author: "Ludwing Tieck",
        price: 365,
        image: "Imagenes/Libros/Narrativa/Cuentos/Cuentos fantasticos.jpg"
    },
    {
        title: "Cuentos Completos",
        author: "Rubén Darío",
        price: 150,
        image: "Imagenes/Libros/Narrativa/Cuentos/Cuentos completos.jpg"
    },
    {
        title: "Cuentos Fantasticos",
        author: "Horacio Quiroga",
        price: 150,
        image: "Imagenes/Libros/Narrativa/Cuentos/Cuentos de amor.jpg"
    },
    {
        title: "Cuentos de hadas",
        author: "Charles Perrault",
        price: 350,
        image: "Imagenes/Libros/Narrativa/Cuentos/Cuentos de hadas.jpg"
    },
    {
        title: "Cuentos de chejov",
        author: "Antón Chéjov",
        price: 350,
        image: "Imagenes/Libros/Narrativa/Cuentos/Cuentos de chejov.jpg"
    },
    {
        title: "Cuentos para leer en navidad",
        author: "Beatriz Espejo",
        price: 150,
        image: "Imagenes/Libros/Narrativa/Cuentos/Cuentos para navidad.jpg"
    },
    {
        title: "Cuentos",
        author: "Fernando Pessoa",
        price: 530,
        image: "Imagenes/Libros/Narrativa/Cuentos/Cuentos 2.jpg"
    },
    //Poesía
    {
        title: "Son de mar",
        author: "Aurora Hernández",
        price: 299,
        image: "Imagenes/Libros/Narrativa/Poesía/Son de mar.jpg"
    },
    {
        title: "Espacios Contenidos",
        author: "Manuel Parra",
        price: 150,
        image: "Imagenes/Libros/Narrativa/Poesía/Espacios contenidos.jpg"
    },
    {
        title: "Manual para soportar tornados",
        author: "Víctor Hernández",
        price: 190,
        image: "Imagenes/Libros/Narrativa/Poesía/Manual para soportar tornados.jpg"
    },
    {
        title: "Si yo fuese tú me enamoraria de mí",
        author: "Sergio Chico",
        price: 250,
        image: "Imagenes/Libros/Narrativa/Poesía/Si yo fuese tú me enamoraria de mí.jpg"
    },
    {
        title: "De las estrellas de sofía ",
        author: "Quetzal Noah",
        price: 150,
        image: "Imagenes/Libros/Narrativa/Poesía/De las estrellas de sofía.jpg"
    },
    {
        title: "Aquí",
        author: "Alí Calderón",
        price: 100,
        image: "Imagenes/Libros/Narrativa/Poesía/Aquí.jpg"
    },
    {
        title: "Pasajes y paisajes",
        author: "Jaime Correa",
        price: 170,
        image: "Imagenes/Libros/Narrativa/Poesía/Pasajes y paisajes.jpg"
    },
    {
        title: "Acúfenos",
        author: "María Rosa Maldonado",
        price: 260,
        image: "Imagenes/Libros/Narrativa/Poesía/Acúfenos.jpg"
    },
    {
        title: "Azúcar impalpable",
        author: "Inti García",
        price: 145,
        image: "Imagenes/Libros/Narrativa/Poesía/Azúcar impalpable.jpg"
    },
    {
        title: "El lenguaje de las flores",
        author: "Fernando del Jesus",
        price: 100,
        image: "Imagenes/Libros/Narrativa/Poesía/El lenguaje de las flores.jpg"
    },
    {
        title: "Cartas que no llegan a su destinatario",
        author: "Gabriela Cantú",
        price: 250,
        image: "Imagenes/Libros/Narrativa/Poesía/Cartas que no llegan a su destinatario.jpg"
    },
    {
        title: "Adoniada",
        author: "Adonis",
        price: 405,
        image: "Imagenes/Libros/Narrativa/Poesía/Adoniada.jpg"
    },
    {
        title: "Palabras en el desierto",
        author: "Eduardo Mosches",
        price: 100,
        image: "Imagenes/Libros/Narrativa/Poesía/Palabras en el desierto.jpg"
    },
    {
        title: "Un hombre llega tarde",
        author: "Albert Balasch",
        price: 287,
        image: "Imagenes/Libros/Narrativa/Poesía/Un hombre llega tarde.jpg"
    },
    {
        title: "Silencio",
        author: "Clyo Mendoza",
        price: 190,
        image: "Imagenes/Libros/Narrativa/Poesía/Silencio.jpg"
    },
    // Novelas
    {
        title: "Boulevard Antes de ella",
        author: "Flor M. Salvador",
        price: 300,
        image: "Imagenes/Libros/Narrativa/Novelas/Boulevard Antes de ella.jpg"
    },
    {
        title: "Boulevard Después de Él",
        author: "Flor M. Salvador",
        price: 300,
        image: "Imagenes/Libros/Narrativa/Novelas/Boulevard Después de Él.jpg"
    },
    {
        title: "Boulevard La version de flor",
        author: "Flor M. Salvador",
        price: 300,
        image: "Imagenes/Libros/Narrativa/Novelas/Boulevard La version de flor.jpg"
    },
    {
        title: "Recuerdame",
        author: "Mario Escobar",
        price: 350,
        image: "Imagenes/Libros/Narrativa/Novelas/Recuerdame.jpg"
    },
    {
        title: "Bajo la misma estrella",
        author: "Jonh Green",
        price: 250,
        image: "Imagenes/Libros/Narrativa/Novelas/Bajo la misma estrella.jpg"
    },
    {
        title: "Todo lo que nunca fuimos",
        author: "Alice Kellen",
        price: 290,
        image: "Imagenes/Libros/Narrativa/Novelas/Todo lo que nunca fuimos.jpg"
    },
    {
        title: "El tiempo entre costureras",
        author: "María Dueñas",
        price: 390,
        image: "Imagenes/Libros/Narrativa/Novelas/El tiempo entre costureras.jpg"
    },
    {
        title: "Te espero en la última esquina del otoño",
        author: "Casilda Sánchez",
        price: 380,
        image: "Imagenes/Libros/Narrativa/Novelas/Te espero en la última esquina del otoño.jpg"
    },
    {
        title: "La sombra del viento",
        author: "Carlos Ruiz",
        price: 350,
        image: "Imagenes/Libros/Narrativa/Novelas/La sombra del viento.jpg"
    },
    {
        title: "La niña del bosque",
        author: "Brian McGilloway",
        price: 500,
        image: "Imagenes/Libros/Narrativa/Novelas/La niña del bosque.jpg"
    },
    {
        title: "Orgullo y prejuicio",
        author: "Jane Austen",
        price: 450,
        image: "Imagenes/Libros/Narrativa/Novelas/Orgullo y prejuicio.jpg"
    },
    {
        title: "El silenciode la ciudad blanca",
        author: "Eva G. Sáenz",
        price: 350,
        image: "Imagenes/Libros/Narrativa/Novelas/El silencio de la ciudad blanca.jpg"
    },
    {
        title: "La princesa de hielo",
        author: "Léonie Bischoff",
        price: 190,
        image: "Imagenes/Libros/Narrativa/Novelas/La princesa de hielo.jpg"
    },
    {
        title: "El niño con el pijama de rayas",
        author: "Jonh Boyne",
        price: 150,
        image: "Imagenes/Libros/Narrativa/Novelas/El niño con el pijama de rayas.jpg"
    },
    {
        title: "La edad de la inocencia",
        author: "Edith Warthon",
        price: 300,
        image: "Imagenes/Libros/Narrativa/Novelas/La edad de la inocencia.jpg"
    },
    //Infantiles
    {
        title: "La biblia infantil",
        author: "Hiperlibro",
        price: 208,
        image: "Imagenes/Libros/Infantiles/La biblia infantil.jpg"
    },
    {
        title: "Manitas creativas",
        author: "Mónica Marti I Garbayo",
        price: 150,
        image: "Imagenes/Libros/Infantiles/Manitas creativas.jpg"
    },
    {
      title: "Kitty salva el festival",
      author: "Paula Harrison",
      price: 199,
      image: "Imagenes/Libros/Infantiles/Kitty salva el festival.jpg"
  },
    {
        title: "Canciones con animales en inglés",
        author: "Paula Harrison",
        price: 180,
        image: "Imagenes/Libros/Infantiles/Canciones con animales en ingles.jpg"
    },
    {
        title: "Cucú. Calabaza",
        author: "Vaughan infantil",
        price: 120,
        image: "Imagenes/Libros/Infantiles/Cucú Calabaza.jpg"
    },
    {
        title: "LA GRANJA",
        author: "Johnny Dyrander",
        price: 170,
        image: "Imagenes/Libros/Infantiles/LA GRANJA.jpg"
    },
    {
        title: "Abrazos y besitos",
        author: "Emma Martínez",
        price: 160,
        image: "Imagenes/Libros/Infantiles/Abrazos y besitos.jpg"
    },
    {
        title: "!SPLASH SPLASH¡",
        author: "Junko Masuda",
        price: 140,
        image: "Imagenes/Libros/Infantiles/Splash.jpg"
    },
    {
        title: "Vamos a ver el Mundo",
        author: "Edwards Shaynie",
        price: 170,
        image: "Imagenes/Libros/Infantiles/Vamos a ver el Mundo.jpg"
    },
    {
        title: "El gran libro de los exploradores",
        author: "Parramón Paidotribo",
        price: 220,
        image: "Imagenes/Libros/Infantiles/Explorador.jpg"
    },
    {
        title: "MIS PRIMERAS PALABRAS",
        author: "Infantil",
        price: 130,
        image: "Imagenes/Libros/Infantiles/MIS PRIMERAS PALABRAS.jpg"
    },
    {
        title: "Plantánimals",
        author: "Mercedes Bermejo Boixareu",
        price: 210,
        image: "Imagenes/Libros/Infantiles/Plantanimals.jpg"
    },
    {
        title: "Yo nunca vi televisión",
        author: "31 minutos",
        price: 110,
        image: "Imagenes/Libros/Infantiles/Yo nunca vi televisión.jpg"
    },
    {
        title: "EL JARDIN DE DON JOAQUIN",
        author: "Pepe Frank",
        price: 200,
        image: "Imagenes/Libros/Infantiles/EL JARDIN DE DON JOAQUÍN.jpg"
    },
    {
        title: "¿Dónde está Donald?",
        author: "Disney",
        price: 100,
        image: "Imagenes/Libros/Infantiles/Dónde está Donald.jpg"
    },
    {
       title: "Manual fashionista!!!",
       author: "Distroller",
       price: 198,
       image: "Imagenes/Libros/Infantiles/Manual fashionista.jpg"
   },
   {
       title: "Historias PAWsombrosas",
       author: "Nickelodeon",
       price: 198,
       image: "Imagenes/Libros/Infantiles/Historias PAWsombrosas.jpg"
   },
   {
       title: "Intensamente 2. Libro de arte y Emociones",
       author: "Disney",
       price: 128,
       image: "Imagenes/Libros/Infantiles/Intensamente 2. Libro de arte y Emociones.jpg"
   },
   {
       title: "Las aventuras de Dani y Evan",
       author: "Destino Infantil & Juvenil México",
       price: 168,
       image: "Imagenes/Libros/Infantiles/Las aventuras de Dani y Evan.jpg"
   },
   {
       title: "Un día con papá y dada",
       author: "José Ignacio Valenzuela",
       price: 199,
       image: "Imagenes/Libros/Infantiles/Un día con papá y dada.jpg"
   },
   {
       title: "El mundo mágico de Harry Potter",
       author: "J.K. Rowling",
       price: 588,
       image: "Imagenes/Libros/Infantiles/El mundo mágico de Harry Potter.jpg"
   },
   {
       title: "Dinosaurios",
       author: "Silver Dolphin",
       price: 134,
       image: "Imagenes/Libros/Infantiles/Dinosaurios.jpg"
   },
   {
       title: "Sirenas y narvales",
       author: "Silver Dolphin",
       price: 134,
       image: "Imagenes/Libros/Infantiles/Sirenas y narvales.jpg"
   },
   {
       title: "Colores",
       author: "Jo Dupre",
       price: 179,
       image: "Imagenes/Libros/Infantiles/Colores.jpg"
   },
   {
       title: "Animales bebés",
       author: "Jo Dupre",
       price: 179,
       image: "Imagenes/Libros/Infantiles/Animales bebés.jpg"
   },
   {
       title: "Thor Quest. Los martillos de los dioses",
       author: "Jackson Lanzing",
       price: 198,
       image: "Imagenes/Libros/Infantiles/Thor Quest. Los martillos de los dioses.jpg"
   },
   {
       title: "Gigantosaurus. El mejor día",
       author: "Planeta Infantil México",
       price: 148,
       image: "Imagenes/Libros/Infantiles/Gigantosaurus. El mejor día.jpg"
   },
   {
       title: "PAW Patrol. ¡Rescates espectaculares!",
       author: "Nickelodeon",
       price: 198,
       image: "Imagenes/Libros/Infantiles/PAW Patrol. ¡Rescates espectaculares!.jpg"
   },
   {
       title: "Marvel. 5 minutos para soñar",
       author: "Marvel",
       price: 268,
       image: "Imagenes/Libros/Infantiles/Marvel. 5 minutos para soñar.jpg"
   },
   {
       title: "Superdeportistas mexicanos",
       author: "Frida Martínez",
       price: 249,
       image: "Imagenes/Libros/Infantiles/Superdeportistas mexicanos.jpg"
   },
   {
       title: "Star wars: Clone Wars. Historias de luz y oscuridad",
       author: "Lucasfilm LTD",
       price: 169,
       image: "Imagenes/Libros/Infantiles/Clone wars.jpg"
   },
   {
       title: "Gravity Falls. Un verano de misterios",
       author: "Disney",
       price: 85,
       image: "Imagenes/Libros/Infantiles/Gravity falls.jpg"
   },
   {
       title: "Star wars: The Bad Batch. El inicio",
       author: "S. T. Bende",
       price: 248,
       image: "Imagenes/Libros/Infantiles/The Bad Batch.jpg"
   },
   {
       title: "Bob Esponja. Crea, dibuja e inspira",
       author: "Nickelodeon",
       price: 109,
       image: "Imagenes/Libros/Infantiles/Bob Esponja Crea.jpg"
   },
   {
    title: "Gravity Falls. Leyendas perdidas",
    author: "Alex Hirsch",
    price: 198,
    image: "Imagenes/Libros/Infantiles/Gravity Falls. Leyendas perdidas.jpg"
},
{
    title: "Yolo Aventuras. La mansión de las pesadillas",
    author: "Martínez Roca",
    price: 298,
    image: "Imagenes/Libros/Infantiles/Yolo Aventuras. La mansión de las pesadillas.jpg"
},
{
    title: "Yolo Aventuras 2. El misterio del Amazonas",
    author: "Martínez Roca",
    price: 258,
    image: "Imagenes/Libros/Infantiles/Yolo Aventuras 2. El misterio del Amazonas.jpg"
},
{
    title: "Yolo Aventuras 3 y los impostores del espacio",
    author: "Yolo, Mariana, Nando y Panda",
    price: 248,
    image: "Imagenes/Libros/Infantiles/Yolo Aventuras 3 y los impostores del espacio.jpg"
},
{
    title: "Las perrerías de Mike 1. Mikecrack y la Estrella Maldita",
    author: "Mikecrack",
    price: 298,
    image: "Imagenes/Libros/Infantiles/Las perrerías de Mike 1.jpg"
},
{
    title: "Las Perrerías de Mike 2. Mikecrack en busca del diamantito perdido",
    author: "Mikecrack",
    price: 298,
    image: "Imagenes/Libros/Infantiles/Las Perrerías de Mike 2.jpg"
},
{
    title: "Las Perrerías de Mike 3. Mikecrack y la venganza del rey Slime",
    author: "Mikecrack",
    price: 298,
    image: "Imagenes/Libros/Infantiles/Las Perrerías de Mike 3. Mikecrack y la venganza del rey Slime.jpg"
},
{
    title: "Todo empezó por: un huevo",
    author: "Maria",
    price: 170,
    image: "Imagenes/Libros/Infantiles/Todo empezó por un huevo.jpg"
},
{
    title: "Encanto. ¿Dónde está Bruno?",
    author: "Disney",
    price: 148,
    image: "Imagenes/Libros/Infantiles/Encanto. Dónde está Bruno.jpg"
},
{
    title: "El guardián de los quesos",
    author: "Gina Jaramillo",
    price: 199,
    image: "Imagenes/Libros/Infantiles/El guardián de los quesos.jpg"
},
{
    title: "Five Nights At Freddys: Los ojos de plata",
    author: "Scott Cawthon",
    price: 299,
    image: "Imagenes/Libros/Infantiles/Five Nights At Freddys Los ojos de plata.jpg"
},
   
   /* Literatura*/
   {
    title: "Mi lucha",
    author: "Adolf Hitler",
    price: 450,
    image: "Imagenes/Libros/Literatura/Universal/Mi lucha.jpg"
},
{
    title: "LA IDENTIDAD",
    author: "Milan Kundera",
    price: 248,
    image: "Imagenes/Libros/Literatura/Universal/LA IDENTIDAD.jpg"
},
{
    title: "LA ISLA DEL TESORO",
    author: "Robert Louis Stevenson",
    price: 395,
    image: "Imagenes/Libros/Literatura/Universal/LA ISLA DEL TESORO.jpg"
},
{
    title: "SUMISION",
    author: "Michel Houellebecq",
    price: 450,
    image: "Imagenes/Libros/Literatura/Universal/SUMISION.jpg"
},
{
    title: "Divina Comedia",
    author: "Dante Alighieri",
    price: 1646,
    image: "Imagenes/Libros/Literatura/Universal/Divina Comedia.jpg"
},
{
    title: "El conde de Montecristo",
    author: "Alejandro Dumas",
    price: 329,
    image: "Imagenes/Libros/Literatura/Universal/El conde de Montecristo.jpg"
},
{
    title: "EL CODIGO DA VINCI",
    author: "Dan Brown",
    price: 418,
    image: "Imagenes/Libros/Literatura/Universal/EL CODIGO DA VINCI.jpg"
},
{
    title: "Corazón, diario de un niño",
    author: "Edmondo de Amicis",
    price: 215,
    image: "Imagenes/Libros/Literatura/Universal/Corazón, diario de un niño.jpg"
},
{
    title: "Rebelión en la granja",
    author: "George Orwell",
    price: 377,
    image: "Imagenes/Libros/Literatura/Universal/Rebelión en la granja.jpg"
},
{
    title: "LA INMORTALIDAD",
    author: "Milan Kundera",
    price: 388,
    image: "Imagenes/Libros/Literatura/Universal/LA INMORTALIDAD.jpg"
},
{
    title: "EL LIBRO DE LA RISA Y EL OLVIDO",
    author: "Milan Kundera",
    price: 498,
    image: "Imagenes/Libros/Literatura/Universal/EL LIBRO DE LA RISA Y EL OLVIDO.jpg"
},
{
    title: "CUIDA DE MI",
    author: "Daniela Sacerdoti",
    price: 149,
    image: "Imagenes/Libros/Literatura/Universal/CUIDA DE MI.jpg"
},
{
    title: "Crímenes exquisitos",
    author: "Vicente Garrido",
    price: 399,
    image: "Imagenes/Libros/Literatura/Universal/Crímenes exquisitos.jpg"
},
{
    title: "El juego de los deseos",
    author: "Meg Shaffer",
    price: 355,
    image: "Imagenes/Libros/Literatura/Universal/El juego de los deseos.jpg"
},
{
    title: "Bruma roja",
    author: "Lucía G. Sobrado",
    price: 499,
    image: "Imagenes/Libros/Literatura/Universal/Bruma roja.jpg"
},
{
    title: "El huésped",
    author: "Guadalupe Nettel",
    price: 320,
    image: "Imagenes/Libros/Literatura/Mexicana/El huésped.jpg"
},
{
    title: "Madres y perros",
    author: "Fabio Morábito",
    price: 310,
    image: "Imagenes/Libros/Literatura/Mexicana/Madres y perros.jpg"
},
{
    title: "Ambrosía",
    author: "Valeria Duval",
    price: 495,
    image: "Imagenes/Libros/Literatura/Mexicana/Ambrosía.jpg"
},
{
    title: "Lengua dormida",
    author: "Franco Félix",
    price: 325,
    image: "Imagenes/Libros/Literatura/Mexicana/Lengua dormida.jpg"
},
{
    title: "Noticias del imperio",
    author: "Fernando del Paso",
    price: 375,
    image: "Imagenes/Libros/Literatura/Mexicana/Noticias del imperio.jpg"
},
{
    title: "Miel sobre hojuelas",
    author: "Gabriela Villazón Weissgerber",
    price: 230,
    image: "Imagenes/Libros/Literatura/Mexicana/Miel sobre hojuelas.jpg"
},
{
    title: "Muerte súbita",
    author: "Álvaro Enrigue",
    price: 255,
    image: "Imagenes/Libros/Literatura/Mexicana/Muerte súbita.jpg"
},
{
    title: "Primero las damas",
    author: "Guadalupe Loaeza",
    price: 320,
    image: "Imagenes/Libros/Literatura/Mexicana/Primero las damas.jpg"
},
{
    title: "Las soldaderas",
    author: "Sofía Guadarrama Collado",
    price: 399,
    image: "Imagenes/Libros/Literatura/Mexicana/Las soldaderas.jpg"
},
{
    title: "Hacia el Horizonte",
    author: "Elisabeth Almegard",
    price: 280,
    image: "Imagenes/Libros/Literatura/Mexicana/Hacia el Horizonte.jpg"
},
{
    title: "Placeres ocultos",
    author: "Martha Carrillo",
    price: 289,
    image: "Imagenes/Libros/Literatura/Mexicana/Placeres ocultos.jpg"
},
{
    title: "Éste que ves",
    author: "Xavier Velasco",
    price: 269,
    image: "Imagenes/Libros/Literatura/Mexicana/Éste que ves.jpg"
},
{
    title: "La guerra del unicornio",
    author: "Angelina Muñiz-Huberman",
    price: 405,
    image: "Imagenes/Libros/Literatura/Mexicana/La guerra del unicornio.jpg"
},
{
    title: "Ábaco de granizo",
    author: "Ernesto Lumbreras",
    price: 288,
    image: "Imagenes/Libros/Literatura/Mexicana/Ábaco de granizo.jpg"
},
{
    title: "El Don del Diablo",
    author: "Omar Delgado",
    price: 234,
    image: "Imagenes/Libros/Literatura/Mexicana/El Don del Diablo.jpg"
},
{
    title: "EL GRAN GENOCIDIO",
    author: "Marco T. Robayo",
    price: 399,
    image: "Imagenes/Libros/Literatura/iberoamericana/EL GRAN GENOCIDIO.jpg"
},
{
    title: "DON QUIJOTE DE LA MANCHA",
    author: "Miguel de Cervantes Saavedra",
    price: 3800,
    image: "Imagenes/Libros/Literatura/iberoamericana/DON QUIJOTE DE LA MANCHA.jpg"
},
{
    title: "Cinta negra",
    author: "Eduardo Rabasa",
    price: 312,
    image: "Imagenes/Libros/Literatura/iberoamericana/Cinta negra.jpg"
},
{
    title: "La prisión en invierno",
    author: "Héctor Manjarrez",
    price: 249,
    image: "Imagenes/Libros/Literatura/iberoamericana/La prisión en invierno.jpg"
},
{
    title: "AGAPE SE PAGA",
    author: "Rodrigo Fresán",
    price: 340,
    image: "Imagenes/Libros/Literatura/iberoamericana/AGAPE SE PAGA.jpg"
},
{
    title: "El cuerpo en el que nací",
    author: "Guadalupe Nettel",
    price: 310,
    image: "Imagenes/Libros/Literatura/iberoamericana/El cuerpo en el que nací.jpg"
},
{
    title: "Marianela",
    author: "Martínez Roca",
    price: 69,
    image: "Imagenes/Libros/Literatura/iberoamericana/Marianela.jpg"
},
{
    title: "El orden natural de las cosas",
    author: "António Lobo Antunes",
    price: 334,
    image: "Imagenes/Libros/Literatura/iberoamericana/El orden natural de las cosas.jpg"
},
{
    title: "33 Razones para volver a verte",
    author: "Alice Kellen",
    price: 315,
    image: "Imagenes/Libros/Literatura/iberoamericana/33 Razones para volver a verte.jpg"
},
{
    title: "Yo, Julia",
    author: "Santiago Posteguillo",
    price: 368,
    image: "Imagenes/Libros/Literatura/iberoamericana/Yo, Julia.jpg"
},
{
    title: "Cuando era divertido",
    author: "Eloy Moreno",
    price: 399,
    image: "Imagenes/Libros/Literatura/iberoamericana/Cuando era divertido.jpg"
},
{
    title: "Estoy muerto y sigo gritando",
    author: "Emmanuel Morales",
    price: 280,
    image: "Imagenes/Libros/Literatura/iberoamericana/Estoy muerto y sigo gritando.jpg"
},
{
    title: "Salvo mi corazón, todo está bien",
    author: "Héctor Abad Faciolince",
    price: 469,
    image: "Imagenes/Libros/Literatura/iberoamericana/Salvo mi corazón, todo está bien.jpg"
},
{
    title: "El Alquimista",
    author: "Paulo Coelho",
    price: 329,
    image: "Imagenes/Libros/Literatura/iberoamericana/El Alquimista.jpg"
},{
    title: "La bajamar",
    author: "Literatura Random House",
    price: 99,
    image: "Imagenes/Libros/Literatura/iberoamericana/La bajamar.jpg"
},
/*Comics*/
{
    title: "En pocas palabras",
    author: "Lisa Brown",
    price: 195,
    image: "Imagenes/Libros/Comics/Novela grafica/En pocas palabras.jpg"
},
{
    title: "MARVEL PRIDE",
    author: "Alyssa Wong",
    price: 319,
    image: "Imagenes/Libros/Comics/Novela grafica/MARVEL PRIDE.jpg"
},
{
    title: "VANITAS NO CARTE N.2",
    author: "JUN MOCHIZUKI",
    price: 159,
    image: "Imagenes/Libros/Comics/Novela grafica/VANITAS NO CARTE N.2.jpg"
},
{
    title: "THE KILLER INSIDE N.2",
    author: "Hajime Inoryu",
    price: 149,
    image: "Imagenes/Libros/Comics/Novela grafica/THE KILLER INSIDE N.2.jpg"
},
{
    title: "Dandadan N.5",
    author: "Yukinobu Tatsu",
    price: 159,
    image: "Imagenes/Libros/Comics/Novela grafica/Dandadan N.5.jpg"
},
{
    title: "El hombre de negro",
    author: "Helio Flores",
    price: 495,
    image: "Imagenes/Libros/Comics/Novela grafica/El hombre de negro.jpg"
},
{
    title: "La princesa y el sándwich de queso",
    author: "Deya Muniz",
    price: 399,
    image: "Imagenes/Libros/Comics/Novela grafica/La princesa y el sándwich de queso.jpg"
},
{
    title: "Lo que tu biblioteca dice de ti",
    author: "Grant Snider",
    price: 549,
    image: "Imagenes/Libros/Comics/Novela grafica/Lo que tu biblioteca dice de ti.jpg"
},
{
    title: "QUINTILLIZAS N. 9",
    author: "NEGI HARUBA",
    price: 129,
    image: "Imagenes/Libros/Comics/Novela grafica/QUINTILLIZAS N. 9.jpg"
},
{
    title: "El lejano país de los estanques",
    author: "Rodolfo SantulloRodolfo Santullo",
    price: 438,
    image: "Imagenes/Libros/Comics/Novela grafica/El lejano país de los estanques.jpg"
},
{
    title: "Five Nights At Freddys. Los otros animatrónicos",
    author: "Scott Cawthon",
    price: 299,
    image: "Imagenes/Libros/Comics/Novela grafica/Five Nights At Freddys. Los otros animatrónicos.jpg"
},
{
    title: "Five nights at Freddys Escalofríos de Fazbear 3",
    author: "Scott Cawthon",
    price: 299,
    image: "Imagenes/Libros/Comics/Novela grafica/Five nights at Freddys Escalofríos de Fazbear 3.jpg"
},
{
    title: "Five nights at Freddys Escalofríos de Fazbear 2",
    author: "Scott Cawthon",
    price: 319,
    image: "Imagenes/Libros/Comics/Novela grafica/Five nights at Freddys Escalofríos de Fazbear 2.jpg"
},
{
    title: "Five nights at Freddys Escalofríos de Fazbear 1",
    author: "Scott Cawthon",
    price: 319,
    image: "Imagenes/Libros/Comics/Novela grafica/Five nights at Freddys Escalofríos de Fazbear 1.jpg"
},
{
    title: "De Yakuza a Amo de Casa N.1",
    author: "Kousuke Oono",
    price: 149,
    image: "Imagenes/Libros/Comics/Novela grafica/De Yakuza a Amo de Casa N.1.jpg"
},
{
    title: "La leyenda de los amigos",
    author: "Lee Gee Eun",
    price: 395,
    image: "Imagenes/Libros/Comics/Ilustrados/La leyenda de los amigos.jpg"
},
{
    title: "Cosas que no hacen los mayores",
    author: "Davide Cali",
    price: 530,
    image: "Imagenes/Libros/Comics/Ilustrados/Cosas que no hacen los mayores.jpg"
},
{
    title: "Cuentos de brujas",
    author: "Susaeta",
    price: 230,
    image: "Imagenes/Libros/Comics/Ilustrados/Cuentos de brujas.jpg"
},
{
    title: "ALICIA EN EL PAIS DE LAS MARAVILLAS",
    author: "Lewis Carroll",
    price: 742,
    image: "Imagenes/Libros/Comics/Ilustrados/ALICIA EN EL PAIS DE LAS MARAVILLAS.jpg"
},
{
    title: "EL DESTINO DE FAUSTO",
    author: "Oliver Jeffers",
    price: 220,
    image: "Imagenes/Libros/Comics/Ilustrados/EL DESTINO DE FAUSTO.jpg"
},
{
    title: "QUE ABSURDO",
    author: "Lori Montersen",
    price: 470,
    image: "Imagenes/Libros/Comics/Ilustrados/QUE ABSURDO.jpg"
},
{
    title: "SOLO EN CASA",
    author: "NAOKO MACHIDA",
    price: 299,
    image: "Imagenes/Libros/Comics/Ilustrados/SOLO EN CASA.jpg"
},
{
    title: "Bambi",
    author: "Felix Salten",
    price: 850,
    image: "Imagenes/Libros/Comics/Ilustrados/Bambi.jpg"
},
{
    title: "¿Cómo no temerle al miedo?",
    author: "Tere Attie",
    price: 250,
    image: "Imagenes/Libros/Comics/Ilustrados/Cómo no temerle al miedo.jpg"
},
{
    title: "Hay un fantasma en esta casa",
    author: "Oliver Jeffers",
    price: 380,
    image: "Imagenes/Libros/Comics/Ilustrados/Hay un fantasma en esta casa.jpg"
},
{
    title: "MARRON",
    author: "Mar Ferrero",
    price: 300,
    image: "Imagenes/Libros/Comics/Ilustrados/MARRON.jpg"
},
{
    title: "UNA CENA MONSTRUOSA",
    author: "Martí Meritxell",
    price: 595,
    image: "Imagenes/Libros/Comics/Ilustrados/UNA CENA MONSTRUOSA.jpg"
},
{
    title: "Gigante a la orilla",
    author: "Alfonso Ochoa",
    price: 330,
    image: "Imagenes/Libros/Comics/Ilustrados/Gigante a la orilla.jpg"
},
{
    title: "DAME UN ABRAZO",
    author: "Daniele Gobbetti",
    price: 379,
    image: "Imagenes/Libros/Comics/Ilustrados/DAME UN ABRAZO.jpg"
},
{
    title: "EL LOBO MIEDOSO",
    author: "Giuliana Pesavento",
    price: 399,
    image: "Imagenes/Libros/Comics/Ilustrados/EL LOBO MIEDOSO.jpg"
},
{
    title: "Ranger Reject 6",
    author: "Negi Haruba",
    price: 189,
    image: "Imagenes/Libros/Comics/Mangas/Ranger Reject 6.jpg"
},
{
    title: "El chico y el perro",
    author: "Seishu Hase",
    price: 189,
    image: "Imagenes/Libros/Comics/Mangas/El chico y el perro.jpg"
},
{
    title: "JOY 1",
    author: "Etsuko",
    price: 189,
    image: "Imagenes/Libros/Comics/Mangas/JOY 1.jpg"
},
{
    title: "Shikimori",
    author: "Keigo Maki",
    price: 189,
    image: "Imagenes/Libros/Comics/Mangas/Shikimori.jpg"
},
{
    title: "Jojo´s Bizarre Steell Ball Run N.3",
    author: "Hirohiko Araki",
    price: 189,
    image: "Imagenes/Libros/Comics/Mangas/Jojo´s Bizarre Steell Ball Run N.3.jpg"
},
{
    title: "ONE PIECE N.97",
    author: "EIICHIRO ODA",
    price: 139,
    image: "Imagenes/Libros/Comics/Mangas/ONE PIECE N.97.jpg"
},
{
    title: "KOMI CANT COMMUNICATE N. 4",
    author: "TOMOHITO ODA",
    price: 139,
    image: "Imagenes/Libros/Comics/Mangas/KOMI CANT COMMUNICATE N. 4.jpg"
},
{
    title: "KIETA HATSUKOI",
    author: "ARUKO",
    price: 149,
    image: "Imagenes/Libros/Comics/Mangas/KIETA HATSUKOI.jpg"
},
{
    title: "CHAIN SAW MAN N.12",
    author: "TATSUKI FUJIMOTO",
    price: 149,
    image: "Imagenes/Libros/Comics/Mangas/CHAIN SAW MAN N.12.jpg"
},
{
    title: "NARUTO GOLD EDITION N.7",
    author: "MASASHI KISHIMOTO",
    price: 259,
    image: "Imagenes/Libros/Comics/Mangas/NARUTO GOLD EDITION N.7.jpg"
},
{
    title: "Blue Period N.13",
    author: "Tsubasa Yamaguchi",
    price: 159,
    image: "Imagenes/Libros/Comics/Mangas/Blue Period N.13.jpg"
},
{
    title: "Rent a Girlfriend N.25",
    author: "Reiji Miyajima",
    price: 149,
    image: "Imagenes/Libros/Comics/Mangas/Rent a Girlfriend N.25.jpg"
},
{
    title: "MUSHISHI N.1",
    author: "YUKI URUSHIBARA",
    price: 209,
    image: "Imagenes/Libros/Comics/Mangas/MUSHISHI N.1.jpg"
},
{
    title: "Dragon Ball Super N.20",
    author: "Akira Toriyama",
    price: 159,
    image: "Imagenes/Libros/Comics/Mangas/Dragon Ball Super N.20.jpg"
},
{
    title: "El canto de la noche N.4",
    author: "Kotoyama",
    price: 159,
    image: "Imagenes/Libros/Comics/Mangas/El canto de la noche N.4.jpg"
},/*Consulta*/
{
    title: "Diccionario de Neurociencia",
    author: "Francisco Mora",
    price: 700,
    image: "Imagenes/Libros/Consulta/Diccionarios/Diccionario de Neurociencia.jpg"
},
{
    title: "Diccionario de Psicologia",
    author: "Umberto Galimberti",
    price: 1600,
    image: "Imagenes/Libros/Consulta/Diccionarios/Diccionario de Psicologia.jpg"
},
 ];

 // Filtrar libros según el término de búsqueda (coincidencias parciales en título, autor o precio)
 const filteredBooks = books.filter(book =>
     book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
     book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
     book.price.toString().includes(searchTerm)
 );

 // Mostrar resultados de búsqueda
 const searchResultsContainer = document.getElementById('searchResults');
 if (filteredBooks.length > 0) {
     filteredBooks.forEach(book => {
         const bookElement = document.createElement('div');
         bookElement.className = 'search-result';
         bookElement.innerHTML = `
             <div class="Items">
                 <figure>
                     <img src="${book.image}" class="Producto">
                 </figure>
                 <div class="Info">
                     <h2 class="Tit">${book.title}</h2>
                     <h3 class="Aut">${book.author}</h3>
                     <p class="Price">$ ${book.price}</p>
                 </div>
                 <div class="Car">
                    <button class="Carrito" onclick="addToCart('${book.title}', ${book.price})">Añadir al carrito</button>
                </div>
             </div>
         `;
         searchResultsContainer.appendChild(bookElement);
     });
 } else {
     searchResultsContainer.textContent = 'No se encontraron resultados';
 }