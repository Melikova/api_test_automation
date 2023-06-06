const axios = require('axios');
const {expect} = require('chai');
const {faker} = require('@faker-js/faker');

describe("DELETE API Request Tests", async()=>{
    it.skip('should be able to delete user', async()=>{
        const res = await axios.delete('https://reqres.in/api/users/2');
        console.log(res.data);
        expect(res.status).equal(204);
    })
})