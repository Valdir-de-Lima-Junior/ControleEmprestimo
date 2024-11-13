import { User } from "../entity/user";

export interface UserRepository{
    getAll(): Promise<User[]>;
    getById(id: string): Promise<User>;
    getByUserName(userName: string): Promise<User>;
    create(item: User): Promise<void>;
    update(item: User): Promise<void>;
    delete(id: string): Promise<void>;
}