import ICarro from '@/core/fundamentos/Carro.Interface';

export default function corrida(carro: ICarro, escreveVelocidade: (str: string) => void = console.log) {

    Array.from({ length: 10 }).forEach(() => {
        carro.acelerar();
        escreveVelocidade(`Velocidade: ${carro.velocidadeAtual}`);
    });

    Array.from({ length: 10 }).forEach(() => {
        carro.frear();
        escreveVelocidade(`Velocidade: ${carro.velocidadeAtual}`);
    });
}
