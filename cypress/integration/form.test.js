it("sanity check", () => {
    expect(8 + 5).to.equal(13)
})


describe("simple friend form", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/")
    })
    it("can visit home page", () => {
        cy.contains("Create a Friend")
        // const submitButton = () => cy.get('[data-test-id="submitBtn"]')
        // submitButton().should(`be.disabled`)
    })

    it("can run simple tests", () => {
        const submitButton = () => cy.get('[data-test-id="submitBtn"]')
        submitButton().should(`be.disabled`)
        cy.get(`[data-test-id="fullname"]`).type("James Bond")
        cy.get(`[data-test-id="email"]`).type("jamesbond@007.com")
        cy.get(`[data-test-id="password"]`).type("jamesbond007")
        cy.get(`[data-test-id="accepted"]`).click()
        submitButton().should(`not.be.disabled`)
        submitButton().click()

    })



    // it("can put an email in text box", () => {
    //     cy.get(`[data-test-id="email"]`).type("jamesbond@007.com")
    // })
    // it("can enter a password in textbox", () => {
    //     cy.get(`[data-test-id="password"]`).type("jamesbond007")
    // })
    // it("accepts terms", () => {
    //     cy.get(`[data-test-id="accepted"]`).click()
    //     submitButton().should(`not.be.disabled`)
    //     submitButton().click()
    // })
    // it("can order a pizza", () => {
    //     cy.get(`[data-test-id="pizza"]`).click()
    //     cy.contains(`Create your pizza!`)
    //     const submitBtn = () => cy.get(`[data-test-id="submitBtn"]`)
    //     submitBtn().should(`be.disabled`)
    //     cy.get('select').select('Small')
    //     cy.get(`[data-test-id="fullname"]`).type("James Bond")
    //     cy.get('[type="checkbox"]').check()
    //     cy.get('[type="radio"]').first().check()
    //     cy.get('form').contains('Add to Order').click()
    //     submitBtn().should(`not.be.disabled`)
    // })
})

