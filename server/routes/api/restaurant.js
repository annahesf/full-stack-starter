import express from 'express';
import { StatusCodes } from 'http-status-codes';
import _ from 'lodash';

import models from '../../models/index.js';
import interceptors from '../interceptors.js';
import helpers from '../helpers.js';

const router = express.Router();


//read items on db
router.get('/', async (req, res) => {
    const records = await models.Restaurant.findAll();
    res.json(records.map((r) => r.toJSON()));

});

router.get('/:id', async (req, res) => {
    try {
        const record = await models.Restaurant.findByPk(req.params.id);
        res.json(record.toJSON());
    }catch (err) {
        console.log(err);
        res.status(StatusCodes.INTERNAL_SERVICE_ERROR).end();
    }
});




export default router;