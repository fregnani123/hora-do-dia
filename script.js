
function carregar(){

var msg = document.getElementById('mensagem')
var img = document.getElementById('imagem')
var data = new Date()
//var hora = data.getHours()
var hora = 22
var mim = data.getMinutes()
msg.innerHTML = `agora são ${hora} horas e ${mim} mim `
//Bom dia
if (hora >= 0 && hora <=12) {document.body.style.background= "#e2cd9f"
img.src = 'imagem/manha.png'}
//Boa tarde
else if (hora >= 12 && hora < 18){
    img.src = 'imagem/tarde.png'
    document.body.style.background ='#b9846f'
}
//Boa noite
else {img.src = 'imagem/noite.png'
document.body.style.background= '#515159'}
}










/*

<!--

   <h1>Hora Atual</h1>

<h2 id="periodo" ></h2>

<script src="./script.js"></script>
</body>


    ___
    var p = document.getElementById('periodo')
var agora = new Date()
var hora = agora.getHours()
var minutos = agora.getMinutes()
p.innerHTML = `Agora é ${hora}: ${minutos}  <br>`
if (hora < 12) {p.innerHTML +=`Bom dia`}

else if (hora >= 12) {p.innerHTML += `Boa tade`}

else {`Boa noite`}
    
    
    
    
   ____________________________________ 
    function verificar(){
var idade = document.getElementById('txtid') 

var res = document.getElementById('res')
var idade = Number(txtid.value)


if (idade < 16) {res.innerText=`não vota`} 

else if (idade < 18 || idade > 65 ){
    res.innerText = `voto opcional`
}
else {res.innerText = `voto obrigatorio`}

}
        <h1>Voto obrigatorio ou opcional</h1>
<input type="number" nome="txtid" id="txtid">
<input type="button" value="verificar" onclick="verificar()">
<h2 id="res"></h2>
    
    
    
    
    
    
    
    
 _______________________________________   
    <h1>Somando Valores</h1>
<input type='number' name='txtn1' id='txtn1'> +   
<input type='number' name='txtn2' id="txtn2">
<input type='button' value='somar' onclick='somar()''>

<div id="res"></div>

#clicar {font-size: 15pt;
    width: 200px;height: 200px;text-align: center;line-height: 200px;background-color: aquamarine
;color: blueviolet;}

#button {margin: 10px ;font-size: 15pt;
    width: 200px;height: 200px;text-align: center;line-height: 200px;background-color: aquamarine
;color: blueviolet;}


function somar () {
    
    var tn1 = document.getElementById('txtn1')
    var tn2 = document.getElementById('txtn2')
    var res = document.getElementById('res')
    
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)

    var s = n1 + n2

    res.innerHTML = (s)

    _________________________________

    <h1>Sistema de Multas</h1>
Velocidade do carro <input type="number" name="txtvel" id="txtvel"> km/h
<h></h>
<input type="button" value="verificar" onclick="calcular()">

<div id="res" ></div>



<script src="./script.js"></script>

function calcular () {
    var txtvel = document.getElementById("txtvel") 
    var res = document.getElementById("res")
    var vel = Number(txtvel.value)
    
    res.innerHTML= `<p>Sua velocidade atual é de <strong> ${vel} Km/h</strong></p>`
    
    if (vel > 60) {res.innerHTML += `<p class='multado'>Você passou acima da velocidade - Multado</p>`}
    
    
    res.innerHTML += `Dirija sempre com o Cinto de segurança.` 

}

_________________________________




var vel = 64.5 
console.log(`A velocidade do seu carro é ${vel}`)
if (vel >= 60){
console.log (`Ultrapassou o limite permitido - multado`)}

Aula em video 

var button = document.getElementById('button')
button.addEventListener ("click", clicar)
button.addEventListener ("mouseenter", entrar)
button.addEventListener ("mouseout", sair)

function clicar() { 
    button.innerText = "clicou"
    button.style.background = "red"
}

function entrar() { 
    button.innerText = "entrou"
    button.style.background = "black"
}

function sair() {
    button.innerText = "saiu"
    button.style.background = "green"}




























var c = document.querySelector('div#clicar')

c.style.color="blue"


var clicar = document.getElementById('click')

clicar.style.background = 'blue'
document.write ("<p>Meu novo paragrafo</p>")







var nome = prompt ("qual é o seu nome")
document.write(`Ola <strong>${nome}</strong> seu nome tem ${nome.length} letras<br>`)
document.write(`seu nome em letra maiuscula é ${nome.toUpperCase()}`)


/*

var n1 = parseFloat(prompt("digite um numero"))
var n2 = parseFloat(prompt("digite outro numero"))
var r = (n1+n2)
alert (`A soma entre ${n1} e ${n2} é igual a ${r}` )



let lista = document.getElementById("lista");

let num = parseInt(lista.getAttribute("data-num"));

let conteudo = ""

for ( let i = 0; i < num; i++ ) {

    conteudo += "<li>" + i + "</li>";
}

lista.innerHTML = conteudo; 




____________________________________
Mudando o Html com css

ex: html
<div onmouseover="onOver (this)" onmouseout="onOut(this)" >Click em mim</div>
    html 

 
function onOver (elemento){
    elemento.style.backgroundColor="red"
}
function onOut (elemento) {
    elemento.style.backgroundColor="black"
}






________________________________________





var d = new Date (2044444444444);

console.log(d);


function criarAluno(nome,n1,n2){

    return {
        nome: nome,
        nota1: n1,
        nota2: n2,

        media: function(){
            return (this.nota1 + this.nota2)/2;
        }
    }

}

var turma = [
    criarAluno("Fabiano",9,7),
    criarAluno("carlos",9,9),
    criarAluno("Jean",8,6)
]

var aluno = turma[0]

for (var aluno of turma){
    console.log(aluno)
}

___________________________________
function calcmedia (){
    return (this.notas[0]+this.notas[1])/2}

var aluno = {
    nome: "igor",
    notas: [8,6],

media:calcmedia

}


var aluno1 = {
    nome: "Fabio",
    notas: [5,6],

    media:calcmedia
}


console.log (aluno.nome)
console.log (aluno.media(aluno.notas[0],aluno.notas[1]))

console.log (aluno1.nome)
console.log (aluno1.media(aluno1.notas[0],aluno1.notas[1]))





_____________________________________
function calcmedia (n1,n2){
    return (n1+n2)/2}

var aluno = {
    nome: "igor",
    notas: [8,6],

media:calcmedia

}


var aluno1 = {
    nome: "Fabio",
    notas: [5,6],

    media:calcmedia
}


console.log (aluno.nome)
console.log (aluno.media(aluno.notas[0],aluno.notas[1]))

console.log (aluno1.nome)
console.log (aluno1.media(aluno1.notas[0],aluno1.notas[1]))




var aluno = {nome:"Igor",
notas: [6,7,7]
           }
aluno.matricula = 13545;

console.log (aluno)

var aluno = {nome:"Igor",
notas: [6,7,7]
           }

console.log (aluno.notas[1])





________________________________
Nome do aluno - nota 1 - nota 2 - nota 3 -media - aprovado - reprovado */

