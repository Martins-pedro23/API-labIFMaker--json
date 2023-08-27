import { cyan, gray, green, red, white, yellow } from "colorette";

export const MorganLog = (method: string, statusCode: string): string => {
  let statusCodeResponse: string = ":status";
  let methodResponse: string = ":method";

  if (method === "GET") {
    methodResponse = green(":method");
  }

  if (method === "POST") {
    methodResponse = yellow(":method");
  }

  if (method === "PUT") {
    methodResponse = cyan(":method");
  }

  if (method === "DELETE") {
    methodResponse = red(":method");
  }

  if (statusCode.indexOf("2", 0) == 0) {
    statusCodeResponse = green(":status");
  }

  if (statusCode.indexOf("4", 0) == 0) {
    statusCodeResponse = red(":status");
  }

  if (statusCode.indexOf("5", 0) == 0) {
    statusCodeResponse = yellow(":status");
  }

  return `[${methodResponse}] [ :url ] [${statusCodeResponse}]`;
};
