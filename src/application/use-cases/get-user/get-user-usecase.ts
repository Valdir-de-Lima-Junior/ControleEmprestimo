import { UserRepository } from "../../../domain/repository/user-repository";
import { GetUserInput } from "./get-user-input";
import { GetUserOutput } from "./get-user-output";

export class GetUserUseCase{
    constructor(readonly userRepository: UserRepository){}

    async execute(input: GetUserInput): Promise<GetUserOutput>{
        const user = await this.userRepository.getById(input.id)

        const output: GetUserOutput = {
            id: user.getId(),
            name: user.getName(),
            person: {
                id: user.getPerson().getId(),
                name: user.getPerson().getName(),
            }
        }
        return output;
    }
}