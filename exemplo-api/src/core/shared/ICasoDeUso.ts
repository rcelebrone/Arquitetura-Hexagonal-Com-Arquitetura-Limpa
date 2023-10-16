export default interface ICasoDeUso<E, S> {
    executar(entrada: E): Promise<S>;
}