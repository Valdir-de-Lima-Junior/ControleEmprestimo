import { PersonRepository } from "../../domain/repository/person-repository";
import { RepositoryFactory } from "../../domain/repository/repository-factory";
import { CreatePersonUseCase } from "../use-cases/create-person/create-person-usecase";
import { DeletePersonUseCase } from "../use-cases/delete-person/delete-person-usecase";
import { GetPersonUseCase } from "../use-cases/get-person/get-person-usecase";
import { GetPersonsUseCase } from "../use-cases/get-persons/get-persons-usecase";
import { UpdatePersonInput } from "../use-cases/update-person/update-person-input";
import { UpdatePersonUseCase } from "../use-cases/update-person/update-person-usecase";

export class PersonController{
    constructor(private repositoryFactory: RepositoryFactory,
        private readonly personRepository: PersonRepository
    ){}

    async getAll(input: any){
        const getPersonsUseCase= new GetPersonsUseCase(this.personRepository);
        return await getPersonsUseCase.execute(input);
    }

    async getByID(id: string){
        try{
            const getPersonUseCase = new GetPersonUseCase(this.personRepository);
            return await getPersonUseCase.execute({id});
        } catch (e: any) {
            return{
                message : e.message
            }
        }
    }

    async create(input: any){ 
        try{
            const createPersonUseCase = new CreatePersonUseCase(this.repositoryFactory);
            return await createPersonUseCase.execute(input);
        } catch (e: any) {
            return {
                message: e.message
            }
        }

    }

    update(input: UpdatePersonInput){
        const updatePersonUseCase = new UpdatePersonUseCase(this.personRepository);
        return updatePersonUseCase.execute(input);
    }

   

    delete(id: string){
        try{
        const deletePersonUseCase = new DeletePersonUseCase(this.personRepository);
        return deletePersonUseCase.execute({id});
        } catch (e: any) {
            return{
                message: e.message
            }
        }
    }
}