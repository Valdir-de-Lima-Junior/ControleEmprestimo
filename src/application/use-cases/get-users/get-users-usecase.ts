import { UserRepository } from "../../../domain/repository/user-repository";
import { GetUsersInput } from "./get-users-input";
import { GetUsersOutput } from "./get-users-output";

export class GetUsersUseCase{
    constructor(readonly userRepository: UserRepository) {}


    async execute(input: GetUsersInput): Promise<GetUsersInput[]> {
        const users = await this.userRepository.getAll();

        const output: GetUsersOutput[] = [];

        for(const user of users){
            output.push(
                {
                   id: user.getId(),
                   userName: user.getName(),
                   person: {
                        id: user.getPerson().getId(),
                        name: user.getPerson().getName(),
                   }
                   
                }
            )
        }
        return output;
    }
}