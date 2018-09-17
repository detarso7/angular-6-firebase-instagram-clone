import { Usuario } from "./acesso/usuario.model";
import * as fb from "firebase"

export class Auth{
    public cadastroDeUsuario(usuario:Usuario):void{

        fb.auth().createUserWithEmailAndPassword(usuario.email, usuario.senha)
        .then((resposta:any) => {

            //Deletar a senha antes de enviar para o banco de dados
            delete usuario.senha

            //Enviando dados cmplementares do usuário no path email na base64
            fb.database().ref(`usuario_detalhe/${btoa(usuario.email)}`)
            .set(usuario)
        })
        .catch((err:any)=>{
            console.log(err)
        })
    }

    public autenticar(email:string, senha:string):void{
        fb.auth().signInWithEmailAndPassword(email, senha)
        .then((resposta: any) => console.log(resposta))
        .catch((err:any)=> console.log(err))
    }
}