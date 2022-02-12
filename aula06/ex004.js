var n1 = 1545.5
//undefined
n1
//1545.5
n1.toFixed(2)
//'1545.50'
n1.toFixed(2).replace(".",",")
//'1545,50'
 n1.toLocaleString(`pt-br`,{style: 'currency',currency: 'BRL'} )//bom saber esse comando
//'R$ 1.545,50'