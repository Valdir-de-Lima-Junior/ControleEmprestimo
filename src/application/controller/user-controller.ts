import { UserRepository } from "../../domain/repository/user-repository";
import { CreateUserUseCase } from "../use-cases/create-user/create-user-usecase";
import { DeleteUserUseCase } from "../use-cases/delete-user/delete-user-usecase";
import { GetUserUseCase } from "../use-cases/get-user/get-user-usecase";
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

    get(input: any){
        const getUserUseCase = new GetUserUseCase(this.userRepository);
        getUserUseCase.execute(input);
    }

    delete(input: any){
        const deleteUserUseCase = new DeleteUserUseCase(this.userRepository);
        deleteUserUseCase.execute(input);
    }
}