import { User } from "../entity/user";

export interface UserRepository{
    getAll(): User[];
    getById(id: string): User;
    getByUserName(userName: string): User;
    create(item: User): void;
    update(item: User): void;
    
}