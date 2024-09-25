import { PersonRepository } from "../../../domain/repository/person-repository";
import { GetPersonsInput } from "../get-persons/get-persons-input";
import { GetPersonOutput } from "./get-person-output";

export class GetPersonUseCase{
    constructor(private readonly personRepository: PersonRepository){}

    execute(input: GetPersonsInput): GetPersonOutput{
        return {};
    }
}