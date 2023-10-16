import SenhaCripto from "@/adapter/auth/SenhaCripto";
import IUsuario from "@/core/usuario/model/IUsuario";
import RegistrarUsuario from "@/core/usuario/service/UCRegistrarUsuario";
import TerminalUtil from "../util/terminalUtil";
import RepositorioUsuarioPg from "@/adapter/db/RepositorioUsuarioPg";

export default async function registrarUsuario() {
    const { titulo, campoRequerido, sucesso, erro, esperarEnter } =
        TerminalUtil;
        
    titulo(`Menu Registrar usuário`);

    const provedorCripto = new SenhaCripto();
    const repositorioUsuario = new RepositorioUsuarioPg();
    const casoDeUso = new RegistrarUsuario(provedorCripto, repositorioUsuario);
    
    const nome = await campoRequerido("nome: ", "Rodrigo Celebrone");
    const email = await campoRequerido("email: ", "rcelebrone@gmail.com");
    const senha = await campoRequerido("senha: ", "Mudar@123");
    const usuario: IUsuario = { nome, email, senha };

    try {
        await casoDeUso.executar(usuario);
        await sucesso("Usuário cadastrado com sucesso");
    } catch (e: any) {
        await erro("Usuário já cadastrado", e.message);
    } finally {
        await esperarEnter();
    }
}
