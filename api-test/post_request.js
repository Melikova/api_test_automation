const axios = require('axios');
const {expect} = require('chai');
const {faker} = require('@faker-js/faker');

describe("POST API Request Tests", async()=>{
    it('should be able to post user details', async()=>{
        const randomeName = faker.person.fullName();
        const randomeJobTitle = faker.person.jobTitle();
        const res = await axios.post('https://reqres.in/api/users', {"name": randomeName, "job": randomeJobTitle});
        console.log(res.data);
        expect(res.data.name).equal(randomeName);
        expect(res.data.job).equal(randomeJobTitle);
    })
})