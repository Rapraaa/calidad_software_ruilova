describe("con afterEach", () => {
  let registros = []; // simula un log global

  afterEach(() => {
    // Se ejecuta después de cada test
    // Limpia el array para no contaminar el siguiente test
    registros = [];
    // console.log('Test terminado — estado limpiado');
  });

  test("añade entradas al registro", () => {
    registros.push("entrada 1");
    registros.push("entrada 2");
    expect(registros).toHaveLength(2);
  });

  test("el registro está vacío al inicio de este test", () => {
    // afterEach del test anterior limpió registros
    expect(registros).toHaveLength(0);
  });
});
