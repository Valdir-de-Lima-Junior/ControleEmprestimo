import { Person } from "../../../domain/entity/person";
import { PersonRepository } from "../../../domain/repository/person-repository";
import { UpdatePersonInput } from "./update-person-input";
import { UpdatePersonOutput } from "./update-person-output";

export class UpdatePersonUseCase {
    
    constructor(private readonly personRepository: PersonRepository){}
    
    async execute(input: UpdatePersonInput): Promise<UpdatePersonOutput> {
        const person = await this.personRepository.getById(input.id);
        const newPerson = new Person(input.name, input.id)
        this. personRepository.update(newPerson)

        return {id: person.getId()};
    }
    
}