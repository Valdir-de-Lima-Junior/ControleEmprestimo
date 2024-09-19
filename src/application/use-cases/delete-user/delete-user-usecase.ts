import { UserRepository } from "../../../domain/repository/user-repository";
import { DeleteItemOutput } from "../delete-item/delete-item-output";
import { DeleteUserInput } from "./delete-user-input";
import { DeleteUserOutput } from "./delete-user-output";

export class DeleteUserUseCase {
    constructor(readonly userRepository: UserRepository){

    }
    execute(input: DeleteUserInput): DeleteUserOutput{
        return {};
    }
    
}