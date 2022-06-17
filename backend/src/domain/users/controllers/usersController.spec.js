const supertest = require("supertest"),
  { faker } = require("@faker-js/faker"),
  app = require("../../../app");

describe("No usersControllers ao executar a função", () => {
  describe("Registrar usuário", () => {
    test("Em caso de sucesso, retornar o status 201", async () => {
      const fakeEmail = faker.internet.email();
      const fakeName = faker.name.findName();
      const fakeApartment = faker.random.numeric(2);
      const expectResponse = await supertest(app).post("/users").send({
        name: fakeName,
        email: fakeEmail,
        apartment: fakeApartment,
        password: "123456"
      });
      expect(expectResponse.status).toBe(201);
    });

    test("Em caso de sucesso, retornar o response do request", async () => {
      const fakeEmail = faker.internet.email();
      const expectResponse = await supertest(app).post("/users").send({
        name: "Laura Cordeiro",
        email: fakeEmail,
        apartment: 54,
        password: "123456"
      });
      expect(expectResponse.body).toEqual(
        expect.objectContaining({
          name: "Laura Cordeiro",
          email: expect.any(String),
          apartment: 54
        })
      );
    });

    test("Em caso de email existente, retornar o status 400", async () => {
      const fakeName = faker.name.findName();
      const fakeApartment = faker.random.numeric(2);
      const expectResponse = await supertest(app).post("/users").send({
        name: fakeName,
        email: "teste@email.com",
        apartment: fakeApartment,
        password: "123456"
      });
      expect(expectResponse.status).toBe(400);
    });

    test("Em caso de cadastro sem name, email ou password retornar o status 400", async () => {
      const fakeEmail = faker.internet.email();
      const fakeApartment = faker.random.numeric(2);
      const expectResponse = await supertest(app).post("/users").send({
        name: "",
        email: fakeEmail,
        apartment: fakeApartment,
        password: "123456"
      });
      expect(expectResponse.status).toBe(400);
    });
  });

  describe("Listar todos os usuários", () => {
    test("Em caso de sucesso, retornar o status 200", async () => {
      const expectResponse = await supertest(app).get("/users");
      expect(expectResponse.status).toBe(200);
    });
  });

  describe("Listar usuário por id", () => {
    test("Em caso de sucesso, retornar o status 200", async () => {
      const expectResponse = await supertest(app).get("/users/10");
      expect(expectResponse.body).toEqual(
        expect.objectContaining({
          idUser: 10,
          name: "Lois Powlowski PhD",
          email: "Lora.Feeney@yahoo.com",
          apartment: 57,
          password: "5Isv_0wtgz6ojUQ",
          admin: null,
          deletedAt: null,
          createdAt: "2022-06-16T02:29:29.000Z",
          updatedAt: "2022-06-16T02:29:29.000Z"
        })
      );
    });

    test("Em caso id não encontrado, retornar o status 404", async () => {
      const expectResponse = await supertest(app).get("/users/500");
      expect(expectResponse.status).toBe(404);
    });
  });

  describe("Atualizar usuário", () => {
    test("Em caso de sucesso, retornar o status 200", async () => {
      const expectResponse = await supertest(app).put("/users/2").send({
        name: "Maria José",
        email: "mariajose@email.com",
        apartment: 15,
        password: "564789"
      });
      expect(expectResponse.status).toBe(200);
    });

    test("Em caso id não encontrado, retornar o status 400", async () => {
      const expectResponse = await supertest(app).put("/users/500").send({
        name: "Mario",
        email: "mario@email.com",
        apartment: 18,
        password: "875921"
      });
      expect(expectResponse.status).toBe(400);
    });
  });

  describe("Deletar usuário", () => {
    test("Em caso de sucesso, retornar o status 204", async () => {
      const expectResponse = await supertest(app).delete("/users/54");
      expect(expectResponse.status).toBe(204);
    });

    test("Em caso id não encontrado, retornar o status 404", async () => {
      const expectResponse = await supertest(app).delete("/users/1111");
      expect(expectResponse.status).toBe(404);
    });
  });
});
