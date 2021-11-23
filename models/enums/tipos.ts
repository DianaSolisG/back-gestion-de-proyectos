import { gql } from "apollo-server-core";

const tiposEnums = gql `


enum Enum_EstadoUsuario{
    PENDIENTE
    AUTORIZADO
    NO_AUTORIZADO
}

enum Enum_Rol{
    ESTUDIANTE
    LIDER
    ADMINISTRADOR
}

enum Enum_EstadoProyecto{
    ACTIVO
    INACTIVO
}

enum Enum_FaseProyecto{
    INICIADO
    DESARROLLADO
    TERMINADO
    NULO
}

enum Enum_TipoObjetivo{
    GENERAL
    ESPECIFICO
}

}

`;

export {tiposEnums};