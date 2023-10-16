import ICarro from "@/core/fundamentos/Carro.Interface";

export default class Fusca implements ICarro {
    constructor(
        readonly velocidadeMaxima: number = 140,
        private _velocidadeAtual: number = 0
    ) {}
    get velocidadeAtual(): number {
        return this._velocidadeAtual;
    }

    acelerar(): void {
        this._velocidadeAtual = Math.min(
            this._velocidadeAtual + 5,
            this.velocidadeMaxima
        );
    }
    frear(): void {
        this._velocidadeAtual = Math.max(this._velocidadeAtual - 5, 0);
    }
}
