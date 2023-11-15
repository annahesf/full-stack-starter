import assert from 'assert';
import { StatusCodes } from 'http-status-codes';
import _ from 'lodash';
import session from 'supertest-session';


import helper from '../../helper.js';
import app from '../../../app.js';


describe('/api/restaurants', () => {
    let testSession;

    beforeEach(async () => {
        await helper.loadFixtures(['restaurants']);
        testSession = session(app);

    });

    it('fetch all restaurants from restaurant table',async () => {
        const response = await testSession.get('/api/restaurant').expect(StatusCodes.OK);
        assert.deepStrictEqual(response.status, StatusCodes.OK);
        assert.deepStrictEqual(response.body?.length,3);
    });

    it('fetch one restaurant from the table', async () => {
        const response = await testSession.get('/api/restaurant/10001').expect(StatusCodes.OK);
        console.log(console.body);
        assert.deepStrictEqual(response.body?.Name, 'Test Restaurant 1');


    });
});

