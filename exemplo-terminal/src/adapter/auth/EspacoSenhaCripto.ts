import IProvedorCriptografia from "../../core/usuario/service/port/IProvedorCriptografia";

// Adapter
// O adapter NÃO faz parte do CORE
export default class EspacoSenhaCripto implements IProvedorCriptografia{
    criptografar(senha: string): string {
        return senha.split('').join(' ');
    }
}