let btn = document.querySelector('.button')
btn.onclick = () => {
    let inp = document.querySelector('.inp').value
    let h1 = document.createElement('h1')
    let bttn = document.createElement('button')
    let div = document.createElement('div')
    div.append(h1,bttn)
    document.querySelector('.content').appendChild(div)
    div.classList = 'div'
    bttn.classList = 'bttn'


    h1.innerHTML = inp
    bttn.innerHTML='Delete'
    
   let btns  = document.querySelectorAll('.bttn')


   for(let bir of btns){
       bir.onclick = () =>{
        bir.parentElement.remove();
        let task= document.querySelectorAll('.div')
        let asd = document.getElementById('asd')
     
        asd.innerHTML=`Task sayi ${task.length}`

       }
   }
   let task= document.querySelectorAll('.div')
   let asd = document.getElementById('asd')

   asd.innerHTML=`Task sayi ${task.length}`

}