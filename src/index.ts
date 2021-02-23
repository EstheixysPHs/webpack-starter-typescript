import db from './firebase/config';
import { retornaDocumentos } from './helpers/mostrar-documentos';

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
//            retornaDocumentos( snap );
//
//      })

//usuariosRef.get().then( retornaDocumentos );

/*
    select * from ususarios
        where activo = true
*/
//usuariosRef.where('activo','==', true).get().then( retornaDocumentos );

/*
    select * from ususarios
        where salario > 1800
*/
//usuariosRef.where('salario','>', 1800)
//    .get().then( retornaDocumentos );

    /*
    select * from ususarios
        where salario > 1800 and salario < 2300 
        where salario between 1800 and salario < 2300 
*/
//usuariosRef.where('salario','>=', 1800)
//           .where('salario','<=', 2300 )
//    .get().then( retornaDocumentos );
  
    /*
    select * from ususarios
        where salario > 1800 
            And activo == true
*/
usuariosRef.where('salario','>=', 1800)
           .where('activo','==', true)
                .get().then( retornaDocumentos );