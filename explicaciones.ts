import conectarBD from './db/db';
import { UserModel } from './models/user';
import { Enum_EstadoUsuario, Enum_Rol, Enum_TipoObjetivo } from './models/enums';
import { ProjectModel } from './models/project';
import { ObjectId } from 'mongoose';
import { ObjectiveModel } from './models/objective';


// METODOLOGÍA ONE TO MANY #1
const crearProyectoConObjetivos1 = async () => {
  const usuarioInicial = await UserModel.create({
    nombre: 'Diana',
    apellido: 'Solis',
    correo: 'dcs@bbb.com',
    identificacion: '1236454',
    rol: Enum_Rol.administrador,
    estado: Enum_EstadoUsuario.autorizado,
  });

  const proyectoCreado = await ProjectModel.create({
    nombre: 'Proyecto Mision TIC',
    fechaInicio: new Date('2021/12/24'),
    fechaFin: new Date('2022/12/24'),
    presupuesto: 120000,
    lider: usuarioInicial._id,
  });

  const objetivoGeneral = await ObjectiveModel.create({
    descripcion: 'este es el objetivo general',
    tipo: Enum_TipoObjetivo.general,
    proyecto: proyectoCreado._id,
  });

  const objetivoEspecifico1 = await ObjectiveModel.create({
    descripcion: 'este es el objetivo especifico 1',
    tipo: Enum_TipoObjetivo.especifico,
    proyecto: proyectoCreado._id,
  });

  const objetivoEspecifico2 = await ObjectiveModel.create({
    descripcion: 'este es el objetivo especifico 2',
    tipo: Enum_TipoObjetivo.especifico,
    proyecto: proyectoCreado._id,
  });

};

const consultaProyectoConObjetivos1 = async () => {
  const proyecto = await ProjectModel.findOne({ _id: '' });

  console.log('el proyecto que encontré fue', proyecto);

  const objetivos = await ObjectiveModel.find({ project: '' });

  console.log('los objetivos del proyecto son: ', objetivos);

  const proyectoConObjetivos = { ...proyecto, objetivos };

  console.log('el proyecto con objetivos es: ', proyectoConObjetivos);
};

// METODOLOGIA ONE TO MANY #2
const crearProyectoConObjetivos2 = async () => {
  const usuarioInicial = await UserModel.create({
    nombre: 'Diana',
    apellido: 'Solis',
    correo: 'dcs@xxx.com',
    identificacion: '1236454246458',
    rol: Enum_Rol.administrador,
    estado: Enum_EstadoUsuario.autorizado,
  });

  const objetivoGeneral = await ObjectiveModel.create({
    descripcion: 'este es el objetivo general',
    tipo: Enum_TipoObjetivo.general,
  });

  const objetivoEspecifico1 = await ObjectiveModel.create({
    descripcion: 'este es el objetivo especifico 1',
    tipo: Enum_TipoObjetivo.especifico,
  });

  const objetivoEspecifico2 = await ObjectiveModel.create({
    descripcion: 'este es el objetivo especifico 2',
    tipo: Enum_TipoObjetivo.especifico,
  });

  const proyectoCreado = await ProjectModel.create({
    nombre: 'Proyecto Mision TIC',
    fechaInicio: new Date('2021/12/24'),
    fechaFin: new Date('2022/12/24'),
    presupuesto: 120000,
    lider: usuarioInicial._id,
    objetivos: [objetivoGeneral._id, objetivoEspecifico1._id, objetivoEspecifico2._id],
  });
};
const consultaProyectoConObjetivos2 = async () => {
  const proyecto = await ProjectModel.find({ id: '' }).populate(
    'objetivos'
  );
};

// METODOLOGIA ONE TO MANY #3

const crearProyectoConObjetivos3 = async () => {
  const usuarioInicial = await UserModel.create({
    nombre: 'Diana',
    apellido: 'Solis',
    correo: 'dcs@ccc.com',
    identificacion: '12364541121',
    rol: Enum_Rol.administrador,
    estado: Enum_EstadoUsuario.autorizado,
  });

  const proyectoCreado = await ProjectModel.create({
    nombre: 'Proyecto Mision TIC',
    fechaInicio: new Date('2021/12/24'),
    fechaFin: new Date('2022/12/24'),
    presupuesto: 120000,
    lider: usuarioInicial._id,
    objetivos: [
      { descripcion: 'Este es el objetivo general', tipo: Enum_TipoObjetivo.general },
      { descripcion: 'Este es el objetivo especifico 1', tipo: Enum_TipoObjetivo.especifico },
      { descripcion: 'Este es el objetivo especifico 2', tipo: Enum_TipoObjetivo.especifico },
    ],
  });
};
const consultaProyectoConObjetivos3 = async () => {
  const proyectoCreado = await ProjectModel.find({ id: '' });
  console.log('proyecto', proyectoCreado);
};

const main = async () => {
  await conectarBD();
};

main();


  //crud usuario
  //crear usuario
   //await UserModel.create({
   //  correo: 'carolinasolisksnaksn.com',
     //apellido: 'Gutierrez',
   //  identificacion: '896421211315131',
    // nombre: 'Carlos',
   //  rol: Enum_Rol.administrador,
  //})
  //.then((u)=>{
    // console.log('usuario creado', u);
  // }).catch(e=>{
   //  console.error('Error creando el usuario', e)
  //});

//  obtener los usuarios

//   await UserModel.find()
//   .then((u) =>{
//    console.log('usuarios', u);
//  })
//  .catch((e)=>{
//    console.error('error obteniendo los usuarios', e)
//  });

// obtener un solo usuario
 //  await UserModel.findOne({identificacion: "106146545"})
 //  .then(u =>{
 //    console.log('usuario encontrado', u);
 //  })
 //  .catch((e)=> {
 //    console.error(e);
 //  });

//editar un usuario

//  await UserModel.findOneAndUpdate(
//    { correo: 'carolina@is.com'},
//    {
//      nombre: 'juan',
//      apellido: 'Lopez'
//    }
//    )
//    .then((u)=>{
//      console.log('usuarios actualizado', u);
//    })
//    .catch((e)=>{
//      console.log('Error actualizado usuario', e)
//    })
 
//   eliminar ususario 
//   await UserModel.findOneAndDelete({ correo: 'carolina@is.com'}).then((u)=> {
//     console.log('usuario eliminado', u);
//   }).catch((e)=>{
//     console.error(e);
//   });

