import bcrypt from 'bcrypt'
import IProvedorCriptografia from "../../core/usuario/service/port/IProvedorCriptografia";

// Adapter
// O adapter NÃO faz parte do CORE
export default class SenhaCripto implements IProvedorCriptografia{
    criptografar(senha: string): string {
        const salt = bcrypt.genSaltSync(10);
        return bcrypt.hashSync(senha, salt);
    }
}