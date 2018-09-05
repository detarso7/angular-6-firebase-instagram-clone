import { Usuario } from "./acesso/usuario.model";
import * as fb from "firebase"

export class Auth{
    public cadastroDeUsuario(usuario:Usuario):void{

        fb.auth().createUserWithEmailAndPassword(usuario.email, usuario.senha)
        .then((resposta:any) => {
            console.log(resposta)
        })
        .catch((err:any)=>{
            console.log(err)
        })
    }
}