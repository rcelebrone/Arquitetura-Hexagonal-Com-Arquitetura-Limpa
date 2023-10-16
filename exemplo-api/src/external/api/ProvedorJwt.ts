import jwt from 'jsonwebtoken';
import IProvedorJwt from './IProvedorJwt';

export default class ProvedorJwt implements IProvedorJwt {
    constructor(private segredo: string) {}

    gerar(dados: string | object): string {
        return jwt.sign(dados, this.segredo, {
            expiresIn: '1d'
        });
    }

    extrairDados(token: string): string | object {
        return jwt.verify(token, this.segredo);
    }
}