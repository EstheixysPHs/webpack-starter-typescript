## select * from usuario order by nombre asc, salario asc
usuariosRef
    .orderBy('nombre')
    .orderBy('salario')
    .get().then(retornaDocumentos)

## Limitacion
usuariosRef.limit(2)
    .get().then( retornaDocumentos);