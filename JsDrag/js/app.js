let srs = document.querySelector('#surush2')
let count = document.querySelector('#count')
srs.ondragover = function(e) {
    e.preventDefault()
    this.style.borderStyle = 'dashed'
}
srs.ondragleave = function(e) {
    e.preventDefault()
    this.style.borderStyle = 'solid'
}

let items = document.querySelectorAll('.box')
let q = items.length

count.innerHTML = q

 for(let item of items){
    item.ondragstart = function(e){

        e.dataTransfer.setData('param',this.id)
    }
 }
 srs.ondrop = function(e){
    let id = e.dataTransfer.getData('param')
    let boxes = document.getElementById(id)
    q--;
    count.innerHTML = q
    srs.appendChild(boxes)
 }