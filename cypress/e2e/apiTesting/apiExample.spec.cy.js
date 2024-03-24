const userName = "Test" + Date.now()
const emailId = userName + "@gmail.com"
let userId

describe('API Testing', () => {

    it('User should fetch the data', () => {
        cy.request({
            method: 'GET',
            url: `https://gorest.co.in/public/v2/users`,
            headers: {
                'authorization': 'Bearer ' + Cypress.env('ACCESS_TOKEN'), // Generate access token from https://gorest.co.in/consumer/login and add the same to cypress.env.json
            }
        }).then((response) => {
            cy.task('log', 'Get response: ' + JSON.stringify(response.body))
            expect(response).to.have.property('status').to.equal(200)
        })
    })

    it('User should create the user', () => {
        cy.request({
            method: 'POST',
            url: 'https://gorest.co.in/public/v2/users',
            headers: {
                'authorization': 'Bearer ' + Cypress.env('ACCESS_TOKEN'), // Generate access token from https://gorest.co.in/consumer/login and add the same to cypress.env.json
            },
            body: {
                "name": userName,
                "gender": "male",
                "email": emailId,
                "status": "active"
            }
        }).then((response) => {
            cy.task('log', 'Created responce: ' + JSON.stringify(response.body))
            expect(response).to.have.property('status').to.equal(201)
            expect(response.body).to.have.property('id').to.not.be.oneOf([null, ""])
            expect(response.body).to.have.property('name').to.equal(userName)
            expect(response.body).to.have.property('email').to.equal(emailId)
            userId = response.body.id;
            cy.task('log', 'Created a new user with id: ' + userId)
        })
    })

    it('User should fetch the user data', () => {
        cy.request({
            method: 'GET',
            url: `https://gorest.co.in/public/v2/users/${userId}`,
            headers: {
                'authorization': 'Bearer ' + Cypress.env('ACCESS_TOKEN'), // Generate access token from https://gorest.co.in/consumer/login and add the same to cypress.env.json
            }
        }).then((response) => {
            cy.task('log', 'Get response: ' + JSON.stringify(response.body))
            expect(response).to.have.property('status').to.equal(200)
            expect(response.body).to.have.property('name').to.equal(userName)
            expect(response.body).to.have.property('email').to.equal(emailId)
            cy.task('log', 'Retrieved user with id: ' + userId)
        })
    })

    it('User should update the user data', () => {
        let name = "Update" + Date.now()
        let email = `Update${Date.now()}@gmail.com`
        cy.request({
            method: 'PUT',
            url: `https://gorest.co.in/public/v2/users/${userId}`,
            headers: {
                'authorization': 'Bearer ' + Cypress.env('ACCESS_TOKEN'), // Generate access token from https://gorest.co.in/consumer/login and add the same to cypress.env.json
            },
            body: {
                "name": `${name}`,
                "gender": "male",
                "email":  `${email}`,
                "status": "active"
            }
        }).then((response) => {
            cy.task('log', 'Put response: ' + JSON.stringify(response.body))
            expect(response).to.have.property('status').to.equal(200)
            expect(response.body).to.have.property('name').to.equal(name)
            expect(response.body).to.have.property('email').to.equal(email)
            cy.task('log', 'Updated user with id: ' + userId)
        })
    })

    it('User should delete the user', () => {
        cy.request({
            method: 'DELETE',
            url: `https://gorest.co.in/public/v2/users/${userId}`,
            headers: {
                'authorization': 'Bearer ' + Cypress.env('ACCESS_TOKEN'), // Generate access token from https://gorest.co.in/consumer/login and add the same to cypress.env.json
            }
        }).then((response) => {
            cy.task('log', 'Deleted response: ' + JSON.stringify(response.body))
            expect(response).to.have.property('status').to.equal(204)
            expect(response.body).to.be.empty
            cy.task('log', 'Deleted user with id: ' + userId)
        })
    })
    
})

