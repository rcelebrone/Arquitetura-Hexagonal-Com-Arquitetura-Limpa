import IUsuario from "../../core/usuario/model/IUsuario";
import db from "./db";

export default class RepositorioUsuarioEmMemoria {
    async inserir(usuario: IUsuario) {
        await db.query(`
                insert into usuarios
                (id, nome, email, senha)
                values ($1, $2, $3, $4)`, 
            [
                usuario.id,
                usuario.nome,
                usuario.email,
                usuario.senha
            ]
        );
    }

    async buscarPorEmail(email: string): Promise<IUsuario | null> {
        const usuario = await db.oneOrNone(`
                select (id, nome, email, senha) 
                from usuarios 
                where email = $1`, 
            [
                email
            ]
        );
        if(!usuario) return null;
        return usuario;
    }
}
