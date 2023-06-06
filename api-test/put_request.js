const axios = require('axios');
const {expect} = require('chai');
const {faker} = require('@faker-js/faker');

describe("PUT API Request Tests", async()=>{
    it('should be able to update user details', async()=>{
        const randomeName = faker.person.firstName();
        const randomeJobTitle = faker.person.jobTitle();
        const res = await axios.put('https://reqres.in/api/users/2', {"first_name": randomeName, "job": randomeJobTitle});
        console.log(res.data);
        expect(res.data.first_name).equal(randomeName);
        expect(res.data.job).equal(randomeJobTitle);
    })
})