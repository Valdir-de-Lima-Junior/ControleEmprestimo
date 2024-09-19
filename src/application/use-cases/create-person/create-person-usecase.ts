import { PersonRepository } from "../../../domain/repository/person-repository";
import { CreateItemOutput } from "../create-item/create-item-output";
import { CreatePersonInput } from "./create-person-input";

export class CreatePersonUseCase{
    constructor(readonly personRepository: PersonRepository){}

    execute(input: CreatePersonInput): CreateItemOutput{
        return {};
    }
} 