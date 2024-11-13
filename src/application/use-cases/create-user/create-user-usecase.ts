import { User } from "../../../domain/entity/user";
import { PersonRepository } from "../../../domain/repository/person-repository";
import { RepositoryFactory } from "../../../domain/repository/repository-factory";
import { UserRepository } from "../../../domain/repository/user-repository";
import { CreateuserInput } from "./create-user-input";

export class CreateUserUseCase{
    private personRepository: PersonRepository;
    private userRepository: UserRepository;
    constructor(private repositoryFactory: RepositoryFactory){
        this.personRepository = repositoryFactory.createPersonRepository();
        this.userRepository = repositoryFactory.createUserRepository();
    }

    async execute(input: CreateuserInput) {
        if (!input.id) {
            throw new Error('Código da Pessoa não informada');
        }
        if (!input.userName) {
            throw new Error('Username não Informado');
        }
        if (!input.personId) {
            throw new Error('Pessoa não informada');
        }

        const person = await this.personRepository.getById(input.personId)

        const user = new User(input.userName, person,input.id);
        
        await this.userRepository.create(user);
        return {};
    }
}