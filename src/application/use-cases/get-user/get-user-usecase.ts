import { UserRepository } from "../../../domain/repository/user-repository";
import { GetUserInput } from "./get-user-input";
import { GetUserOutput } from "./get-user-output";

export class GetUserUseCase{
    constructor(readonly userRepository: UserRepository){}

    execute(input: GetUserInput): GetUserOutput{
        return {};
    }
}