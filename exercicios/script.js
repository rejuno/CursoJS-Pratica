function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
//var hora = data.getHours()
var hora = 22
msg.innerHTML = `Agora sao ${hora} horas`
if(hora >= 0 && hora < 12 ){
    //Bom dia
    img.src = "imagens/manha.png"
    document.body.style.background= '#cb996a'

}
else if(hora >= 12 && hora <= 18){
    //Boa Tarde
    img.src = "imagens/tarde.png"
    document.body.style.background= '#997043'
}
else{
    //Boa Noite
    img.src = "imagens/noite.png"
    document.body.style.background= '#566595'
}
}