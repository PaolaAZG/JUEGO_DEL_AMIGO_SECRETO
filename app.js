// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let Amigos = [];// declaración del arreglo de amigos
let AmigosSorteados = [];

function agregarAmigo() {// funcion agregar amigo
    let nombreAmigo = document.getElementById('amigo').value; // obtener el valor del input

    if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombreAmigo) || nombreAmigo === '') {// verificar si el nombre es válido (solo letras y espacios)
        alert('Por favor, inserte un nombre válido.');
        document.getElementById('amigo').value = ''; // Limpia el campo
        document.getElementById('amigo').focus();    // Pone el cursor de nuevo
        return;
    }
    // Verificar si el nombre ya existe (sin distinguir mayúsculas/minúsculas)
    if (Amigos.some(nombre => nombre.toLowerCase() === nombreAmigo.toLowerCase())) {// verificar si el nombre ya existe en el arreglo
        alert(`El nombre "${nombreAmigo}" ya fue introducido. \n\nPor favor Digitar otro nombre.`);// mensaje de alerta si el nombre ya existe
        document.getElementById('amigo').value = ''; // Limpia el campo
        document.getElementById('amigo').focus();    // Pone el cursor de nuevo
        return;
    }
    Amigos.push(nombreAmigo);// agregar el nombre al arreglo con el metodo push
    mostrarLista();// mostrar la lista actualizada de los datos 
    document.getElementById('amigo').value = '';// limpiar el campo de entrada
}

function mostrarLista() {
    const lista = document.getElementById('listaAmigos');// lista de amigos
    lista.innerHTML = ''; // limpiar antes de agregar
    for (let i = 0; i < Amigos.length; i++) {// recorrer la lista de amigos con un bucle for 
        let numero = i + 1; // número de amigo
        lista.innerHTML += `<li>${numero}.${Amigos[i]}</li >`; // agregar cada amigo a la lista
    }
}
function sortearAmigo() {//  funcion de sortear amigos 
    let campo = document.getElementById('amigo');

    if (Amigos.length < 2) {//  minimo debe  a ver dos nombres insertados
        alert('Debes agregar al menos 2 amigos para sortear.');// mensaje si hay <2 
        document.getElementById('amigo').value = ''; // Limpia el campo
        document.getElementById('amigo').focus();    // Pone el cursor de nuevo
        return;
    }
//filtrar los que no han salido aún
    let disponibles = Amigos.filter(a => !AmigosSorteados.includes(a));

    if(disponibles.length === 0) {
        alert('Todos los amigos ya fueron sorteados. \n\nPor favor reiniciar el juego.');
        document.getElementById('amigo').value = ''; // Limpia el campo
        return;
    }

//Sortear amigos de los disponibles
    let indice = Math.floor(Math.random() * disponibles.length);//Generar indice aleatorio 
    let ganador = disponibles[indice];// seleccionar un ganador aleatorio del arreglo de amigos
    
//guardar amigo sorteado
    AmigosSorteados.push(ganador);
    
    document.getElementById('resultado').innerHTML = `<li> El amigo secreto que ha sido sorteado es: <strong><br>${ganador}<br></strong></li>`;// mesaje del sorteo 
    
}

function reiniciarJuego() {// funcion de reinicio de juego
    Amigos = []; // vacía el arreglo
    AmigosSorteados = [];
    document.getElementById('listaAmigos').innerHTML = ''; // limpia la lista visual
    document.getElementById('resultado').innerHTML = '';   // limpia el resultado
    document.getElementById('amigo').value = '';           // limpia el campo de entrada
    document.getElementById('amigo').focus();    // Pone el cursor de nuevo

}

