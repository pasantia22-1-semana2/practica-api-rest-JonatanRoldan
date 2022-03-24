import express from "express";
import { NoteContreller } from "../controller/note.ctl.js";


const noteController = new NoteContreller();

const routerNote = express.Router();


routerNote.get("/",noteController.getAllNotes)
routerNote.get("/:id",noteController.getOneNote)
routerNote.post("/",noteController.createNewNote);
routerNote.put("/:id",noteController.putNote);
routerNote.delete("/:id",noteController.deleteNote);


export default routerNote;