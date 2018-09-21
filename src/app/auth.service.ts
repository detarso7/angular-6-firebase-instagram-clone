import { Usuario } from "./acesso/usuario.model";
import * as fb from "firebase"
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";


@Injectable()
export class Auth{

    public token_id: string

    constructor(private router: Router){}

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
                this.router.navigate(['/home'])
            })
        })
        .catch((err:any)=> console.log(err))
    }

    public autenticado(): boolean{
        return this.token_id !== undefined
    }
}