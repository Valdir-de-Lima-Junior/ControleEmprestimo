import { PersonRepository } from "../../../domain/repository/person-repository";
import { GetPersonOutput } from "./get-person-output";

export class GetPersonUseCase{
    constructor(private readonly personRepository: PersonRepository){}

    execute(input: GetPersonUseCase): GetPersonOutput{
        return {};
    }
}