import IUsuario from "../../model/IUsuario";

// Port
// A porta faz parte do core da aplicação
export default interface IRepositorioUsuario {
    buscarPorEmail(email: string): Promise<IUsuario | null>;
    inserir(usuario: IUsuario): void;
}