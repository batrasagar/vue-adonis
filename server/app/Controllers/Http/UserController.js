'use strict'

const User = use('App/Models/User')

class UserController {
  test({ request }) {
    const { name} = request.all();
    console.log(name);

    return {
      message: "Hello World " + name,
    };
  }

  async login({request,auth}) {
    const { email, password } = request.all();
    const token = await auth.attempt(email,password)
    return token;
  }

  async register({ request }) {
    const { email, password } = request.all();
    console.log(email, password);
    const user = await User.create({
      email,
      password,
      username : email,
    })
    return this.login(...arguments);
  }
}

module.exports = UserController
