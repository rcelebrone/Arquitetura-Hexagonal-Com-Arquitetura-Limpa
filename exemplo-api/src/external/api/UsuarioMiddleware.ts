import Erros from '@/core/shared/Erros';
import {Request, Response, NextFunction } from 'express';
import IProvedorJwt from './IProvedorJwt';
import IUsuario from '@/core/usuario/IUsuario';
import IRepositorioUsuario from '@/core/usuario/useCase/port/IRepositorioUsuario';

export default function UsuarioMiddleware(provedorJwt: IProvedorJwt, repositorioUsuario: IRepositorioUsuario) {
    return async (req: Request, res: Response, next: NextFunction) => {
        const acessoNegado = () => res.status(403).send(`${Erros.ACESSO_NEGADO}: Token inválido`);
        
        const token = req.headers.authorization?.replace('Bearer ','');
        if(!token) {
            acessoNegado();
            return;
        }

        const usuarioToken = provedorJwt.extrairDados(token) as IUsuario;
        const usuario = await repositorioUsuario.buscarPorEmail(usuarioToken.email);
        if(!usuario) {
            acessoNegado();
            return;
        }

        (req as any).usuario = usuario;

        next();
    }
}