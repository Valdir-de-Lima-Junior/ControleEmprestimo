import { PersonRepository } from "../../domain/repository/person-repository";
import { RepositoryFactory } from "../../domain/repository/repository-factory";
import { UserRepository } from "../../domain/repository/user-repository";
import { CreateUserUseCase } from "../use-cases/create-user/create-user-usecase";
import { DeleteUserUseCase } from "../use-cases/delete-user/delete-user-usecase";
import { GetUserUseCase } from "../use-cases/get-user/get-user-usecase";
import { GetUsersUseCase } from "../use-cases/get-users/get-users-usecase";
import { UpdateUserInput } from "../use-cases/update-user/update-user-input";
import { UpdateUserUseCase } from "../use-cases/update-user/update-user-usecase";

export class UserController{
    constructor(private repositoryFactory: RepositoryFactory,
        private readonly userRepository: UserRepository,
        private readonly personRepository: PersonRepository
    ){}

    async getByID(id: string){
        try{
        const getUser = new GetUserUseCase(this.userRepository);
        return await getUser.execute({id});
        } catch (e: any) {
            return {
                message: e.message
            }
        }
    }

    async getAll(input: any){
        const getUsersUseCase = new GetUsersUseCase(this.userRepository);
        return await getUsersUseCase.execute(input);
    }

    async create(input: any){
        try{
            const createUserUseCase = new CreateUserUseCase(this.repositoryFactory);
            return await createUserUseCase.execute(input);    
        } catch (e: any){
            return {
                message: e.message
            }
        }
    }

    update(input: UpdateUserInput){
        const updateUserUseCase = new UpdateUserUseCase(this.personRepository, this.userRepository);
        return updateUserUseCase.execute(input);
    }

    delete(id: string){
        try{
            const deleteUserUseCase = new DeleteUserUseCase(this.userRepository);
            return deleteUserUseCase.execute({id});
        } catch (e: any){
            return{
                message: e.message
            }
        }

    }
}