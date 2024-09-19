import { UserRepository } from "../../../domain/repository/user-repository";
import { CreateuserInput } from "./create-user-input";
import { CreateUserOutput } from "./create-user-output";

export class CreateUserUseCase{
    constructor(readonly userRepository: UserRepository){}

    execute(input: CreateuserInput): CreateUserOutput {
        return {};
    }
}