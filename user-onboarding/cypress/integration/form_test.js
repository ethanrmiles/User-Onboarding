describe("Employee Onboarding App", () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    })
    
    const nameInput = () => cy.get('input[name=name]');
    const emailInput = () => cy.get('input[name=email]');
    const passwordInput = () => cy.get('input[name=email]');
    const submitButton = () => cy.get('button[id="submitBtn"]');
    const tOSBox = () => cy.get('input[type=checkbox]')
    
it('sanity check to make sure that tests work', () => {
    expect(1+2).to.equal(3);
    expect(2+2).not.to.equal(5)
})
//The Proper Elements are showing: 
it('The proper elements are showing', () => {
    nameInput().should('exist');
    emailInput().should('exist');
    passwordInput().should('exist');
    submitButton().should('exist');
    tOSBox().should('exist');
})
//Filling out elements 
describe('Filling out inputs work', () => {
    it('can navigates to the site', () => {
        cy.url().should('include', 'localhost');
    })
    it('Submit button starts out as disabled', () => {
        submitButton().should('be.disabled')
    })
    it('can type in the inputs', () => {
        nameInput().should('have.value', "").type('hey there').should('have.value', 'hey there')
        //
        emailInput().should('have.value', "").type('ethanrmiles').should('have.value', 'ethanrmiles')
        //
        passwordInput().should('have.value', "").type('aaaaaaaa').should('have.value', 'aaaaaaaa')
    })
    it('the submit button enables when all the inputs are filled out', () => {
        nameInput().type('hey')

        emailInput().type('hey@gmail.com')

        passwordInput().type('Howmanymistakeshavebeenmadeatthispoint?')
        //after the tests type in these boxes, the submit button should now be available 
        submitButton().should('not.be.disabled')
    })
    it('a user can check the terms of service box', () => {
        tOSBox().check()
    })
    it('a user can submit data', () => {
        nameInput().type('hey')

        emailInput().type('hey@gmail.com')

        passwordInput().type('Howmanymistakeshavebeenmadeatthispoint?')

        tOSBox().check()

        submitButton().click()

        //Check to make sure a post was made to the api 
        cy.get('@post').should('have.property', 'status', 201)
    })
    it('checks for form validation when an input is left empty', () => {
        passwordInput().type('aaa')

        cy.contains('password is too short- should be 8 characters minimum')
    })
}) //Connects to describe 'Filling out inputs work'. CLOSES OUT THIS DESCRIBE
})//FINAL CLOSING