let actionMouse =window.document.getElementById('areaClick')

function clicado () { 
    actionMouse.innerText = 'Clicou'
    actionMouse.style.background='blue'

}
function entrar(){
    actionMouse.innerText='Entrou'
    actionMouse.style.background='red'
    
}
function sair (){
    actionMouse.innerText= 'Saiu'
    actionMouse.style.background='gray'
}