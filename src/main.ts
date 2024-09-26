import express from 'express';
import { ItemController } from './application/controller/item-controller';
import { ItemRepositoryMemory } from './infra/repository/memory/item-repository-memory';

const app = express();
const port = 3011;

app.use(express.json())

const itemRepositoryMemory = new ItemRepositoryMemory();
const itemTypeRepositoryMemory = new ItemTypeRepositoryMemory();

const itemsController = new ItemController(itemRepositoryMemory, itemTypeRepositoryMemory)

app.get('/items', (request, response) => {    
    response.send(itemsController.getAll({}));
});

app.post('/items', (request, response) => {    
    response.send(itemsController.create(request.body));
})


app.listen(port, () => {
    console.log("Servidor iniciado na porta " + port)
})