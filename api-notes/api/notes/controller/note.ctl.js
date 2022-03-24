import {Note,NoteModel} from "../models/note.models.js";


const noteModel = new NoteModel();

export class NoteContreller{
  constructor(){}

  //metodo para responder la ruta obtener todas las notas
  getAllNotes(req,res){
    let allNotes = noteModel.all();
    res.json(allNotes)
  }

   // crear nueva nota 
  async createNewNote(req,res){
    let {title,content,status} = req.body;
    const newNote = new Note(title,content,status);
    let result =  await noteModel.save(newNote);
    if(result > 0){
        return res.json({message:"Created one note"});
    }
    return res.json({message:"Error"})
  }
  
  //metodo para obtener una nota por id
  async getOneNote(req,res){
    const notaId = await noteModel.findById(req.params.id);
    res.json(notaId)
  }

  //metodo para eliminar una nota
  async deleteNote (req,res){
    await noteModel.findByIdDelete(req.params.id);
    res.json({status:"nota Eliminada"})
  }

  //metodo para actualiza una nota
  async putNote(req,res){
    await noteModel.findByIdAndUpdate(req.params.id, req.body);
  }
}