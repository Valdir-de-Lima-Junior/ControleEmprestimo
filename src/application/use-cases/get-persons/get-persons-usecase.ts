import { PersonRepository } from "../../../domain/repository/person-repository";
import { GetPersonsInput } from "./get-persons-input";
import { GetPersonsOutput } from "./get-persons-output";

export class GetPersonsUseCase{
    constructor(private readonly personsRepository: PersonRepository){}

    execute(input: GetPersonsInput): GetPersonsOutput{
        return {};
    }
}