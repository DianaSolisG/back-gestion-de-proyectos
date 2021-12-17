import { gql } from "apollo-server-core";

const tiposProyecto = gql `

type Objetivo{
    _id:ID!
    descripcion: String!
    tipo: Enum_TipoObjetivo!
}

input crearObjetivo{
    descripcion: String!
    tipo: Enum_TipoObjetivo!
}

input camposObjetivo{
    descripcion:String!
    tipo: Enum_TipoObjetivo!
}

input camposProyectos{
    nombre: String
    presupuesto: Float
    fechaInicio: Date
    fechaFin: Date
    estado: Enum_EstadoProyecto
    fase: Enum_FaseProyecto
    lider: String
}

type Proyecto{
    _id:ID!
    nombre: String!
    presupuesto: Float!
    fechaInicio: Date!
    fechaFin: Date!
    estado: Enum_EstadoProyecto!
    fase: Enum_FaseProyecto!
    lider: Usuario!
    objetivos: [Objetivo]
    avances: [Avance]
    inscripciones: [Inscripcion]
}

type Query {
    Proyectos:[Proyecto]
}

type Mutation{

    crearProyecto(
        nombre: String!
        presupuesto: Float!
        fechaInicio: Date!
        fechaFin: Date!
        estado: Enum_EstadoProyecto!
        fase: Enum_FaseProyecto!
        lider: String!
        objetivos: [crearObjetivo]
    ):Proyecto

    editarProyecto(
        _id:String!
        campos:camposProyectos!
    ):Proyecto

    crearObjetivo(
        idProyecto:String!,
        campos:camposObjetivo!
    ):Proyecto

    editarObjetivo(
        idProyecto:String!,
        indexObjetivo:Int!,
        campos: camposObjetivo!
    ):Proyecto

    eliminarObjetivo(
        idProyecto:String!,
        idObjetivo:String!
    ):Proyecto

}

`;

export {tiposProyecto};