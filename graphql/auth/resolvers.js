

const resolverAutenticacion = {
    Mutation:{
        registro: async (parent, args) => {
            console.log('crear usuario', args);
            return 'Usuario Creado'
        },
    },
}

export {resolverAutenticacion}