import bcrypt from 'bcrypt'
import IProvedorCriptografia from "../../../core/usuario/useCase/port/IProvedorCriptografia";

// Adapter
// O adapter NÃO faz parte do CORE
export default class SenhaCrypto implements IProvedorCriptografia{
    criptografar(senha: string): string {
        const salt = bcrypt.genSaltSync(10);
        return bcrypt.hashSync(senha, salt);
    }

    comparar(senha: string, senhaCriptografada: string): boolean {
        return bcrypt.compareSync(senha, senhaCriptografada);
    }
}