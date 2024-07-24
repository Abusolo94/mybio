 const nav__links = document.querySelectorAll('nav a')
 const section_containers = document.querySelectorAll('section')
 const qrCodeContainer = document.querySelector('.watsqr-code')
 const watsappBtn  = document.querySelector('.watsapp')
 const logoContainer = document.querySelector('.logo-name')




 const listOfVideos = document.querySelector('.listOfVideos')
 const videoContainer = document.querySelector('.video')

 const exploreContainer = document.querySelector('.explore')
 const actioneBtnContainer = document.querySelector('.link-buttons')


 window.onscroll = () =>{
     section_containers.forEach(sec =>{
        let top = window.scrollY
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id')

        if(top >= offset && top < offset + height){
            nav__links.forEach(link =>{
                link.classList.remove('active')
                 document.querySelector('nav a[ href*= '+ id +']').classList.add('active')
              
            })
        }
     })
 }
 logoContainer.addEventListener('click', ()=>{
   
    const homeContainer = document.getElementById('home')
     window.scrollTo({
        top: homeContainer.scrollTop,
        behavior: "smooth"
        
     })
 })

 watsappBtn.addEventListener('click', ()=>{
    qrCodeContainer.classList.add('active')
    section_containers.forEach(sec =>{
        sec.style.opacity = '0.4' 
        
    })
 })
 qrCodeContainer.addEventListener('click', ()=>{
    qrCodeContainer.classList.remove('active')
    section_containers.forEach(sec =>{
        sec.style.opacity = '1'
    })

 })
 const menuDisplay = document.querySelector('.menu')
 menuDisplay.addEventListener('click', ()=>{
    const menuItems = document.querySelector('nav ul')
    menuItems.classList.toggle('active')

 })


 function renderingVideo(){

    videos.forEach(item => listOfVideos.innerHTML += `
          <div class="video-details">
                        <h1>${item.name}</h1>
                        <video src="${item.src}" controls></video>
                        <p>${item.decription}</p>
                    </div>
        
        
        ` )

 }

 renderingVideo()


 actioneBtnContainer.addEventListener('click', (e)=>{
    if( e.target.className === 'icon playe'){
      
        videoContainer.classList.add('active')
     
    }
    if( e.target.className === 'icon expo'){
      
        exploreContainer.classList.add('active')
     
    }


 })
 const backArrow = document.querySelector('.back-arrow')
 const backArrowexpo = document.querySelector('.back')

 backArrow.addEventListener('click', ()=>{
    videoContainer.classList.remove('active')

 })
backArrowexpo.addEventListener('click', ()=>{
    exploreContainer.classList.remove('active')

 })
 const moreAbout = document.querySelector('.moreAbout')
 const buttonFindContainer = document.querySelector('.buttons-find')
 const findBts = document.querySelectorAll('.find')
 const moreAboutBack = document.querySelector('.back-moreabout')
 const findEl = document.querySelectorAll('.findPop')
  
 moreAboutBack.addEventListener('click', ()=>{
    moreAbout.classList.remove('active')
    

 })

 buttonFindContainer.addEventListener('click', (e)=>{
   const getCurrent = e.target.dataset.btn

  

    findBts.forEach(btn =>{
            if(!getCurrent){
                return
            }
          
            moreAbout.classList.add('active')
           


        findEl.forEach(element =>{
            element.classList.remove('active')
           const currentCard = document.getElementById(getCurrent)
           currentCard.classList.add('active')
        })
        
    })

 })

const pojectCategoryCont = document.querySelector('.category-details')
 const projectCards = document.querySelectorAll('.filter_heading')
 const projectpopbackBtn = document.querySelector('.back-arrows')
 const projectLinks = document.querySelectorAll('.pop-cards')
 const projectPopContainer = document.querySelector('.project-pop')

 projectpopbackBtn.addEventListener('click', ()=>{
    projectPopContainer.classList.remove('active')

 })
 
 pojectCategoryCont.addEventListener('click', (e)=>{
    const getCurrentId = e.target.dataset.project
    if(getCurrentId){
        projectCards.forEach(card =>{
          
        })
        projectPopContainer.classList.add('active')

        console.log(getCurrentId)
        projectLinks.forEach(links =>{
            links.classList.remove('active')
            const currentCardLink = document.getElementById(getCurrentId)
            currentCardLink.classList.add('active')
        })
    }
 })

