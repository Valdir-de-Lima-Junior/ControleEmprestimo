import { Person } from "../../../domain/entity/person";
import { PersonRepository } from "../../../domain/repository/person-repository";
import { RepositoryFactory } from "../../../domain/repository/repository-factory";
import { CreatePersonInput } from "./create-person-input";

export class CreatePersonUseCase{
    private personRepository: PersonRepository;
    constructor(private repositoryFactory: RepositoryFactory)
    {
        this.personRepository = repositoryFactory.createPersonRepository();
    }

    async execute(input: CreatePersonInput) {
        if (!input.id) {
            throw new Error('Código da Pessoa não informada');
        }
        if (!input.name) {
            throw new Error('Nome da Pessoa não informada');
        }

        const person = new Person( input.id, input.name)
        await this.personRepository.create(person)
        return {};
    }
} 