import { User } from "../../../domain/entity/user";
import { PersonRepository } from "../../../domain/repository/person-repository";
import { UserRepository } from "../../../domain/repository/user-repository";
import { UpdateUserInput } from "./update-user-input";
import { UpdateUserOutput } from "./update-user-output";

export class UpdateUserUseCase {
    
    constructor(
        private personRepository: PersonRepository,
        private userRepository: UserRepository,
    
    ){}

    async execute(input: UpdateUserInput): Promise<UpdateUserOutput>{
        const user = await this.userRepository.getById(input.id)
        const person = await this.personRepository.getById(input.personId);
        const newUser = new User(input.id, person, input.userName)
       
        this.userRepository.update(newUser)
        return {id: user.getId()};
    }
    
}