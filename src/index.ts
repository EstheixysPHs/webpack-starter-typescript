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
    
//Destructivo
//usuariosRef
//    .doc('5cFN5xFBXArZ5TeuQlZP')
//    .set({ 
//        activo: true,
//        edad: 44,
//        
//    });

// delete from usuatios where id ='xx'
//usuariosRef
//       .doc('ouCtT4r6y8aE6N3GCLtc')
//       .delete()
//       .then(()=> console.log ('Borrado') )
//       .catch(e => console.log('error', e));

//select * from usuarios;
//usuariosRef
//      .onSnapshot(snap =>{
//
//            const usuarios: any[] =[];
//
//        snap.forEach(snaphijo =>{
//            usuarios.push({
//                id: snaphijo.id,
//                ...snaphijo.data()
//            })
//            
//        });
//
//        console.log(usuarios)
//      })