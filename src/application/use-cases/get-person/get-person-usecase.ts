import { PersonRepository } from "../../../domain/repository/person-repository";
import { GetPersonInput } from "./get-person-input";
import { GetPersonOutput } from "./get-person-output";

export class GetPersonUseCase{
    constructor(private readonly personRepository: PersonRepository){}

    async execute(input: GetPersonInput): Promise<GetPersonOutput>{
        const person = await this.personRepository.getById(input.id);
        
        const output: GetPersonOutput = {
            id: person.getId(),
            name: person.getName(),
        }
        return output;
    }
}