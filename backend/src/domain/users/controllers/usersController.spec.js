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
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NTU0MzY2Nzd9.MjcanX5x6-dCguf7qf_tlDPmliTbT13IIG8dDlG1pU4";
      const expectResponse = await supertest(app)
        .get("/users")
        .set("Authorization", `Bearer ${token}`);
      expect(expectResponse.status).toBe(200);
    });
  });

  describe("Listar usuário por id", () => {
    test("Em caso de sucesso, retornar o status 200", async () => {
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NTU0MzY2Nzd9.MjcanX5x6-dCguf7qf_tlDPmliTbT13IIG8dDlG1pU4";
      const expectResponse = await supertest(app)
        .get("/users/275")
        .set("Authorization", `Bearer ${token}`);
      expect(expectResponse.body).toEqual(
        expect.objectContaining({
          idUser: 275,
          name: "Pessoa teste",
          email: "pessoateste@yahoo.com",
          apartment: 410,
          password:
            "$2a$10$HkjxlA3OCehfZtG72riMseRtvLNZrzDwTq/O8sMtjRFR44.RanUuS",
          admin: null,
          deletedAt: null,
          createdAt: "2022-06-17T03:29:46.000Z",
          updatedAt: "2022-06-17T03:29:46.000Z"
        })
      );
    });

    test("Em caso id não encontrado, retornar o status 404", async () => {
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NTU0MzY2Nzd9.MjcanX5x6-dCguf7qf_tlDPmliTbT13IIG8dDlG1pU4";
      const expectResponse = await supertest(app)
        .get("/users/500")
        .set("Authorization", `Bearer ${token}`);
      expect(expectResponse.status).toBe(404);
    });
  });

  describe("Atualizar usuário", () => {
    test("Em caso de sucesso, retornar o status 200", async () => {
      const expectResponse = await supertest(app).put("/users/297").send({
        name: "Pessoa teste para atualizar 2",
        email: "pessoatesteparaatualizar2@yahoo.com",
        apartment: 15,
        password: "789123"
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
