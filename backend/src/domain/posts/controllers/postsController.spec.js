const supertest = require("supertest"),
  { faker } = require("@faker-js/faker"),
  app = require("../../../app");

describe("No postsControllers ao executar a função", () => {
  describe("Criar um post", () => {
    test("Em caso de sucesso, retornar o status 200", async () => {
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZFVzZXIiOjM5MSwiZW1haWwiOiJhQGEuY29tIiwiYWRtaW4iOm51bGwsImlhdCI6MTY1NTQ3MTA5NX0.Lvw0nG1DZYczmmkPNeTemtvao-Apvg6MAUZX93iqj3c";
      const expectResponse = await supertest(app)
        .post("/post")
        .set("Authorization", `Bearer ${token}`)
        .send({
          idUser: 391,
          content: "TESTE TESTE PARA DELETAR"
        });
      expect(expectResponse.status).toBe(201);
    });
  });

  describe("Listar todos os posts", () => {
    test("Em caso de sucesso, retornar o status 200", async () => {
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZFVzZXIiOjM5MSwiZW1haWwiOiJhQGEuY29tIiwiYWRtaW4iOm51bGwsImlhdCI6MTY1NTQ3MTA5NX0.Lvw0nG1DZYczmmkPNeTemtvao-Apvg6MAUZX93iqj3c";
      const expectResponse = await supertest(app)
        .get("/posts")
        .set("Authorization", `Bearer ${token}`);
      expect(expectResponse.status).toBe(200);
    });
  });

  describe("Listar post por id", () => {
    test("Em caso de sucesso, retornar o status 200", async () => {
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZFVzZXIiOjM5MSwiZW1haWwiOiJhQGEuY29tIiwiYWRtaW4iOm51bGwsImlhdCI6MTY1NTQ3MTA5NX0.Lvw0nG1DZYczmmkPNeTemtvao-Apvg6MAUZX93iqj3c";
      const expectResponse = await supertest(app)
        .get("/posts/391")
        .set("Authorization", `Bearer ${token}`);
      expect(expectResponse.body).toEqual(
        expect.objectContaining([
          {
            content:
              "Oi Laura, pão de queijo mineiro é o mió. Oi Danilo, eu concordo 100%",
            createdAt: "2022-06-17T14:06:43.000Z",
            deletedAt: null,
            idPosts: 62,
            idUser: 391,
            updatedAt: "2022-06-17T14:46:12.000Z"
          },
          {
            content: "TESTE TESTE",
            createdAt: "2022-06-17T14:22:49.000Z",
            deletedAt: null,
            idPosts: 63,
            idUser: 391,
            updatedAt: "2022-06-17T14:22:49.000Z"
          }
        ])
      );
    });
  });

  describe("Atualizar post", () => {
    test("Em caso de sucesso, retornar o status 200", async () => {
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZFVzZXIiOjM5MSwiZW1haWwiOiJhQGEuY29tIiwiYWRtaW4iOm51bGwsImlhdCI6MTY1NTQ3MTA5NX0.Lvw0nG1DZYczmmkPNeTemtvao-Apvg6MAUZX93iqj3c";
      const expectResponse = await supertest(app)
        .put("/post/62")
        .set("Authorization", `Bearer ${token}`)
        .send({
          idUser: 391,
          content:
            "Oi Laura, pão de queijo mineiro é o mió. Oi Danilo, eu concordo 100%"
        });
      expect(expectResponse.status).toBe(200);
    });
  });

  describe("Deletar post", () => {
    test("Em caso de sucesso, retornar o status 204", async () => {
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZFVzZXIiOjM5MSwiZW1haWwiOiJhQGEuY29tIiwiYWRtaW4iOm51bGwsImlhdCI6MTY1NTQ3MTA5NX0.Lvw0nG1DZYczmmkPNeTemtvao-Apvg6MAUZX93iqj3c";
      const expectResponse = await supertest(app)
        .delete("/post/67")
        .set("Authorization", `Bearer ${token}`);
      expect(expectResponse.status).toBe(204);
    });
  });
});