const contactSentBtn = document.querySelector('.sent__btn')
const contactPopUpMessage = document.querySelector('.constact-message')
const contactClostBtn = document.querySelector('.cont-message-back')
const allInputFields  = document.querySelectorAll('.form-input input')
const textMessage = document.getElementById('textarea')
const confirmBtnEl = document.querySelector('.confirm-btn')



contactClostBtn.addEventListener('click', ()=>{
    contactPopUpMessage.classList.remove('active')
})

contactSentBtn.addEventListener('click', ()=>{
 allInputFields.forEach(field =>{
    if(field.value === '' && textMessage.value === ''){
        console.log('all fields must be filled')
        errorMessage('Oooopps!!!','all input fields must be filled please try again later')
    }else{
        contactPopUpMessage.classList.add('active')
        sendingEmail()


    }


 })
 allInputFields.forEach(input => input.value = '')
 textMessage.value = ''


})


function sendingEmail(){
    const firstName = document.getElementById('cfname')
    const secondName = document.getElementById('csname')
    const emailAccount = document.getElementById('cemail')
    const phoneNumber = document.getElementById('cphone')
    


    const mess = {
        fname : firstName.value,
        sname : secondName.value,
        email : emailAccount.value,
        fnumber : phoneNumber.value,
        tmessage : textMessage.value

    }
     renderingTextMessage(mess)
}



function renderingTextMessage(message){
    const messageContainer = document.querySelector('.contact-message-container')

 
        messageContainer.innerHTML = `
        <h1>My name is <span>${message.fname} ${message.sname}</span></h1>
                      <h1>My number is: <span>${message.fnumber}</span></h1>
                      <textarea>${message.tmessage}</textarea>
      
      `

}
confirmBtnEl.addEventListener('click', ()=>{
    contactPopUpMessage.classList.remove('active')
    errorMessage('WOOW!!!', 'thanks your message is sent')

})

function errorMessage(explation, message){
    const errorMessageContainer = document.querySelector('.errorCatcher')
    const messagePara = document.querySelector('.messagePara')
    const expression = document.querySelector('.expression')
    expression.textContent = `${explation}`
    messagePara.textContent = `${message}`
    errorMessageContainer.classList.add('active')
 setTimeout(()=>{
    errorMessageContainer.classList.remove('active')

 },2000)


}



  
    const importantLinksx = document.querySelector('.important-link-footer')
    const allimportLinks = document.querySelectorAll('.important-link-footer a')
    const profilecontainer = document.querySelector('.profile')
    const gallaryPop = document.querySelector('.gallary-pop')


    importantLinksx.addEventListener('click', (e)=>{
        const currentItem = e.target.dataset.link

        if(currentItem){
            allimportLinks.forEach(item =>{
                item.classList.remove('active')

            })
            e.target.classList.add('active')
            moreAbout.classList.add('active')
          
            
        findEl.forEach(element =>{
            element.classList.remove('active')
           const link = document.getElementById(currentItem)
           link.classList.add('active')
        })

        }

    })
 

const findMore = document.querySelector('.findMore')

findMore.addEventListener('click', (e)=>{

    if(e.target.className === 'gallary'){
      gallaryPop.classList.add('active')
      renderingPhotoes()

    }
    if(e.target.className === 'vidox'){
        videoContainer.classList.add('active')

    }
    if(e.target.className === 'explorx'){
        exploreContainer.classList.add('active')

    }

})


const photoList = document.querySelector('.image-list')
const gallaryBackBtn = document.querySelector('.gallary-back')
gallaryBackBtn.addEventListener('click', ()=>{
    gallaryPop.classList.remove('active')

})



function renderingPhotoes(){

    imagez.map(photo => photoList.innerHTML += `
          <img src="${photo.src}" alt="image">
        
        `)

}




// <<<<<<< after medial query functions>>>>>>>>>>
const cardsWrapper = document.querySelector('.category-details')
const allCards = document.querySelectorAll('.category-details .cardz')
const previousBtn = document.querySelector('.previous')
const nextBtn = document.querySelector('.next')
let currentSlide = 0

  function handlingProjectsSlides(){
function getCurrentSlid(){
    allCards.forEach((card, index)=>card.style.transform = `translateX(${100*(index-currentSlide)}%)`)


}

previousBtn.addEventListener('click', ()=>{

    currentSlide--
    if(0 > currentSlide){
        currentSlide = allCards.length -1
    }
 
    getCurrentSlid(currentSlide)

})
nextBtn.addEventListener('click', ()=>{
    console.log('ddnna')
    currentSlide++
    if(allCards.length -1  < currentSlide){
        currentSlide = 0
    }
    getCurrentSlid(currentSlide)

})
}

handlingProjectsSlides()