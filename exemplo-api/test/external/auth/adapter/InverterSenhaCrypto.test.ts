import InverterSenhaCrypto from "@/external/auth/adapter/InverterSenhaCrypto"

test('Deve retornar verdadeiro na comparação de senha criptografada igual a original', () => {
    const provedor =  new InverterSenhaCrypto();
    const senhaCriptografada = provedor.criptografar("Abc@123");
    expect(provedor.comparar("Abc@123", senhaCriptografada)).toBe(true);
});