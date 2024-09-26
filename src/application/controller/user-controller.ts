import { UserRepository } from "../../domain/repository/user-repository";
import { CreateUserUseCase } from "../use-cases/create-user/create-user-usecase";
import { DeleteUserUseCase } from "../use-cases/delete-user/delete-user-usecase";
import { GetUserUseCase } from "../use-cases/get-user/get-user-usecase";
import { GetUsersUseCase } from "../use-cases/get-users/get-users-usecase";
import { UpdateUserUseCase } from "../use-cases/update-user/update-user-usecase";

export class UserController{
    constructor(private readonly userRepository: UserRepository){}

    create(input: any){
        const createUserUseCase = new CreateUserUseCase(this.userRepository);
        createUserUseCase.execute(input);
        
    }

    update(input: any){
        const updateUserUseCase = new UpdateUserUseCase(this.userRepository);
        updateUserUseCase.execute(input);
    }

    getByID(input: any){
        const getUserUseCase = new GetUserUseCase(this.userRepository);
        getUserUseCase.execute(input);
    }

    getAll(input: any){
        const getUsersUseCase = new GetUsersUseCase(this.userRepository);
        getUsersUseCase.execute(input);
    }

    delete(input: any){
        const deleteUserUseCase = new DeleteUserUseCase(this.userRepository);
        deleteUserUseCase.execute(input);
    }
}