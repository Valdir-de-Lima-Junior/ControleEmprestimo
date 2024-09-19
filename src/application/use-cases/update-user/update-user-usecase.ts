import { UserRepository } from "../../../domain/repository/user-repository";
import { UpdateUserInput } from "./update-user-input";
import { UpdateUserOutput } from "./update-user-output";

export class UpdateUserUseCase {
    constructor(readonly userRepository: UserRepository){

    }
    execute(input: UpdateUserInput): UpdateUserOutput{
        return {};
    }
    
}