import { PersonRepository } from "../../../domain/repository/person-repository";
import { GetPersonsInput } from "./get-persons-input";
import { GetPersonsOutput } from "./get-persons-output";

export class GetPersonsUseCase{
    constructor(private readonly personRepository: PersonRepository){}

    async execute(input: GetPersonsInput): Promise<GetPersonsOutput[]> {
        const people = await this.personRepository.getAll()
        const output: GetPersonsOutput[] = [];

        for(const person of people){
            output.push(
                {
                    id: person.getId(),
                    name: person.getName(),
                }
            )
        }
        

        return output;
    }
}