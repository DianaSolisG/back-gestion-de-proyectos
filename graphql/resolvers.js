import { resolverProyecto } from "../models/proyecto/resolvers.js";
import { resolverUsuario } from "../models/usuario/resolvers.js";
import { resolverAvance } from "../models/avance/resolvers.js";
import { resolverInscripciones } from "../models/inscripcion/resolver.js";
import { resolverAutenticacion } from "./auth/resolvers.js";

export const resolvers = [ resolverUsuario, resolverProyecto, resolverAvance, resolverInscripciones, resolverAutenticacion]