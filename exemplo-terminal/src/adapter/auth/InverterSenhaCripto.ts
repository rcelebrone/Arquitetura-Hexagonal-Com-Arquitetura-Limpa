import IProvedorCriptografia from "../../core/usuario/service/port/IProvedorCriptografia";

// Adapter
// O adapter NÃO faz parte do CORE
export default class InverterSenhaCripto implements IProvedorCriptografia{
    criptografar(senha: string): string {
        return senha.split('').reverse().join('');
    }
}