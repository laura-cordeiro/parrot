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

    // test("Em caso id não encontrado, retornar o status 404", async () => {
    //   const token =
    //     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZFVzZXIiOjMzMCwiZW1haWwiOiJwZXNzb2FjYWRhc3RyYWRhQHlhaG9vLmNvbSIsImFkbWluIjpudWxsLCJpYXQiOjE2NTU0NDA0NTZ9.x3Q9yPJRYVXHdtHQRPl197brm1EsfgcSRTsdjy5hDdA";
    //   const expectResponse = await supertest(app)
    //     .get("/users/500")
    //     .set("Authorization", `Bearer ${token}`);
    //   expect(expectResponse.status).toBe(404);
    // });
  });

  describe("Atualizar usuário", () => {
    test("Em caso de sucesso, retornar o status 200", async () => {
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZFVzZXIiOjI3NSwiZW1haWwiOiJwZXNzb2F0ZXN0ZUB5YWhvby5jb20iLCJhZG1pbiI6bnVsbCwiaWF0IjoxNjU1NDYyOTU0fQ.t-eAIKpwpLGKCm4mKiB_Wz3fG_Uk10x6TtWKEGm9zxU";
      const expectResponse = await supertest(app)
        .put("/users/275")
        .auth("Authorization", `Bearer ${token}`)
        .send({
          name: "Pessoa teste update",
          email: "pessoatesteparaatualizar2@yahoo.com",
          apartment: 15,
          password: "547634"
        });
      expect(expectResponse.status).toBe(200);
    });

    // test("Em caso id não encontrado, retornar o status 400", async () => {
    //   const token =
    //     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NTU0MzY2Nzd9.MjcanX5x6-dCguf7qf_tlDPmliTbT13IIG8dDlG1pU4";
    //   const expectResponse = await supertest(app)
    //     .put("/users/500")
    //     .set("Authorization", `Bearer ${token}`)
    //     .send({
    //       name: "Uptade id não existente",
    //       email: "Uptadeidnaoexistente@email.com",
    //       apartment: 18,
    //       password: "875921"
    //     });
    //   expect(expectResponse.status).toBe(400);
    // });
  });

  // describe("Deletar usuário", () => {
  //   test("Em caso de sucesso, retornar o status 204", async () => {
  //     const token =
  //       "      eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZFVzZXIiOjM2NSwiZW1haWwiOiJwZXNzb2FkZWxldGFkYUB5YWhvby5jb20iLCJhZG1pbiI6bnVsbCwiaWF0IjoxNjU1NDYzNjU3fQ.driKfGjK5a3RPJ8skeWlmx0kBVrN-l00FDRPa_J8obo";
  //     const expectResponse = await supertest(app)
  //       .delete("/users/365")
  //       .set("Authorization", `Bearer ${token}`);
  //     expect(expectResponse.status).toBe(204);
  //   });

  //   test("Em caso id não encontrado, retornar o status 404", async () => {
  //     const token =
  //       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NTU0MzY2Nzd9.MjcanX5x6-dCguf7qf_tlDPmliTbT13IIG8dDlG1pU4";
  //     const expectResponse = await supertest(app)
  //       .delete("/users/1111")
  //       .set("Authorization", `Bearer ${token}`);
  //     expect(expectResponse.status).toBe(404);
  //   });
  //   });
});