/* var nomes = ["Igor", "Maria", "jose","Fabiano"];
var notaA = [7.5, 6.5, 9.5,5.5];
var notaB = [8.5,7.5, 7.7,6.5,];
var notaC = [9.5,6.5,7,8.5];

function media (n1,n2,n3){
return (n1+n2+n3)/3} 

function passou(media){

if (media>=7){
return "aprovado"}
else {return "reprovado"}
}

for (var index in nomes) {

    var nota1= notaA[index];
    var nota2= notaB[index];
    var nota3= notaC[index];

    var m = (nota1,nota2,nota3)

    console.log (nomes[index] +"-"+ nota1+"-"+ nota2 +"-"+ nota3 + "-" + passou(m));
} 


____________________________________



var nomes = ["Igor", "Maria", "jose"];
var notaA = [7.5, 6.5, 9.4];
var notaB = [8.3,7.5, 7.7];
 
function media (n1,n2) {
    return (n1 + n2)/2
}

for (var index in nomes) {

    var nota1 = notaA[index];
    var nota2 = notaB[index];

    console.log (nomes[index] +"-"+ nota1+"-"+ nota2 +"-" + media(nota1,nota2));




___________________________________



Nome do aluno - nota 1 - nota 2 - media - aprovado - reprovado 

var nomes = ["Igor", "Maria", "jose"];
var nota1= [7.5, 6.5, 9.4];
var nota2= [8.3,7.5, 7.7];
 
function media (n1,n2){
    return (n1 + n2)/2
}

for (var index in nomes){

    console.log (nomes[index] +"-"+(nota1[index])+"-"+(nota2[index])+"-"+media(nota1[index],nota2[index]));


_____________________________________    
var media = function (n1,n2){

    return (n1 + n2)/2
}
console.log (media(2, 6));
__________________________________

function media(n1,n2) {
    var nota1=n2
    var nota2=n1
    var media= (nota1+nota2) /2
return media;
}

var resultado = media (7,8);
var m = media;
var m1 = media;

var resultado2= m(4,9)
var resultado1= m1(5,5)

console.log (resultado);
console.log (resultado2);
console.log (resultado1)
_________________________

function media(n1,n2) {
    var nota1=n2
    var nota2=n1
    var media= (nota1+nota2) /2
console.log(media)
}

media(10,9)



function media() {
    var nota1=10;
    var nota2=8;
    var media= (nota1+nota2) /2
console.log(media)
}

media()
___________________________________________________________

var alunos = ["Igor","Pedro","Fernanda","Rafael"];

for ( var i = 0; i <= alunos.length; i++) 
console.log (alunos [i])

________________________________________________________

var alunos = Array ("Fernanda","Pedro", "Marcos", "Fabio");

var notas = 

console.log (alunos)
_________________

var numero = 5; 

while (numero < 10){

console.log ("numero" + numero);
numero++
}

console.log ("acabou")

__________________________
var numero = 5; 

for (var vez = 0; vez <= numero; vez++){
console.log ("executando o for pela " + vez) 
}
console.log ("acabou")

_________________________________

var nota1= 0
var nota2= 10;

var media = (nota1 + nota2) /2

var conceito=""

if (media >= 8){
conceito= "Ótimo"
}

 else if (media >= 6) {
conceito= "Regular"
 } 
 else {
     conceito= "Burro"
 }

console.log (conceito)

switch (conceito) {

    case "Ótimo": console.log ("Você passou com meritos, média " +media);
break
    case "regular": console.log ("Seu burro vai estudar, nota " + media)
break
    case "Burro": console.log ("Vai estudar seu burro, nota " + media )
break
    default: console.log ("Ocorreu algum erro.")
}


________________________


var nota1= 1
var nota2= 10;

var media = (nota1 + nota2) /2

var conceito=""

if (media >= 8){
conceito= "otimo"
}

 else if (media >= 6) {
conceito= "regular"
 } 
 else {
     conceito= "burro"
 }
console.log (media)
console.log (conceito)

_____________________________________________

var nota1= 1
var nota2= 10;

var media = (nota1 + nota2) /2

if (media >= 7) {
console.log ("Aprovad0 média " + media);}

else {
    console.log ("reprovado seu burro " + media)
}
___________________________________


var nota1= 2
var nota2= 8.9

var media = (nota1 + nota2) /2

if (media >= 7){console.log ("aprovado " + media)}

else {console.log ("reprovado " + media)}




var idade = 13

var pode = idade >=18 ? "pode" : "não pode" 

console.log(pode)
__________________________________


var idade = 18;


if (idade < 18 || idade > 70){ 
console.log ("pode")
console.log ("faça o seu pedido");}


else
{console.log ("não pode")
console.log ("volta futuramente");}

__________________________________________

var idade = 70;


if (idade >= 18 && idade <= 70){ 
console.log ("pode")
console.log ("faça o seu pedido");}



else
{console.log ("não pode")
console.log ("volta futuramente");}


________________________________________


var idade = 13;

if (idade >= 35){ 
console.log ("pode")
console.log ("faça o seu pedido");}

else if (idade >= 18){
console.log ("pode")
console.log ("mostre a identidade")}

else
{console.log ("não pode")
console.log ("volta futuramente");}


__________________________________________
var idade = 18;

if (idade >= 18){ 
console.log ("pode")
console.log ("faça o seu pedido");}

else
{console.log ("não pode")
console.log ("volta futuramente");}



_________________________________________
var numero = parseInt(prompt("digite um numero"))

var dobro = numero + numero ;

alert ("O dobro do numero que voce digitou é " + dobro) 



________________________________________________________
var nome = prompt ("qual seu nome?");

alert ("Ola,seja bem vindo " + nome);
______________________________________

alert ("Bom dia")
__________________________________

var idade = 10;

var menos10 = idade  <= 10;

var maior65 = idade >= 65;

var gratuidade = menos10 || maior65;

console.log ("idade " + idade)

console.log ( "menor que 10 "+ gratuidade)

console.log ( "maior que 65 "+ gratuidade)

console.log ("tem direito a gratuidade " + gratuidade)

_____________________________

var a = "4.5"
var b = "9"

var c = parseFloat (a) +  parseInt  (b)

console.log (c)

*/






