/* # Descrizione
Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro script JS in cui:

# Milestone 1
Creiamo il nostro array di oggetti che rappresentano ciascun post.                FATTO ♣
Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:   FATTO ♣
- id del post, numero progressivo da 1 a n                                        FATTO ♣
- nome autore,
- foto autore (potrebbe mancare a qualcuno),
- data in formato americano (mm-gg-yyyy),
- testo del post,
- immagine (non tutti i post devono avere una immagine),
- numero di likes.
*Non è necessario creare date casuali, inventatele*
*Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es. Unsplash (https://unsplash.it/300/300?image=3)*

#Milestone 2
Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.

#Milestone 3
Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.

# ****BONUS**
 1. Formattare le date in formato italiano (gg/mm/aaaa)
 2. Gestire l'assenza dell'immagine profilo con un elemento di fallback che contiene le iniziali dell'utente (es. Luca Formicola  => LF).
 3. Al click su un pulsante "Mi Piace" di un post, se abbiamo già cliccato dobbiamo decrementare il contatore e cambiare il colore del bottone.

 # Consigli del giorno:
 Ragioniamo come sempre a step.
 Prima scriviamo nei commenti la logica in italiano e poi traduciamo in codice.
 console.log() è nostro amico.
 Quando un pezzo di codice funziona, chiediamoci se possiamo scomporlo in funzioni più piccole. */



// PRENDO ELEMENTI DOM 
const cardElement = document.getElementById('container');
const likeElement = document.getElementById('like-button');
console.log(likeElement);

// CREO L'ARRAY DI OGGETTI CHE RAPPRESENTA CIASCUN POST
const postObjects =[  
    {
     id: 1,
     name: 'Alberto Giorgianni',  
     profilePicture:  'alberto-giorgianni.jpg',   
     date: '12-21-2022',
     text: 'La mia nuova casa si trova in posto magnifico',   
     postImg: 'picture-1.jpg', 
     like: '13'},

    {
     id: 2,
     name: 'Angela Veronesi',     
     profilePicture:  'angela-veronesi.jpg',      
     date: '12-20-2022',
     text: 'Paesaggio Mozzafiato',                           
     postImg: 'picture-2.jpg', 
     like: '43'},

    {
     id: 3,
     name: 'Lorenzo Franceschini',
     profilePicture:  'lorenzo-franceschini.jpg', 
     date: '12-18-2022',
     text: 'La mia nuova macchina',                           
     postImg: 'picture-3.jpg', 
     like: '18'},

    {
     id: 4,
     name: 'Luca Bartolini',      
     profilePicture:  'luca-bartolini.jpg',       
     date: '12-15-2022',
     text: 'Il vulcano più bello del mondo',                 
     postImg: 'picture-4.jpg', 
     like: '158'},

    {
     id: 5,
     name: 'Renato Caruso',       
     profilePicture:  'renato-caruso.jpg',        
     date: '12-10-2022',
     text: 'Il corso Boolean è molto bello',                 
     postImg: '',              
     like: '31'},
     
    {
     id: 6,
     name: 'Sharon Baiocca',       
     profilePicture:  'sharon-baiocca.jpg',       
     date: '12-07-2022',
     text: 'Oggi è una bella giornata per andare in vacanza', 
     postImg: '',              
     like: '43'},
]

// CREO UN CICLO PER STAMPARE I POST CON LE INFORMAZIONI DELL'ARRAY 
let contentCard = '';
postObjects.forEach((element, i) => {

    contentCard += `
         
    <div class="post">
     <div class="post__header">
      <div class="post-meta">
        <div class="post-meta__icon">
          <img class="profile-pic" src="img/${element.profilePicture}" alt="${element.name}" />
        </div>
        <div class="post-meta__data">
          <div class="post-meta__author">${element.name}</div>
          <div class="post-meta__time">${element.date}</div>
        </div>
      </div>
    </div>
    <div class="post__text">
    ${element.text}
    </div>
    <div class="post__image">
      <img src="img/${element.postImg}" alt="" />
    </div>
    <div class="post__footer">
      <div class="likes js-likes">
        <div class="likes__cta">
          <button id="like-button" class="like-button js-like-button" href="#" data-postid="1">
            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
            <span class="like-button__label">Mi Piace</span>
          </button>
        </div>
        <div class="likes__counter">Piace a <b id="like-counter-1" class="js-likes-counter">${element.like}</b> persone</div>
      </div>
    </div>
  </div>
          
    `;
});

// STAMPO NEL DOM 
cardElement.innerHTML = contentCard;

// CREO UN EVENTO SUL BOTTONE like

likeElement.addEventListener('click', () => {
  
    likeElement.classList.add('clicked');
    
});
