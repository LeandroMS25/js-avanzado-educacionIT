//Elementos html obtenidos
var tBody = document.querySelector("#tbodyId");
var inputNombre = document.querySelector("#nombre");
var inputApellido = document.querySelector("#apellido");
var inputEdad = document.querySelector("#edad");
var formulario = document.querySelector("#formulario");

// Variables declaradas
var objeto = {
    nombre: "Pablo",
    apellido: "Rozek",
    edad: 30,
    saludo: () => {
        alert("Hola");
    },
    cursos: ["js principiante","js desde cero", "Mongo y node"]
}

var objeto2 = {
    nombre: "Leandro",
    apellido: "Sobrino",
    edad: 26,
    saludo: () => {
        alert("Buenas");
    },
    cursos: ["js avanzado","java web", "mysql"]
}

var objeto3;

// Funciones
function crearFila(nombre, apellido, edad){
    let tr = document.createElement("tr");
    insertaInfo(1,tr);
    insertaInfo(nombre,tr);
    insertaInfo(apellido,tr);
    insertaInfo(edad,tr);
    return tr;
}

function insertaInfo(info,tr){
    let td = document.createElement("td");
    td.innerText = info;
    tr.appendChild(td);
}

function generarUsuario(nombre, apellido, edad){
    return {
        nombre: nombre,
        apellido: apellido,
        edad: edad,
        saludo: () => {
            alert(`Hola, soy ${this.nombre}`);
        },
        cursos: ["js avanzado","java web", "mysql"]
    }
}

// Logica
tBody.appendChild(crearFila(objeto.nombre,objeto.apellido,objeto.edad));
tBody.appendChild(crearFila(objeto2.nombre,objeto2.apellido,objeto2.edad));
var objeto3 = generarUsuario(inputNombre.value,inputApellido.value,inputEdad.value);


formulario.addEventListener("submit", function(e){
    e.preventDefault();
    objeto3 = generarUsuario(inputNombre.value,inputApellido.value,inputEdad.value);
    console.log(objeto3);
});