#!/usr/bin/env node

import fetch from 'node-fetch';
import models from '../models/index.js';

console.log('testing from import-table.js!');

const token = 'pat1ShQoUT7Kinm8O.dfa6cc12ac6a940373c3586f5625ed778fac961d716be953c863932fc8947676'
const url = 'https://api.airtable.com/v0/appFMUE36vJvoAUrE/Restaurants?view=Grid%20view'
fetch(url, {
    headers: { Authorization: `Bearer ${token}` }
})
    .then((response) => response.json())
    .then(async (data) => {
        for (const record of data.records) {
            await models.Restaurant.create({
                Name: record.fields.Name,
                Rating: record.fields.Rating,

            });

        }
    });

