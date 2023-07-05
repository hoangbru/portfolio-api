import express from 'express';
import { create, get, getAll, remove, update } from '../controller/technologies.js'
import { checkPermission } from '../middlewares/checkPermission.js';

const router = express.Router();
router.get("/technologies",getAll)
router.get("/technologies/:id", get)
router.post("/technologies",checkPermission ,create)
router.delete("/technologies/:id",checkPermission, remove)
router.patch("/technologies/:id",checkPermission, update)

export default router;