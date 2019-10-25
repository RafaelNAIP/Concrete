import Login from "./login";
const { handleLogin } = Login;

describe("Login defined", function() {
  it("Enter in correct page", function() {
    expect(Login).toBeDefined();
  });
});
