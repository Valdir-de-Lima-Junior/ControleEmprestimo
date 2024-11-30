import { config } from "dotenv";
import express from 'express';
import { ItemController } from './application/controller/item-controller';
import { PostgresConnection } from './infra/database/postgres-connection';
import { DatabaseRepositoryFactory } from './infra/database/database-repository-factory';
import ItemRepositoryDatabase from './infra/repository/database/item-repository-database';
import ItemTypeRepositoryDatabase from './infra/repository/database/itemType-repository-database';
import PersonRepositoryDatabase from './infra/repository/database/person-repository-database';
import UserRepositoryDatabase from './infra/repository/database/user-repository-database';
import LoanRepositoryDatabase from './infra/repository/database/loan-repository-database';
import { itemTypeController } from './application/controller/itemType-controller';
import { PersonController } from './application/controller/person-controller';
import { UserController } from './application/controller/user-controller';
import { LoanController } from './application/controller/loan-controller';

config();
const app = express();
const port = 3011;

app.use(express.json())

app.all('*', function (request, response, next){
        response.header('Acess-Control-Allow-Origin', '*');
        response.header('Acess-Control-Allow-Methods', 'PUT, GET, POST, OPTIONS');
        response.header('Acess-Control-Allow-Headers', 'Content-Type, acess-token');
        next();
});

const dataConnection = {
    user: process.env.DB_USERNAME || '',
	password: process.env.DB_PASSWORD || '',
	database: process.env.DB_DATABASE || '',
	host: process.env.DB_HOST || '',
	port: process.env.DB_PORT || ''
}

console.log(dataConnection)
const connectionPostgreSQL = new PostgresConnection(dataConnection);

const repositoryFactory = new DatabaseRepositoryFactory(connectionPostgreSQL);
const itemRepository = new ItemRepositoryDatabase(connectionPostgreSQL);
const itemTypeRepository = new ItemTypeRepositoryDatabase(connectionPostgreSQL);
const personRepository = new PersonRepositoryDatabase(connectionPostgreSQL);
const userRepository = new UserRepositoryDatabase(connectionPostgreSQL);
const loanRepository = new LoanRepositoryDatabase(connectionPostgreSQL);

const itemsTypeController = new itemTypeController(repositoryFactory, itemTypeRepository);
const itemsController = new ItemController(repositoryFactory, itemRepository, itemTypeRepository);
const peopleController = new PersonController(repositoryFactory, personRepository);
const usersController = new UserController(repositoryFactory, userRepository, personRepository);
const loansControler = new LoanController(repositoryFactory,itemRepository,userRepository,personRepository,loanRepository)

app.get('/items', async (request, response) => {
    response.send(await itemsController.getAll({}));
});

app.get('/items/:id', async (request, response) => {
    const id = request.params.id;
    response.send(await itemsController.getByID(id));
});

app.delete('/items/:id', async (request, response) => {
    const id = request.params.id;
    response.send(itemsController.delete(id));
});

app.put('/items/:id', async(request, response) => {
    const id = request.params.id;
    const body = request.body;
    response.send(await itemsController.update({id, ...body}));
});

app.post('/items', async (request, response) => {
    response.send(await itemsController.create(request.body));
});

//---------------------------------

app.get('/items_type', async (request, response) => {
    response.send(await itemsTypeController.getAll({}));
});

app.get('/items_type/:id', async (request, response) => {
    const id = request.params.id;
    response.send(await itemsTypeController.getById(id));
});

app.delete('/items_type/:id', async (request, response) => {
    const id = request.params.id;
    response.send(itemsTypeController.delete(id));
});

app.put('/items_type/:id', async(request, response) => {
    const id = request.params.id;
    const body = request.body;
    response.send(await itemsTypeController.update({id, ...body}));
});

app.post('/items_type', async (request, response) => {
    response.send(await itemsTypeController.create(request.body));
});

//---------------------------------

app.get('/people', async (request, response) => {
    response.send(await peopleController.getAll({}));
});

app.get('/people/:id', async (request, response) => {
    const id = request.params.id;
    response.send(await peopleController.getByID(id));
});

app.delete('/people/:id', async (request, response) => {
    const id = request.params.id;
    response.send(peopleController.delete(id));
});

app.put('/people/:id', async(request, response) => {
    const id = request.params.id;
    const body = request.body;
    response.send(await peopleController.update({id, ...body}));
});

app.post('/people', async (request, response) => {
    response.send(await peopleController.create(request.body));
});

//---------------------------------

app.get('/users', async (request, response) => {
    response.send(await usersController.getAll({}));
});

app.get('/user/:id', async (request, response) => {
    const id = request.params.id;
    response.send(await usersController.getByID(id));
});

app.delete('/users/:id', async (request, response) => {
    const id = request.params.id;
    response.send(usersController.delete(id));
});

app.put('/users/:id', async(request, response) => {
    const id = request.params.id;
    const body = request.body;
    response.send(await usersController.update({id, ...body}));
});

app.post('/users', async (request, response) => {
    response.send(await usersController.create(request.body));
});

//---------------------------------

app.get('/loans', async (request, response) => {
    response.send(await loansControler.getAll({}));
});

app.get('/loans/:id', async (request, response) => {
    const id = request.params.id;
    response.send(await loansControler.getByID(id));
});

app.delete('/loans/:id', async (request, response) => {
    const id = request.params.id;
    response.send(loansControler.delete(id));
});

app.put('/loans/:id', async(request, response) => {
    const id = request.params.id;
    const body = request.body;
    response.send(await loansControler.update({id, ...body}));
});

app.post('/loans', async (request, response) => {
    response.send(await loansControler.create(request.body));
});

app.listen(port, () => {
    console.log("Servido Inciado na porta: " + port)
})