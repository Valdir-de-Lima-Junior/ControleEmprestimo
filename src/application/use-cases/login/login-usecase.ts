import { RepositoryFactory } from "../../../domain/repository/repository-factory";
import { UserRepository } from "../../../domain/repository/user-repository";
import { LoginUseCaseInput } from "./login-input";
import { LoginUseCaseOutput } from "./login-output";
import { sign } from "jsonwebtoken";
import { compare } from "bcrypt";

export class LoginUseCase {
    private userRepository: UserRepository;

    constructor(readonly repositoryFactory: RepositoryFactory){
        this.userRepository = repositoryFactory.createUserRepository();
    }

    async execute(input: LoginUseCaseInput): Promise<LoginUseCaseOutput> {
        const user = await this.userRepository.getByUserName(input.username);
        const isValidPassword = await compare(input.password, user.getPassword());
        if (!isValidPassword){
            throw new Error("A senha não é válida");
        }
        const token = sign({
            id: user.getId,
            username: input.username,
            password: user.getPassword
        }, 'testar');
        return {
            token
        }
    }
}

