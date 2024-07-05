const arrowKey = document.getElementById('deeply')
const navArticle = document.querySelectorAll('.fa')
const navResize = document.getElementById('nav')
const hamburg = document.getElementById('navShow')
const navSize = document.getElementById('nav')
const mainBody =document.getElementById('content')

let initialState = true
let sizeLarge = true

let isNavigationWide = true
arrowKey.style.backgroundImage = 'url("/src/images/icons/left.png")'
arrowKey.addEventListener('click',updateNavigationSize=()=>{
    if(isNavigationWide == true){
        
        navArticle.forEach(element => {
            element.style.width = '0px'
            element.style.height = '0px'
            element.style.visibility = 'hidden'
            element.style.transition = 'all ease-out 50ms'
        })
        navSize.style.setProperty('--width-Content','80px')
        arrowKey.style.backgroundImage='url("/src/images/icons/right.png")'
        return isNavigationWide = false
    }
    else if(isNavigationWide ==false){
        navArticle.forEach(element => {
            element.style.width = 'fit-content'
            element.style.height = 'fit-content'
            element.style.visibility = 'visible'
            element.style.transition = 'all ease-out 200ms'
        }) 
        navResize.style.setProperty('--width-Content','220px') 
        arrowKey.style.backgroundImage='url("/src/images/icons/left.png")'
        return isNavigationWide =true 
    }
    else return isNavigationWide = true ,updateNavigationSize()
})

hamburg.addEventListener('click',hideNav =()=>{
    if(initialState ==true){
        navSize.style.visibility = 'hidden'
        nav.style.setProperty('--width-Content','0px')
        hamburg.style.transform = 'rotate("180deg")'
        hamburg.style.backgroundImage = 'url("/src/images/icons/menu.png")'
        navSize.style.transition = 'all ease-out 50ms'
        navArticle.forEach(element=>{
            element.style.width = '0px'
            element.style.visibility='hidden'
        })
        return initialState = false
    }
    else if(initialState == false){

        navSize.style.visibility = 'visible'
        navSize.style.setProperty('--width-Content','220px')
        navSize.style.left = '0'
        hamburg.style.background = 'url("/src/images/icons/close.png")'
        navArticle.forEach(element=>{
            element.style.width = 'fit-content'
            element.style.visibility = 'visible'
        })
        return initialState = true
    }
    else return initialState = true,hideNav()
})
// document.onload = updateNavigationSize()
document.onload = hideNav()

