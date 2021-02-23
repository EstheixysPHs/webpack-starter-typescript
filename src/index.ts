import db from './firebase/config';

const usuario = {
    nombre: 'Treisys',
    activo: true,
    fechaNaci: 0
}

const usuariosRef = db.collection('usuarios');

// insert into usuarios ...
//db.collection('usuarios')
//    .add(usuario)
//    .then( docRef => {
//        console.log(docRef)
//    })
//    .catch(e => console.log('error', e))

//update usuarios set activo = false where ....
//usuariosRef
//    .doc('5cFN5xFBXArZ5TeuQlZP')
//    .update({ 
//        activo: true
//    });
    
usuariosRef
    .doc('5cFN5xFBXArZ5TeuQlZP')
    .set({ 
        activo: true,
        edad: 44,
        casado: true,
        id: 123

    });