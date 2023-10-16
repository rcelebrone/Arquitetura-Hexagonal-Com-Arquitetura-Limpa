import { UsuarioEntrada } from "@/core/usuario/useCase/UCLoginUsuario";
import { Express } from "express";
import IProvedorJwt from "../IProvedorJwt";
import ICasoDeUso from "@/core/shared/ICasoDeUso";
import IUsuario from "@/core/usuario/IUsuario";

export default class LoginUsuarioController {
    constructor(
        servidor: Express,
        casoDeUso: ICasoDeUso<UsuarioEntrada, IUsuario>,
        provedorJwt: IProvedorJwt,
        ...midlewares: any[]
    ) {
        servidor.post("/api/usuarios/login", async (req, res) => {
            try {
                const usuario = await casoDeUso.executar({
                    email: req.body.email,
                    senha: req.body.senha,
                });

                const token = provedorJwt.gerar(usuario);
                res.status(200).send({token: token});
            } catch (e: any) {
                res.status(400).send(e.message);
            }
        });
    }
}
