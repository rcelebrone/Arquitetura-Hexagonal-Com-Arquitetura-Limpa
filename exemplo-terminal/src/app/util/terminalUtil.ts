import { terminal } from "terminal-kit";

export default class TerminalUtil {
    static titulo(texto: string) {
        terminal.clear();
        terminal.magenta(`${texto} \n`);
        terminal.magenta(`-`.repeat(texto.length) + `\n`);
    }

    static limpar() {
        terminal.clear();
    }

    static async campoRequerido(
        label: string,
        valorPadrao: string = ""
    ): Promise<string> {
        terminal.yellow(`\n${label}`);
        const valor = await terminal.inputField({default: valorPadrao}).promise
        
        if(valor)
            return valor;

        return TerminalUtil.campoRequerido(label);
    }

    static async sucesso(texto: string, novaLinha: boolean = true) {
        terminal.green((novaLinha ? `\n` : '') + texto);
    }

    static async erro(texto: string, erro: string, novaLinha: boolean = true) {
        terminal.red((novaLinha ? `\n` : '') + `${erro}: ` + texto);
    }

    static async confirmacao(texto: string): Promise<boolean> {
        terminal.yellow(`\n${texto}`);

        const resposta = await terminal.singleLineMenu(["Sim", "Não"]).promise;

        return resposta.selectedIndex === 0;
    }

    static async menu(
        opcoes: string[],
        voltar: boolean = false
    ): Promise<[number, string]> {
        if (voltar) opcoes.push("Voltar");

        opcoes.push("Sair");

        const resposta = await terminal.singleColumnMenu(opcoes).promise;

        return [resposta.selectedIndex, resposta.selectedText];
    }

    static exibirChaveValor(chave: string, valor: any) {
        terminal.yellow(chave).green(valor).white(`\n`);
    }

    static exibirValor(valor: any) {
        terminal.red(`\n${valor}`);
    }

    static async selecao(
        texto: string,
        opcoes: string[]
    ): Promise<[number, string]> {
        terminal.yellow(`\n${texto}`);

        const resposta = await terminal.singleLineMenu(opcoes).promise;

        return [resposta.selectedIndex, resposta.selectedText];
    }

    static async esperarEnter() {
        terminal.white(`\nPressione enter para continuar...`);
        await terminal.inputField({ echo: false }).promise;
    }

    static sair() {
        terminal.clear();
        process.exit(0);
    }
}
