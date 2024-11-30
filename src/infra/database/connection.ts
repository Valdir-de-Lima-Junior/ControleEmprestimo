export interface Connection {
    getRepository(ItemType: any): unknown;
    execute(statement: string, params?: any[]): Promise<any[]>;
    close(): Promise<void>;
}