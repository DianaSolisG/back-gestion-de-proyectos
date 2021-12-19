import { ModeloAvance } from "./avance.js";
import { ProjectModel } from "../proyecto/proyecto.js";


const resolverAvance = {
    Query:{
        Avances: async (parent, args)=> {
            let filter = {};
            if (args.project) {
              filter = { ...args };
            }
            const avances = await ModeloAvance.find(filter).populate('proyecto').populate('creadoPor');
            return avances;
        },
        filtrarAvance: async (parent, args)=>{
            const avanceFiltrado = await ModeloAvance.findOne({proyecto:args.idProyecto})
            .populate('proyecto')
            .populate('creadoPor');
            return avanceFiltrado;
        }
    },
    Mutation: {
        crearAvance: async (parents, args) => {
            const avanceCreado = await ModeloAvance.create({
                fecha: args.fecha,
                descripcion: args.descripcion,
                proyecto: args.proyecto,
                creadoPor: args.creadoPor,
          });

          const avances = await ModeloAvance.find({ proyecto: avanceCreado.proyecto });

            if (avances.length === 1) {
                const proyectoModificado = await ProjectModel.findOneAndUpdate(
                    { _id: avanceCreado.proyecto },
                        {
                            fase: 'DESARROLLO',
                        }
                );
                console.log('proy modificado', proyectoModificado);
            }
            return avanceCreado;
        },
    }
}

export { resolverAvance };