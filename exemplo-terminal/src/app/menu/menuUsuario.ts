import registrarUsuario from "../usuario/registrarUsuario";
import TerminalUtil from "../util/terminalUtil";

export default async function menuUsuario() {
    TerminalUtil.titulo(`Menu usuário`);

    const [indice] = await TerminalUtil.menu(
        ["1. Registrar usuário"],
        true
    );

    switch (indice) {
        case 0:
            await registrarUsuario();
            break;
        case 1:
            return;
        default:
            TerminalUtil.sair();
    }

    await menuUsuario();
}
