import { PersonRepository } from "../../../domain/repository/person-repository";
import { DeletePersonInput } from "./delete-person-input";
import { DeletePersonOutput } from "./delete-person-output";

export class DeletePersonUseCase {
    constructor(readonly personRepository: PersonRepository){

    }
    execute(input: DeletePersonInput): DeletePersonOutput{
        return {};
    }
    
}