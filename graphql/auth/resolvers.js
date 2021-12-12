import { UserModel } from '../../models/usuario/usuario.js';
import bcrypt from 'bcrypt';
import { generateToquen } from '../../utils/tokenUtils.js';

const resolverAutenticacion = {
    Mutation:{
        registro: async (parent, args) => {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(args.password, salt);

            const usuarioCreado = await UserModel.create({
                nombre: args.nombre,
                apellido: args.apellido,
                identificacion: args.identificacion,
                correo: args.correo,
                rol: args.rol,
                password: hashedPassword,
            });
            console.log('usuario creado', usuarioCreado);
            return {
                token: generateToquen({
                    _id: usuarioCreado._id,
                    nombre: usuarioCreado.nombre,
                    apellido: usuarioCreado.apellido,
                    identificacion: usuarioCreado.identificacion,
                    correo: usuarioCreado.correo,
                    rol: usuarioCreado.rol,
                }),
            }
        },

        login: async (parent, args) => {
              const usuarioEcontrado = await UserModel.findOne({ correo: args.correo });
                if (await bcrypt.compare(args.password, usuarioEcontrado.password)) {
                  return {
                    token: generateToquen({
                      _id: usuarioEcontrado._id,
                      nombre: usuarioEcontrado.nombre,
                      apellido: usuarioEcontrado.apellido,
                      identificacion: usuarioEcontrado.identificacion,
                      correo: usuarioEcontrado.correo,
                      rol: usuarioEcontrado.rol,
                    }),
                  };
                }
        },

        validateToken: async (parent, args, context) => {
          console.log('contexto', context);

        }
    },
};

export {resolverAutenticacion}