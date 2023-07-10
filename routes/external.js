import express from 'express';
import { create, get, getAll, remove, update } from '../controller/external.js'
import { checkPermission } from '../middlewares/checkPermission.js';

const router = express.Router();
router.get("/external", getAll)
router.get("/external/:id", get)
router.post("/external",checkPermission ,create)
router.delete("/external/:id",checkPermission, remove)
router.patch("/external/:id",checkPermission, update)

export default router;