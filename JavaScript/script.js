// // alert("Hello, World! This is a test alert.");

// var firstName = "Pedro";
// var firstName = "Pablo";
// // var é possivel redefinir o valor

// let lastName = "Pérez";
// // let lastName = "Pablo"; no vscode nao permite seguir, mas tbm seria possivel ver na console
// // let não é possivel redefinir o valor

// lastName = "Pérez";
// // deste modo é possivel reatribuir um valor
// // a diferença entre reatribuir e redefinir é que redefinir é quando se declara uma nova variável com o mesmo nome, enquanto reatribuir é quando se muda o valor de uma variável já declarada

// const PI = 3.14;
// // const PI = 3.1415; não é possivel reatribuir e nem redefinir o valor

// // ---------------------------------------

var firstName = "Pedro";
console.log("Valor inicial de firstName:", firstName);

var firstName = "Pablo";
console.log("Valor redefinido de firstName:", firstName);

let lastName = "Pérez";
console.log("Valor inicial de lastName:", lastName);

lastName = "Pérez";
console.log("Valor reatribuído de lastName:", lastName);

console.log(`${firstName} ${lastName}`); //este codigo chama template de string permite concatenar

const PI = 3.14;
console.log("Valor de PI:", PI);

let namePrompt = prompt("Digite o seu nome"); //cria uma variavel pra guardar o texto que for digitado no Prompt
alert(`Olá ${namePrompt}`); //apresenta o alert juntamente do nome que foi adicionado no prompt
