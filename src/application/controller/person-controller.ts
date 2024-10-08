import { PersonRepository } from "../../domain/repository/person-repository";
import { CreatePersonUseCase } from "../use-cases/create-person/create-person-usecase";
import { DeletePersonUseCase } from "../use-cases/delete-person/delete-person-usecase";
import { GetPersonUseCase } from "../use-cases/get-person/get-person-usecase";
import { GetPersonsUseCase } from "../use-cases/get-persons/get-persons-usecase";
import { UpdatePersonUseCase } from "../use-cases/update-person/update-person-usecase";

export class PersonController{
    constructor(private readonly personRepository: PersonRepository){}

    create(input: any){
        const createPersonUseCase = new CreatePersonUseCase(this.personRepository);
        createPersonUseCase.execute(input);
    }

    update(input: any){
        const updatePersonUseCase = new UpdatePersonUseCase(this.personRepository);
        updatePersonUseCase.execute(input);
    }

    getByID(input: any){
        const getPersonUseCase = new GetPersonUseCase(this.personRepository);
        getPersonUseCase.execute(input);
    }

    getAll(input: any){
        const getPersonsUseCase= new GetPersonsUseCase(this.personRepository);
        getPersonsUseCase.execute(input);
    }

    delete(input: any){
        const deletePersonUseCase = new DeletePersonUseCase(this.personRepository);
        deletePersonUseCase.execute(input);
    }
}