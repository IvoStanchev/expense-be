import { METHODS } from "../constants/methods";

interface RequestHandler {
  callback: Function;
}

type MethodProps = {
  [method in METHODS]?: RequestHandler;
};

export interface RequestConstructorProps extends MethodProps {}
