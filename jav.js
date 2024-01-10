let n1 = parseFloat(prompt("Primeiro número:"))
alert (`Primeiro número: ${n1}`) 
let n2 = parseFloat(prompt("Segundo número:")) 
alert (`Segundo número: ${n2}`) 
let n3 = parseFloat(prompt("Terceito número:")) 
alert (`Terceiro número: ${n3}`) 
let n4 = parseFloat(prompt("Quarto número:")) 
alert (`Qaurto número: ${n4}`) 
let n5 = parseFloat(prompt("Quinto número:"))
alert (`Quinto número ${n5}`) 

function media (n1, n2, n3, n4, n5){
    result = (n1 + n2 + n3 + n4 + n5 /5)
    return (n1+n2+n3+n4+n5/5)
  
}

let media1
// a variável resultado recebe o retorno da função media com parametros  . . . .
media1 = media(n1, n2, n3, n4, n5 )

// publiccar com alert o texto "resultudo" mais o valor da variável média
alert(`Resultado ${media1}`)