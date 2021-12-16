
import { ProjectModel } from "./proyecto.js"


const resolverProyecto = {
    Query:{
        Proyectos: async (parent, args, context) => {
            if(context.userData.rol === 'ADMINISTRADOR'){
                const proyectos = await ProjectModel.find()
                .populate({
                    path:'avance',
                    populate:({
                        path:'creado por',
                    })
                }).populate('lider');
                return proyectos;
            } else {
            const proyectos = await ProjectModel.find();
            return proyectos;
        }

    },
},

    Mutation: {
        crearProyecto: async (parent, args) => {
            const proyectoCreado = await ProjectModel.create({
                nombre:args.nombre,
                estado:args.estado,
                fase:args.fase,
                fechaInicio:args.fechaInicio,
                fechaFin:args.fechaFin,
                presupuesto:args.presupuesto,
                lider:args.lider,
                objetivos:args.objetivos,
            })
            return proyectoCreado;
        }
    },
    
}


export {resolverProyecto};