/*Faça um programa usando switch que leia dois valores do usuário e a
operação que ele deseja executar (Operações: soma, subtração, divisão,
multiplicação). Execute a operação desejada e imprima na tela.*/
/*
var valor1 = (prompt('digite um valor'))
var valor2 = (prompt('digite um valor'))
opera = Number(prompt('qual tipo de Opereção você deseja'))

switch (opera) {
    case 1:
        soma = + (valor1 + valor2)
        document.write(`a soma é ${soma}`)
        break;
    case 2:
        soma = + (valor1 - valor2)
        document.write(`a soma é ${soma}`)
        break;
    case 3:
        soma = + (valor1 / valor2)
        document.write(`a soma é ${soma}`)
        break;
    case 4:
        soma = + (valor1 * valor2)
        document.write(`a soma é ${soma}`)
        break;
    default:
        document.write('Erro')
        break;
}
*/
/* Uma loja fornece 10% de desconto para funcionários e 5% de desconto para
clientes vips. Faça um programa usando switch que calcule o valor total a
ser pago por uma pessoa. O programa deverá ler o valor total da compra
efetuada e um código que identifique se o comprador é um cliente comum (1),
funcionário (2) ou vip (3).*/
/*
var valor =parseFloat(prompt('Qual foi o valor da compro'))
var pessoa =parseInt(prompt('quem é você'))
switch (pessoa) {
    case 1:
        document.write(`valor a pagar ${valor}`)
        break;
    case 2:
        valor = valor * 0.80
        document.write(`valor a pagar ${valor}`)
        break;
    case 3:
        valor = valor * 0.95
        document.write(`valor a pagar ${valor}`)
        break;
    default:
        document.write('erro')
        break;
}
*/
/*Dado o valor do produto e a forma de pagamento.
1= à vista;
2= à prazo.
Se o produto for pago à vista aplique um desconto de 10% antes de mostrar o
valor final, senão informe o mesmo valor do produto.(usando switch)*/
/* 
valor = parseFloat(prompt('valor a pagar'))
formaDEpagamento = parseInt(prompt('forma de pagamento?'))

switch (formaDEpagamento) {
    case 1:
        valor = valor * 0.90
        document.write(`valor a pagar ${valor}`)
        break;
        case 2:
            document.write(`valor a pagar ${valor}`)
            break;
            
            default:
                document.write(`Erro`)
                break;
            }
*/
/*4. Crie um
programa usando switch que leia o conceito de um aluno na disciplina Desenv
Web 2 e imprima seu significado, de acordo com a tabela abaixo. Caso seja
informado um conceito inexistente, deve ser exibida uma mensagem de erro.
Conceito Significado
A Excelente
B Ótimo
C Bom
D Regular
E Ruim
F Nos vemos de novo ano que vem...*/
/*
var conceito = (prompt('digite a sua nota'))
conceito = conceito.toUpperCase()

if (conceito == 'A') {
    document.write('Excelente')
}
else if(conceito == 'B'){
    document.write('Ótimo')
}
else if(conceito == 'C'){
    document.write('Bom')
}
else if(conceito == 'D'){
    document.write('Regular')
}
else if(conceito == 'E'){
    document.write('Ruim')
}
else if(conceito == 'F'){
    document.write('Nos vemos de novo ano que vem...')
}
else{
    document.write("nota inválida")
}
*/
/*
Dada uma letra, usando switch ,escreva na tela se essa letra é uma vogal ou
consoante (considerar apenas letras minúsculas).
*/
/*
var L = (prompt('Digite uma letra'))
switch (L) {
    case 'a':
        document.write('Vogal')
        break;
    case 'e':
        document.write('Vogal')
        break;
    case 'i':
        document.write('Vogal')
        break;
    case 'o':
        document.write('Vogal')
        break;
    case 'u':
        document.write('Vogal')
        break;

    default:
        document.write('cansoante')
        break;
}
*/
/*Crie um programa usando o for que leia uma lista. Mostre no console apenas
os números pares. Esta lista deve ser assim: [1, 2, 3, 4, 5, 6, 7, 8, 9]; 
*/
/*
var num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for(var i = 0; i < num.length; i++){
    if ((num[i] %2) === 0) {
        console.log(`${num[i]}`)
    }
}
*/


/*
7. Faça um
programa usando o for que peça uma nota, entre zero e dez. Mostre uma
mensagem caso o valor seja inválido e continue pedindo até que o usuário
informe um valor válido. */

/*
for (var i = 0; i < 1; i++) {
    var nota = (prompt('digite uma nota'))
    if (nota <= 10) {
        document.write(`valor digitado válido: ${nota}`)
        break
    }
    else {
        alert("valor inválido")
        document.write(`valor digitado inválido: ${nota}<br>`)
        i--
    }
}
*/

/*8. Faça um programa usando o for que leia um nome de usuário e a sua senha
e não aceite a senha igual ao nome do usuário, mostrando uma mensagem
de erro e voltando a pedir as informações.*/
/*
for (var i = 0; i < 1; i++) {
    var senha = (prompt('digite a senha'))
    var nome = (prompt('digite o nome'))
    if (senha === nome) {
        alert("Erro, tente novamente")
        i--
    }
    else {
        document.write(`Casdastro efetuado com sucesso`)
    }
}
*/

/*Faça um programa usando o for que, dado um conjunto de N números,
determine o menor valor, o maior valor e a soma dos valores. */
/*
var conjunto =[];
var soma = 0
var maior = 0 , menor = 0
for(var i = 1; i <= 5; i++){
    conjunto[i] = parseFloat(prompt('digite os valores'))
    if(conjunto[i] > maior){
        maior = conjunto[i]
    }
    
    if (conjunto[i] < menor || menor === 0) {
        menor = conjunto[i]
    }
    soma += conjunto[i]
}
document.write(`maior ${maior}, menor ${menor}, soma ${soma} `)
*/
/*10.Faça um programa usando o for que calcule o número médio de alunos por
turma. Para isto, peça a quantidade de turmas e a quantidade de alunos para
cada turma. As turmas não podem ter mais de 40 alunos. */


var totalTurmas = parseInt(prompt("Digite a quantidade de turmas:"));
var totalAlunos = 0;
for (var i = 1; i <= totalTurmas; i++) {
    var alunosTurma = parseInt(prompt(`Digite a quantidade de alunos para a turma ${i}:`));
    if (alunosTurma > 40) {
        alert("maximo de 40 alunos por turma");
        continue; 
    }
    totalAlunos += alunosTurma;
}
var mediaAlunosPorTurma = totalAlunos / totalTurmas;
document.write(`A média de alunos por turma é: ${mediaAlunosPorTurma}`);
