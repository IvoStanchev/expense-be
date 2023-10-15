import { ENDPOINTS } from "./constants/endpoints";
import { METHODS } from "./constants/methods";
import { createExpense } from "./controllers/expenses";
import { createUser,readUser } from "./controllers/users";
import { RequestConstructorProps } from "./types/server";

//Handle request creation
export class RequestConstructor {
  req: Request;

  // Get request object from fetch
  constructor(req: Request) {
    this.req = req;
  }

  //Given a route structure with path, method, return a response using a callback.
  request(
    routes: Record<ENDPOINTS, RequestConstructorProps>
  ): Response | Promise<Response> {
    //get url and method from http server
    const urlPath = new URL(this.req.url).pathname as ENDPOINTS;
    const requestMethod = this.req.method as METHODS;

    //If we have a route and method to handle the request, provide a response.
    if (routes[urlPath] && routes[urlPath][requestMethod]) {
      return routes[urlPath][requestMethod]?.callback();
    }

    //Else return error.
    return new Response("404!");
  }
}

//Routes
export const routes: Record<ENDPOINTS, RequestConstructorProps> = {
  [ENDPOINTS.EXPENSES]: {
    [METHODS.GET]: {
      callback: createExpense,
    },
  },
  [ENDPOINTS.USERS]: {
    [METHODS.GET]: {
      callback: readUser,
    },
    [METHODS.POST]: {
      callback: createUser,
    },
  },
  [ENDPOINTS.CATEGORIES]: {
    [METHODS.GET]: {
      callback: createExpense,
    },
  },
};
