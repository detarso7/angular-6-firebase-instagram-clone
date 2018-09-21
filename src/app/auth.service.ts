import { Usuario } from "./acesso/usuario.model";
import * as fb from "firebase"

export class Auth{

    public token_id: string

    public cadastroDeUsuario(usuario:Usuario):Promise<any>{

       return fb.auth().createUserWithEmailAndPassword(usuario.email, usuario.senha)
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
        .then((resposta: any) =>{
            fb.auth().currentUser.getIdToken()
            .then((inToken)=>{
                this.token_id = inToken
            })
        })
        .catch((err:any)=> console.log(err))
    }
}