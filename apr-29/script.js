const value = document.getElementById('value')
const increase = document.getElementsByClassName('increase')[0]
const decrease = document.getElementsByClassName('decrease')[0]
const portal = document.getElementsByClassName('portal')[0]
const warning = document.getElementsByClassName('warning')[0]

console.log(value)
console.log(increase)
console.log(decrease)
console.log(portal)
console.log(warning)

function showPortal(){
    portal.classList.remove('hidden')
}
function hidePortal(){
    portal.classList.add('hidden')
}

function increaseValue(){
    if(value.innerText == 10){
        showPortal()
        warning.innerHTML = "Can't go beyond 10"
        return
    }
    value.innerHTML = Number(value.innerHTML)+1
    if(value.innerHTML > 0){
        hidePortal()
    }
}

function decreaseValue(){
    if(value.innerHTML==0){  
        showPortal()
        warning.innerHTML = "can't go below zero"
        return
    }
    value.innerHTML = Number(value.innerHTML)-1
    if(value.innerHTML < 10){
        hidePortal()
    }
}
increase.addEventListener('click',increaseValue)
decrease.addEventListener('click',decreaseValue)



