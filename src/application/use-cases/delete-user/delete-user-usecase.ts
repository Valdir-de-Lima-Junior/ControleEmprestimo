import { UserRepository } from "../../../domain/repository/user-repository";
import { DeleteUserInput } from "./delete-user-input";
import { DeleteUserOutput } from "./delete-user-output";

export class DeleteUserUseCase {
    constructor(readonly userRepository: UserRepository){

    }
    execute(input: DeleteUserInput): DeleteUserOutput{
        return {};
    }
    
}