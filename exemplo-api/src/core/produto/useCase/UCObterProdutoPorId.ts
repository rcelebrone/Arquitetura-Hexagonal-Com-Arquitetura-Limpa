import ICasoDeUso from "@/core/shared/ICasoDeUso";
import IProduto from "../IProduto";
import IUsuario from "@/core/usuario/IUsuario";

export type Entrada = {
    produtoId: string,
    usuario: IUsuario
}

export type Saida = {
    produto: IProduto,
    consultadoPor: string
}

export default class UCObterProdutoPorId
    implements ICasoDeUso<Entrada, Saida>
{
    async executar(entrada: Entrada): Promise<Saida> {
        return {
            produto: {
                id: entrada.produtoId,
                nome: 'Produto 1',
                preco: 10.00,
            },
            consultadoPor: entrada.usuario.email
        };
    }
}
