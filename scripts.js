;;let container = document.getElementById("container");


/* let macas = 2;
let banana = 3;
let soma = macas + banana;
 */


// let texto = "meu nome é "
// let nome = "Marcelo Fong"

// let soma = texto + nome;

// container.innerHTML = soma;


// const dataNascimento = "07/09/90"
// let nome = "Gleidson Teixeira";

// container.innerHTML = dataNascimento;
// dataNascimento = "Gleidson Rocha"

function somar()
{
    let v1 = Number(valor1.value);
    let v2 = Number(valor2.value);
    document.getElementById("resultado").innerHTML = v1 + v2;

}

function subtrair()
{
    let v1 = Number(valor1.value);
    let v2 = Number(valor2.value);
    document.getElementById("resultado").innerHTML = v1 - v2;

}

function multiplicar()
{
    let v1 = Number(valor1.value);
    let v2 = Number(valor2.value);
    document.getElementById("resultado").innerHTML = v1 * v2;

}

function dividir()
{
    let v1 = Number(valor1.value);
    let v2 = Number(valor2.value);
    document.getElementById("resultado").innerHTML = v1 / v2;

}