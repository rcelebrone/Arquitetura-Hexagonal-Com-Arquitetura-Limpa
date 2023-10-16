import ICasoDeUso from "@/core/shared/ICasoDeUso";
import IUsuario from "../IUsuario";
import Erros from "@/core/shared/Erros";
import Id from "@/core/shared/Id";
import IProvedorCriptografia from "./port/IProvedorCriptografia";
import IRepositorioUsuario from "./port/IRepositorioUsuario";

export default class UCRegistrarUsuario implements ICasoDeUso<IUsuario, void> {
    constructor(
        private provedorCriptografia: IProvedorCriptografia,
        private repositorioUsuario: IRepositorioUsuario
    ) {}

    async executar(usuario: IUsuario): Promise<void> {
        const usuarioExistente = await this.repositorioUsuario.buscarPorEmail(
            usuario.email
        );
        if (usuarioExistente) throw new Error(Erros.USUARIO_JA_EXISTE);

        const novoUsuario: IUsuario = {
            id: Id.gerarHash(),
            nome: usuario.nome,
            email: usuario.email,
            senha: this.provedorCriptografia.criptografar(usuario.senha!),
        };

        this.repositorioUsuario.inserir(novoUsuario);

        console.log(`\n\n${JSON.stringify(novoUsuario)}`);
    }
}
