import ICasoDeUso from '@/core/shared/ICasoDeUso';
import IUsuario from '@/core/usuario/IUsuario';
import { Express } from 'express';

export default class RegistrarUsuarioController {
    constructor(
        servidor: Express,
        casoDeUso: ICasoDeUso<IUsuario, void>
    ) {
        servidor.post('/api/usuarios/registrar', async (req, res) => {
            try {
                await casoDeUso.executar({
                    nome: req.body.nome,
                    email: req.body.email,
                    senha: req.body.senha
                });
                res.status(201).send();
            } catch (e: any) {
                res.status(400).send(e.message);
            }
        });
    }
}