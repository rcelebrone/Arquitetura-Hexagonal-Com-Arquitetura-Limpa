export default interface ICarro {
    readonly velocidadeMaxima: number;
    velocidadeAtual: number;
    acelerar(): void;
    frear(): void;
}