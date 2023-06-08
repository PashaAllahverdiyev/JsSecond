let btn = document.getElementById('btn')
btn.onclick = () => {
    let num1 = parseFloat(document.getElementById('num1').value)
    let num2 = parseFloat(document.getElementById('num2').value)

    let sum = 0
    for(x = num1; x <= num2; x++) {
        sum += x
    }
    console.log(sum);
}
let bttn = document.getElementById('bttn')
let a = 200;
let b = 200;
bttn.onclick =  () => {
    a += 50;
    b += 20;
    bttn.style.width =`${a}px`;
    bttn.style.height = `${b}px`
}