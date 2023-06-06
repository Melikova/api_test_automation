const axios = require('axios');
const {expect} = require('chai');
const {faker} = require('@faker-js/faker');

describe("PATCH API Request Tests", async()=>{
    it('should be able to update user details', async()=>{
        const randomeName = faker.person.firstName();
        const res = await axios.patch('https://reqres.in/api/users/2', {"first_name": randomeName});
        console.log(res.data);
        expect(res.data.first_name).equal(randomeName);
    })
})