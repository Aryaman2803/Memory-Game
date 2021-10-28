const section = document.querySelector('section')
const playerLivesCount = document.querySelector('span')
const playerLives = 5

playerLivesCount.textContent = playerLives

//Generate the cards - 16 images - 8 *8
const getData = () => [
  { imgSrc: './images/1.jpeg', name: '1' },
  { imgSrc: './images/2.jpeg', name: '2' },
  { imgSrc: './images/3.jpeg', name: '3' },
  { imgSrc: './images/4.jpeg', name: '4' },
  { imgSrc: './images/5.jpeg', name: '5' },
  { imgSrc: './images/6.jpeg', name: '6' },
  { imgSrc: './images/7.jpeg', name: '7' },
  { imgSrc: './images/8.jpeg', name: '8' },
  { imgSrc: './images/1.jpeg', name: '1' },
  { imgSrc: './images/2.jpeg', name: '2' },
  { imgSrc: './images/3.jpeg', name: '3' },
  { imgSrc: './images/4.jpeg', name: '4' },
  { imgSrc: './images/5.jpeg', name: '5' },
  { imgSrc: './images/6.jpeg', name: '6' },
  { imgSrc: './images/7.jpeg', name: '7' },
  { imgSrc: './images/8.jpeg', name: '8' },
]

//Randomize images
const randomize = () => {
  const cardData = getData()
  return cardData.sort(() => Math.random() - 0.5)
}

//Card generator function
const cardGenerator = () => {
  const cardData = randomize()
  //Generate the HTML
  cardData.forEach((item) => {
    const card = document.createElement('div')
    const face = document.createElement('img')
    const back = document.createElement('div')
    card.classList = 'card'
    face.classList = 'face'
    back.classList = 'back'

    //Attach the info to the cards
    face.src = item.imgSrc
    face.alt = item.name

    //Attach the cards to the section
    card.appendChild(face)
    card.appendChild(back)
    section.appendChild(card)

    //Add event listener to each card

    card.addEventListener('click',e=>{
        card.classList.toggle('toggleCard')
        checkCards(e)
    })
  })
}

//Check cards
const checkCards = (e)=>{
    const clickedCard = e.target;
    console.log(clickedCard);
}


cardGenerator()
