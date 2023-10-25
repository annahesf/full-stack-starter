import assert from 'assert';
import _ from 'lodash';
import path from 'path';
import { v4 as uuid } from 'uuid';

import helper from '../helper.js';
import models from '../../models/index.js';

describe('models.Restaurants', () => {
  beforeEach(async () => {
    await helper.loadFixtures(['restaurants']);
  });

  it('creates a new Restaurant record', async () => {
    assert.deepStrictEqual(await models.Restaurant.count(),3);

    const record = await models.Restaurant.create({
      Name: 'This is a test restaurant',
      Rating: 5 ,


    });
    assert.deepStrictEqual(await models.Restaurant.count(), 4); 
    assert.notDeepStrictEqual(record.id, null);


    assert.deepStrictEqual(record.Name,'This is a test restaurant');
    // assert.deepStrictEqual(record.Rating, 5);
    // console.log(record);


  });

  it('find a record number by id', async() => {
    const record = await models.Restaurant.findByPk(10000);
    assert.notDeepStrictEqual(record,null);
    assert.deepStrictEqual(record.Name, 'Test Restaurant 0');

  });


  // it('finds multiple restaurant records', async() => {
  //   const records = await models.Restaurant.findAll();
  //    assert.deepStrictEqual(records.length, 3);
  //   });
    

  it('finds multiple restaurant records', async() => {
    const records = await models.Restaurant.findAll({
      order: [['Name', 'ASC']]
    });
    
  assert.deepStrictEqual(records.length,3);
  assert.deepStrictEqual(records[0].Name, 'Test Restaurant 0');
  
  });


  it('deleted a restaurant record', async() => {
    assert.deepStrictEqual(await models.Restaurant.count(), 3);
    const record = await models.Restaurant.findByPk(10000);
    await record.destroy();
    assert.deepStrictEqual(await models.Restaurant.count(),2);
  });

});