import { resolverProyecto } from "../models/proyecto/resolvers.js";
import { resolverUsuario } from "../models/usuario/resolvers.js";
import { resolverAvance } from "../models/avance/resolvers.js";
import { resolverInscripciones } from "../models/inscripcion/resolver.js";

export const resolvers = [ resolverUsuario, resolverProyecto, resolverAvance, resolverInscripciones]