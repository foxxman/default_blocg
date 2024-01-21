import { Router } from 'express';

import * as schemeValidator from './schemeValidator'
import * as controller from './controller'
import * as dataValidator from './dataValidator';

import { withEmailUserHttp } from '../../../validators/withEmailUser';
import { withLoginUserHttp } from '../../../validators/withLoginUser';

import { HTTP_AUTH_ROUTES } from '../../../const/http/auth';

const router = Router({ mergeParams: true });

router.post(
    HTTP_AUTH_ROUTES.SIGN_UP, 
    schemeValidator.signUp,
    withEmailUserHttp,
    withLoginUserHttp,
    dataValidator.signUp,
    controller.signUp,
);

// router.addRoute(
//     { 
//         path: EVENTS_FROM_CLIENT.SIGN_IN,
//     },
//     schemeValidator.signIn,
//     controller.signIn,
// );

export const authRouter = router;
