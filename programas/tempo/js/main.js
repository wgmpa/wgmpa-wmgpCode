
function loadingTime(){

let msg = window.document.getElementById('msg')
let img = window.document.getElementById('image')

let dataAtual = new Date()
let horas = dataAtual.getHours()
let minutos = dataAtual.getMinutes()
msg.innerHTML=`Agora são ${horas} horas e ${minutos} minutos`

if(horas >=0 && horas < 12){
    img.src='/img/manha.png'
    document.body.style.background='#e2cd9f'
}else if(horas >=12 && horas <18){
    img.src='/img/tarde.png'
    document.body.style.background='#b9846f'
}else{
    img.src ='/img/noite.png'
    document.body.style.background='#515154'
}

}