let op = prompt(
    "Elija la operación a realizar:\n" +
    "1 - Suma\n" +
    "2 - Resta\n" +
    "3 - División\n" +
    "4 - Multiplicación\n"
);

let valor1 = prompt("Ingrese el 1er valor");
let valor2 = prompt("Ingrese el 2do valor");

function opercion(a, b, operacion) {
    let resultado = null;

    switch (operacion) {
        case 1: { /*SUMA*/
            resultado = a + b;
            console.log(`${a} + ${b} = ${resultado}`);
        } break;
        case 2: { /*RESTA*/
            resultado = a - b;
            console.log(`${a} - ${b} = ${resultado}`);
        } break;
        case 3: {/*DIVISION*/
            if (b === 0) {
                console.log("Ingrese un valor diferente a 0 para el 2do numero");
            } else {
                resultado = a / b;
                console.log(`${a} / ${b} = ${resultado}`);
            }
        } break;
        case 4: {/*MULTIPLICACION*/
            resultado = a * b;
            console.log(`${a} * ${b} = ${resultado}`);
        } break;
        default: { /*ENTRADA INVALIDA*/
            console.log("Ingrese un valor valido");
        } break;
    }
}

opercion(Number.parseInt(valor1), Number.parseInt(valor2), Number.parseInt(op));