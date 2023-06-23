let btn = document.querySelector('.icon i')
let phone = document.querySelector('#phone .phoneup')
let next = document.querySelector('#phone .nextsite')
let x = document.querySelector('.icon-tel .xx')
btn.onclick = () => {
    phone.style.display = 'none'
    next.style.display = 'block'
}

x.onclick = () => {
    phone.style.display = 'flex'
    next.style.display = 'none'
}
let game = document.querySelector('.game')
let stick = document.querySelector('.stick')
let a = 0
let b = 0
document.body.onkeydown = (sol) =>{
if(sol.keyCode === 38){
    a-=2
    stick.style.top=`${a}%`
}else if(sol.keyCode === 40){
    a+=2
    stick.style.top=`${a}%`
}
if(sol.keyCode === 37){
    b-=2
    stick.style.left=`${b}%`
}else if(sol.keyCode === 39){
    b+=2
    stick.style.left=`${b}%`
}
if(a === 50 && b === 42){
    stick.style.display = 'none'
    game.innerHTML= 'Game Finished'
}else{
    setTimeout(() => {
        location.reload()
    }, 10000);
}
}
