import mongoose from "mongoose";
//import {ProjectModel} from './proyecto/proyecto.js'
const { Schema, model } = mongoose;

const objectiveSchema = new Schema(
{
    descripcion:{
        type: String,
        required: true,
    },
    tipo: {
        type: String,
        enum:["GENERAL", "ESPECIFICO"],
        required: true,
    },

});

const ObjectiveModel = model('Objetivo', objectiveSchema);

export {ObjectiveModel};