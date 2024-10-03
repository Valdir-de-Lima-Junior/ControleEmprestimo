import { UserRepository } from "../../../domain/repository/user-repository";
import { GetUsersInput } from "./get-users-input";
import { GetUsersOutput } from "./get-users-output";

export class GetUsersUseCase{
    constructor(readonly userRepository: UserRepository){}

    execute(input: GetUsersInput): GetUsersInput{
        const userList = this.userRepository.getAll();

        const output: GetUsersOutput[] = [];

        for(const user of userList){
            output.push(
                {
                    id: user.getId(),
                    name: user.getName(),
                    person: {
                        id: user.getPerson().getId(),
                        name: user.getPerson().getName()
                    }
                }
            )
        }
        return output;
    }
}