import assert from 'assert';
import _ from 'lodash';
import path from 'path';
import { v4 as uuid } from 'uuid';

import helper from '../helper.js';
import models from '../../models/index.js';

describe('models.Restaurants', () => {
  beforeEach(async () => {
    await helper.loadFixtures([]);
  });

  it('creates a new Restaurants record', async () => {
    assert.deepStrictEqual(await models.Restaurant.count(),0);

    const record = await models.Restaurant.create({
      Name: 'This is a test restaurant',
      Rating: 5 ,


    });
    assert.deepStrictEqual(await models.Restaurant.count(), 1); 
    assert.notDeepStrictEqual(record.id, null);


    assert.deepStrictEqual(record.Name,'This is a test restaurant');
    // assert.deepStrictEqual(record.Rating, 5);
    // console.log(record);


  });
});