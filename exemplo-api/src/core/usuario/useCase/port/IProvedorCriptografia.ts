// Port
// A port FAZ parte do CORE
export default interface IProvedorCriptografia {
    criptografar(texto: string): string;
    comparar(senha: string, senhaCriptografada: string): boolean;
}