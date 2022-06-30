import { v4 as uuidv4 } from 'uuid';

let items = [];

export const getItem = (request, response) => {
    response.send(items);
}

export const createItem = (request, response) => {
    const newItem = request.body;
    const id = uuidv4();
    const itemWithId = { ...newItem, id: id };

    items.push(itemWithId);

    response.send(`Todo item ${newItem.title} is added.`);
}

export const deleteItem = (request, response) => {
    const { id } = request.params;

    items = items.filter((item) => item.id !== id);

    response.send(`Todo item with ${id} is deleted.`);
}

export const updateItem = (request, response) => {
    const { itemId } = request.params;
    const { id, title, todo } = request.body;

    const foundedItem = items.find((item) => item.id === itemId);

    if (id) foundedItem.id = id;
    if (title) foundedItem.title = title;
    if (todo) foundedItem.todo = todo;

    response.send(`Todo item with ${id} is updated.`);
}