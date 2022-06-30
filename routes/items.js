import express from "express";
import { getItem, createItem, deleteItem, updateItem } from "../controllers/items.js";

const router = express.Router();

router.get('/items', getItem);

router.post('/items', createItem);

router.delete('/items/:id', deleteItem);

router.patch('/items/:id', updateItem);

export default router;