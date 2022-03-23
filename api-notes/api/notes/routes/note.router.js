import express  from "express";

const routerNote = express.Router();

//
routerNote.get("/",(req,res)=>{
    res.json({message:"Retorna todas las notas"})
})
routerNote.get("/:id",(req,res)=>{
    res.json({message:"retornar una nota"})
})
routerNote.post("/",(req,res)=>{
    res.json({message:"ingresando nota"})
})
routerNote.put("/:id",(req,res)=>{
    res.json({message:"retornar una nota"})
})
routerNote.delete("/:id",(req,res)=>{
    res.json({message:"eliminando Nota"})
})

export default routerNote;