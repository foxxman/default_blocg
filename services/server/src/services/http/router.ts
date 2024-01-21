import { Router } from 'express';
import { authRouter } from '../../routes/root/auth/router';

const router = Router({ mergeParams: true });

router.use("/auth", authRouter);

export default router;