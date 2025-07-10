import express from 'express';
import * as controller from '../Controller/control.js';


const router =express.Router()


router
    .route('/')
    .get(controller.getHomePage);








export const  OperationalRouter =router;