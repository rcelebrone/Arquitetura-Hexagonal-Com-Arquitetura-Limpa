import ICarro from "@/core/fundamentos/Carro.Interface";
import Fusca from "@/core/fundamentos/Fusca";
import corrida from "../../core/fundamentos/corrida";
import TerminalUtil from "../util/terminalUtil";
import Ferrari from "@/core/fundamentos/Ferrari";
import Civic from "@/core/fundamentos/Civic";

export default async function dip() {
    TerminalUtil.titulo(`Menu dip`);

    const [tipo] = await TerminalUtil.selecao("Tipo de carro", [
        "Fusca",
        "Ferrari",
        "Civic"
    ]);

    let carro: ICarro;
    switch (tipo) {
        case 0:
            carro = new Fusca();
            break;
        case 1: 
            carro = new Ferrari();
            break;
        default:
            carro = new Civic();
            break;
    }

    corrida(carro, TerminalUtil.exibirValor);

    await TerminalUtil.esperarEnter();
}
