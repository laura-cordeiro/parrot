const supertest = require("supertest"),
  { faker } = require("@faker-js/faker"),
  app = require("../../../app");

describe("No authControllers ao executar a função", () => {
  describe("Fazer login", () => {
    test("Em caso de sucesso, retornar o status 200", async () => {
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZFVzZXIiOjM5MSwiZW1haWwiOiJhQGEuY29tIiwiYWRtaW4iOm51bGwsImlhdCI6MTY1NTQ3NDAzM30.LvJ6ySLcr_RTjBQkO3YdhWZmbEx5E-27o-qgwlR0J0E";
      const expectResponse = await supertest(app)
        .post("/login")
        .set("Authorization", `Bearer ${token}`)
        .send({
          email: "a@a.com",
          password: "1234567"
        });
      expect(expectResponse.status).toBe(200);
    });
    test("Em caso de erro, retornar o status 401", async () => {
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZFVzZXIiOjM5MSwiZW1haWwiOiJhQGEuY29tIiwiYWRtaW4iOm51bGwsImlhdCI6MTY1NTQ3NDAzM30.LvJ6ySLcr_RTjBQkO3YdhWZmbEx5E-27o-qgwlR0J0E";
      const expectResponse = await supertest(app)
        .post("/login")
        .set("Authorization", `Bearer ${token}`)
        .send({
          email: "a@a.com",
          password: "12345678910"
        });
      expect(expectResponse.status).toBe(401);
    });
  });
});
