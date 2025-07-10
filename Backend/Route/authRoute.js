import express from 'express'

import * as authControl from '../Controller/authControl.js';

const router = express.Router();


router
    .route('/api/user/register')
    .post(authControl.registerUser)

router
    .route('/api/user/login')
    .post(authControl.loginUser)





export const  AuthRouter  = router;


