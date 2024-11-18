import { User } from "../../../domain/entity/user";
import { UserRepository } from "../../../domain/repository/user-repository";
import { Connection } from "../../database/connection";

export default class UserRepositoryDatabase implements UserRepository{
    constructor(private connection: Connection){}
    
    getAll(): Promise<User[]> {
        throw new Error("Method not implemented.");
    }
    getById(id: string): Promise<User> {
        throw new Error("Method not implemented.");
    }
    getByUserName(userName: string): Promise<User> {
        throw new Error("Method not implemented.");
    }
    create(item: User): Promise<void> {
        throw new Error("Method not implemented.");
    }
    update(item: User): Promise<void> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
    
}