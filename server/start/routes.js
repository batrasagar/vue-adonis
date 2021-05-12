'use strict'

const { RouteResource } = require('@adonisjs/framework/src/Route/Manager')

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */

const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})
Route.post('auth/test', "UserController.test")

Route.group(() => {
  Route.post("auth/test", "UserController.test");
  Route.post("auth/register", "UserController.register");
  Route.post("auth/login", "UserController.login");

  Route.get("projects", "ProjectController.index").middleware('auth');
  Route.post("projects", "ProjectController.create").middleware('auth');


})
  .prefix('api');

