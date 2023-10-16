import dotenv from "dotenv";
dotenv.config();

import express from "express";
import UCRegistrarUsuario from "./core/usuario/useCase/UCRegistrarUsuario";
import SenhaCrypto from "./external/auth/adapter/SenhaCrypto";
import RepositorioUsuarioPg from "./external/db/adapter/RepositorioUsuarioPg";
import RegistrarUsuarioController from "./external/api/controller/RegistrarUsuarioController";
import LoginUsuarioController from "./external/api/controller/LoginUsuarioController";
import UCLoginUsuario from "./core/usuario/useCase/UCLoginUsuario";
import HomeController from "./external/api/controller/HomeController";
import ProvedorJwt from "./external/api/ProvedorJwt";
import UCObterProdutoPorId from "./core/produto/useCase/UCObterProdutoPorId";
import ObterProdutoPorIdController from "./external/api/controller/ObterProdutoPorIdController";
import UsuarioMiddleware from "./external/api/UsuarioMiddleware";

const app = express();
const porta = process.env.API_PORT ?? 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(porta, () => {
    console.info(`\\o/ Rodando na porta ${porta}!`);
});

export default app;

// ------------------------------------ Rotas abertas

const repositorioUsuario = new RepositorioUsuarioPg();
const provedorCripto = new SenhaCrypto();
const registrarusuario = new UCRegistrarUsuario(
    provedorCripto,
    repositorioUsuario
);
const provedorJwt = new ProvedorJwt(process.env.JWT_SEGREDO!);
const loginUsuario = new UCLoginUsuario(
    repositorioUsuario,
    provedorCripto
);

new HomeController(app);
new RegistrarUsuarioController(app, registrarusuario);
new LoginUsuarioController(app, loginUsuario, provedorJwt);

// ------------------------------------ Rotas protegidas

const obterProdutoPorId = new UCObterProdutoPorId();
const usuarioMid = UsuarioMiddleware(provedorJwt, repositorioUsuario)
new ObterProdutoPorIdController(app, obterProdutoPorId, [usuarioMid]);
