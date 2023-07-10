import express from 'express';
import { create, get, getAll, remove, update } from '../controller/info.js'
import { checkPermission } from '../middlewares/checkPermission.js';

const router = express.Router();
router.get("/info", getAll)
router.get("/info/:id", get)
router.post("/info",checkPermission ,create)
router.delete("/info/:id",checkPermission, remove)
router.patch("/info/:id",checkPermission, update)

export default router;