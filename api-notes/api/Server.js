import express from "express";

import router from "./notes/routes/note.route.js";

export class Server{
  constructor(hostName,port,nameApp){
    this._hostname = hostName;
    this._port = port;
    this._name = nameApp;
    this._api = express();
    this.initMiddlawares();
    this.initRoutes();
  }


  initMiddlawares(){
    this._api.use(express.json());
    this._api.use(express.urlencoded({extended:true}));
  }

  
  initRoutes(){
      this._api.use("/api/v1/note",router);

      this._api.use("/api/v1/home",(req,res)=>{
        res.json({message:"Welcome to my api"})
      })
  }

  initServer(){
      try {
          this._api.set('trust proxy',this._hostname);
          this._api.listen(this._port,()=>{
              console.log(`Server of ${this._name} running at http://${this._hostname}:${this._port}`)
          })   
      } catch (error) {
        console.log(`Error al iniciar el servidor detalle:${error}`)   
      }
  }

}