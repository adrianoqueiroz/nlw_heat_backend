import { Request, Response } from "express";
import { AuthenticateUserService } from "../services/AuthenticateUserService";

class AuthenticateUserController {
  async handle(request: Request, response: Response) {
    const { code, client_id } = request.body;

    const service = new AuthenticateUserService();

    try {
      console.log(request.body);
      const result = await service.execute(client_id, code);
      return response.json(result);
    } catch (error) {
      return response.json({ error: error.message });
    }

  }
}

export { AuthenticateUserController }