var num1 =  document.getElementById('number1')
var num2 = document.getElementById('number2')
var ps = document.getElementById('passo')
function contar(){
if(num1.value==0 || num1.value==''){
        window.alert('Voce deixou um espaco em branco! Digite Novamente')

    }
    else if(num2.value==0 || num2.value==''){
        window.alert('Voce deixou um espaco em branco! Digite Novamente')
    }
    else if(ps.value ==0||ps.value==''){
        window.alert('Voce deixou um espaco em branco! Digite Novamente')
    }
    else {
      res.innerHTML = "Contando: "
      let um = Number(num1.value)
      let dois = Number(num2.value)
      let pas = Number(ps.value)

      for(let c = um; c <= dois; c += pas){
          res.innerHTML += ` ${c} \u{1F47B}`
      }
            

        }
}
