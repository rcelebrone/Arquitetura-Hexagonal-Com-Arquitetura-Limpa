import Ferrari from "@/core/fundamentos/Ferrari";
import TerminalUtil from "../util/terminalUtil";
import Fusca from "@/core/fundamentos/Fusca";
import ICarro from "@/core/fundamentos/Carro.Interface";

export default async function polimorfismo() {
    TerminalUtil.titulo(`Menu polimorfismo`);

    const [tipoCarro] = await TerminalUtil.selecao("Tipo de Carro?", [
        "Ferrari",
        "Fusca",
    ]);
    const carro: ICarro = tipoCarro === 0 ? new Ferrari() : new Fusca();

    while (true) {
        TerminalUtil.limpar();
        TerminalUtil.exibirChaveValor(
            "Velocidade Máxima: ",
            `${carro.velocidadeMaxima} km/h`
        );

        TerminalUtil.exibirChaveValor(
            "Velocidade Atual: ",
            `${carro.velocidadeAtual} km/h`
        );

        const [opcao] = await TerminalUtil.selecao("Qual opção?", ["Acelerar", "Frear"]);

        opcao === 0 ? carro.acelerar() : carro.frear();

        const continuar = await TerminalUtil.confirmacao("Deseja continuar?");
        if (!continuar) return;
    }
}
