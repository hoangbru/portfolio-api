import express from 'express';
import { create, get, getAll, remove, update } from '../controller/social.js'
import { checkPermission } from '../middlewares/checkPermission.js';

const router = express.Router();
router.get("/social", getAll)
router.get("/social/:id", get)
router.post("/social",checkPermission ,create)
router.delete("/social/:id",checkPermission, remove)
router.patch("/social/:id",checkPermission, update)

export default router;