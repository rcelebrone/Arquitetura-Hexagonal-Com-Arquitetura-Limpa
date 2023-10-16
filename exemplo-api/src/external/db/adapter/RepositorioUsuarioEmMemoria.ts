import IUsuario from "../../../core/usuario/IUsuario";

export default class RepositorioUsuarioEmMemoria {
    private static readonly items: IUsuario[] = [];

    async inserir(usuario: IUsuario) {
        const items = RepositorioUsuarioEmMemoria.items;
        const usuarioExistente = await this.buscarPorEmail(usuario.email);

        if (usuarioExistente) return;

        items.push(usuario);
    }

    async buscarPorEmail(email: string): Promise<IUsuario | null> {
        return (
            RepositorioUsuarioEmMemoria.items.find((u) => u.email === email) ??
            null
        );
    }
}
