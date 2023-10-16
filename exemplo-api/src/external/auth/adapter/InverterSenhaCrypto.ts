import IProvedorCriptografia from "../../../core/usuario/useCase/port/IProvedorCriptografia";

// Adapter
// O adapter NÃO faz parte do CORE
export default class InverterSenhaCripto implements IProvedorCriptografia{
    comparar(senha: string, senhaCriptografada: string): boolean {
        return this.criptografar(senha) === senhaCriptografada;
    }
    criptografar(senha: string): string {
        return senha.split('').reverse().join('');
    }
}