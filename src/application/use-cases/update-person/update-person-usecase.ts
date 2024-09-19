import { PersonRepository } from "../../../domain/repository/person-repository";
import { UpdatePersonInput } from "./update-person-input";
import { UpdatePersonOutput } from "./update-person-output";

export class UpdatePersonUseCase {
    constructor(readonly personRepository: PersonRepository){

    }
    execute(input: UpdatePersonInput): UpdatePersonOutput{
        return {};
    }
    
}