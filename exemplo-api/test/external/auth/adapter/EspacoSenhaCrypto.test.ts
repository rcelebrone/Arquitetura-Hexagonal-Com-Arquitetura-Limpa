import EspacoSenhaCrypto from "@/external/auth/adapter/EspacoSenhaCrypto"

test('Deve retornar verdadeiro na comparação de senha criptografada igual a original', () => {
    const provedor =  new EspacoSenhaCrypto();
    const senhaCriptografada = provedor.criptografar("Abc@123");
    expect(provedor.comparar("Abc@123", senhaCriptografada)).toBe(true);
});