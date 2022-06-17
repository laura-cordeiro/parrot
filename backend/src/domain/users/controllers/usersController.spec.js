const supertest = require("supertest"),
  { faker } = require("@faker-js/faker"),
  app = require("../../../app"),
  authenticator = require("../../../middlewares/auth");

describe("No usersControllers ao executar a função", () => {
  describe("Registrar usuário", () => {
    test("Em caso de sucesso, retornar o status 201", async () => {
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NTU0MzgzOTB9._zddlo2P2X8lifnml8UQKf1I9Ku1cFSTuhNWDceRE88";
      const fakeEmail = faker.internet.email();
      const fakeName = faker.name.findName();
      const fakeApartment = faker.random.numeric(2);
      const expectResponse = await supertest(app)
        .post("/users")
        .set("Authorization", `Bearer ${token}`)
        .send({
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
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZFVzZXIiOjMzMCwiZW1haWwiOiJwZXNzb2FjYWRhc3RyYWRhQHlhaG9vLmNvbSIsImFkbWluIjpudWxsLCJpYXQiOjE2NTU0NDA0NTZ9.x3Q9yPJRYVXHdtHQRPl197brm1EsfgcSRTsdjy5hDdA";
      const expectResponse = await supertest(app)
        .get("/users/330")
        .set("Authorization", `Bearer ${token}`);
      expect(expectResponse.body).toEqual(
        expect.objectContaining({
          idUser: 330,
          name: "Pessoa cadastrada",
          email: "pessoacadastrada@yahoo.com",
          apartment: 41,
          password:
            "$2a$10$9Ff25RyVZQoAM7PQ1q6J7ezuIZJUf4IYqhAXMFj.gkRpz7.f6NyWq",
          admin: null,
          deletedAt: null,
          createdAt: "2022-06-17T04:33:28.000Z",
          updatedAt: "2022-06-17T04:33:28.000Z"
        })
      );
    });
  });

  describe("Atualizar usuário", () => {
    test("Em caso de sucesso, retornar o status 200", async () => {
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZFVzZXIiOjM5MSwiZW1haWwiOiJhQGEuY29tIiwiYWRtaW4iOm51bGwsImlhdCI6MTY1NTQ3MTA5NX0.Lvw0nG1DZYczmmkPNeTemtvao-Apvg6MAUZX93iqj3c";
      const expectResponse = await supertest(app)
        .put("/users/391")
        .set("Authorization", `Bearer ${token}`)
        .send({
          name: "Danilo Teste",
          apartment: 10,
          password: "1234567"
        });
      expect(expectResponse.status).toBe(200);
    });
  });

  describe("Deletar usuário", () => {
    test("Em caso de sucesso, retornar o status 204", async () => {
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZFVzZXIiOjQwNSwiZW1haWwiOiJkZWxldGFkb2ZpbmFsQGVtYWlsLmNvbSIsImFkbWluIjpudWxsLCJpYXQiOjE2NTU0NzQ1OTZ9.OIVNjDNV4JNIo63j7bzxJ9EBRV1fdFLyAeVcggX-670";
      const expectResponse = await supertest(app)
        .delete("/users/405")
        .set("Authorization", `Bearer ${token}`);
      expect(expectResponse.status).toBe(204);
    });
  });
});
