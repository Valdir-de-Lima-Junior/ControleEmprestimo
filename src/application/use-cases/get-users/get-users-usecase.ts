import { UserRepository } from "../../../domain/repository/user-repository";
import { GetUsersInput } from "./get-users-input";
import { GetUsersOutput } from "./get-users-output";

export class GetUsersUseCase{
    constructor(readonly userRepository: UserRepository){}

    execute(input: GetUsersInput): GetUsersOutput{
        return {};
    }
}