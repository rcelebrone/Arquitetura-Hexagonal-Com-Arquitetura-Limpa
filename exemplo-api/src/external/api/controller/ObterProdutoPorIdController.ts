import { Express } from "express";
import ICasoDeUso from "@/core/shared/ICasoDeUso";
import { Entrada, Saida } from "@/core/produto/useCase/UCObterProdutoPorId";

export default class UCObterProdutoPorIdController {
    constructor(
        servidor: Express,
        casoDeUso: ICasoDeUso<Entrada, Saida>,
        ...midlewares: any[]
    ) {
        servidor.get("/api/produtos/:id", ...midlewares, async (req, res) => {
            try {
                const produto = await casoDeUso.executar({
                    produtoId: (req.params as any).id,
                    usuario: (req as any).usuario,
                });
console.log(produto);
                res.status(200).send(produto);
            } catch (e: any) {
                res.status(400).send(e.message);
            }
        });
    }
}
