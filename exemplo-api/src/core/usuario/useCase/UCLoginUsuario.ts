import ICasoDeUso from "@/core/shared/ICasoDeUso";
import Erros from "@/core/shared/Erros";
import IProvedorCriptografia from "./port/IProvedorCriptografia";
import IRepositorioUsuario from "./port/IRepositorioUsuario";
import IUsuario from "../IUsuario";

export type UsuarioEntrada = {
    email: string;
    senha?: string;
};

export default class UCLoginUsuario
    implements ICasoDeUso<UsuarioEntrada, IUsuario>
{
    constructor(
        private repositorioUsuario: IRepositorioUsuario,
        private provedorCripto: IProvedorCriptografia
    ) {}

    async executar(entrada: UsuarioEntrada): Promise<IUsuario> {
        const usuarioExistente = await this.repositorioUsuario.buscarPorEmail(
            entrada.email
        );
        if (!usuarioExistente) throw new Error(Erros.USUARIO_NAO_EXISTE);

        const mesmaSenha = this.provedorCripto.comparar(entrada.senha!, usuarioExistente.senha!);

        if (!mesmaSenha) throw new Error(Erros.SENHA_INVALIDA);

        return {...usuarioExistente, senha: undefined};
    }
}
