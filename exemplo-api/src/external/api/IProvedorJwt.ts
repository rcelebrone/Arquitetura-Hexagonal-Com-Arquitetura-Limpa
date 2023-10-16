export default interface IProvedorJwt {
    gerar(dados: string | object): string;
    extrairDados(token: string): string | object;
}