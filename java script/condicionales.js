function viajar(destino) {
    if(destino === 'brasil') {
        console.log('gire a la izquierda');
    }
    else if(destino === 'argentina') {
            console.log('gire a la dercha');
    }
        else {
            console.log('nos perdimos');
        }
};
//viajar('hjh');
//viajar('argentina');

function puedemanejar(edad) {
    if(edad >= 18){
        console.log('true');
    }
    else {
        console.log('false');
    }
}
puedemanejar('18');
