import dip from "../fundamentos/dip";
import polimorfismo from "../fundamentos/polimorfismo";
import TerminalUtil from "../util/terminalUtil";

export default async function menuFundamentos() {
    TerminalUtil.titulo(`Menu fundamentos`);

    const [indice] = await TerminalUtil.menu(
        ["1. Polimorfismo", "2. DIP"],
        true
    );

    switch (indice) {
        case 0:
            await polimorfismo();
            break;
        case 1:
            await dip();
            break;
        case 2:
            return;
        default:
            TerminalUtil.sair();
    }

    await menuFundamentos();
}
