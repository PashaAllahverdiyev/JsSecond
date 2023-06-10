let calc = document.getElementById('calc')
let prc = document.getElementById('prc')
let mnth = document.getElementById('mnth')  
let btn = document.getElementById('btn')

let num1 = 0
let num2 = 0 
let num3 = 0

btn.onclick = () => {
    let a = parseFloat(document.getElementById('demo1').value)
    let b = parseFloat(document.getElementById('demo2').value)
    let c = parseFloat(document.getElementById('demo3').value)

    num1 = (a * c)/100
    num2 = a + num1
    num3 = (num2/b).toFixed(2)

    mnth.innerHTML = `${num3}AZN`
    prc.innerHTML = `${num2}AZN`


}