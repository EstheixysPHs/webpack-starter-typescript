## Referencia al documento
const usuariosRef = db.collection('usuarios')

## Objetos
const usuario = {
    nombre: 'Yusset',
    activo: true,
    fechaNaci: 0,
    salario: 2567
}

## Insert into usuarios ...
db.collection('usuarios')
    .add(usuario)
    .then( docRef => {
        console.log(docRef)
    })
    .catch(e => console.log('error', e)

## Update usuarios set activo = false where ....
usuariosRef
    .doc('5cFN5xFBXArZ5TeuQlZP')
    .update({ 
        activo: true
    });  

## Destructivo
usuariosRef
    .doc('5cFN5xFBXArZ5TeuQlZP')
    .set({ 
        activo: true,
        edad: 44,
        
    })
## Delete from usuatios where id ='xx'
usuariosRef
       .doc('ouCtT4r6y8aE6N3GCLtc')
       .delete()
       .then(()=> console.log ('Borrado') )
       .catch(e => console.log('error', e))

## select * from usuarios;
usuariosRef
      .onSnapshot(snap =>{

            retornaDocumentos( snap );

      }
usuariosRef.get().then( retornaDocumentos )

##  select * from ususarios      where activo = true

usuariosRef.where('activo','==', true).get().then( retornaDocumentos )
  
## select * from ususarios      where salario > 1800

usuariosRef.where('salario','>', 1800)
    .get().then( retornaDocumentos )  
    
## select * from ususarios      where salario > 1800 and salario < 2300       where salario between 1800 and salario < 2300 

usuariosRef.where('salario','>=', 1800)
           .where('salario','<=', 2300 )
    .get().then( retornaDocumentos ); 
    
      select * from ususarios      where salario > 1800           And activo == true

uariosRef.where('salario','>=', 1800)
           .where('activo','==', true)
                .get().then( retornaDocumentos );