describe("My First Test", function() {
  it("Does not do much!", function() {
    expect(true).to.equal(true)
  })
})

describe("Visits main pages", function() {
  it("Visits Home Page", function() {
    cy.visit("http://localhost:8000/")
    cy.visit("http://localhost:8000/home")
  })
  it("Visits Projects Page", function() {
    cy.visit("http://localhost:8000/projects")
  })
  it("Visits Blog Page", function() {
    cy.visit("http://localhost:8000/blog")
  })
})

describe("Home Page", function() {
  beforeEach(function() {
    cy.visit("http://localhost:8000/")
  })
  describe("Icons Clickable", function() {
    it("github", function() {
      cy.get("[data-cy=github]")
        .should("have.attr", "href")
        .and("include", "https://github.com/alexabush")
      cy.get("[data-cy=github]")
        .should("have.prop", "href")
        .and("equal", "https://github.com/alexabush")
    })
    it("linkedin", function() {
      cy.get("[data-cy=linkedin]")
        .should("have.attr", "href")
        .and("include", "https://www.linkedin.com/in/alexabush/")
    })
    it("email", function() {
      cy.get("[data-cy=email]")
        .should("have.attr", "href")
        .and("include", "mailto:alexabush7@gmail.com")
    })
    it("resume", function() {
      cy.get("[data-cy=resume]")
        .should("have.attr", "href")
        .and("include", "https://alex-bush-resume.alexanderbush7.now.sh/")
    })
  })
  describe("Portfolio Items Clickable", function() {})
})

// cy.get('#users')
//         // the href 'attribute' will only ever be what the
//         // literal value is on the element itself and will
//         // match what was served by the <html> payload
//         .should('have.attr', 'href')
//         .and('include', 'users.html')

//       cy.get('#users')
//         // an <a> also has an 'href' property which always resolves
//         // to the fully qualified URL. by asserting on this property
//         // we are testing this element more thoroughly
//         .should('have.prop', 'href')
//         .and('equal', 'http://localhost:7078/users.html')

// describe('Todo functionality works', function() {
//   beforeEach(function() {
//     //   // reset and seed the database prior to every test
//     cy.request('http://localhost:3000/messages/seed-db');
//     cy.visit('http://localhost:3000/');
//   });
//   it('exists', () => {});
//   it('adds item', function() {
//     cy.get('input').type('hi mom!');
//     cy.contains('Submit').click();
//     cy.get('ul')
//       .find('li')
//       .its('length');
//   });
//   it('deletes item', function() {
//     cy.get('.delete-icon')
//       .last()
//       .click();
//     cy.get('ul')
//       .find('li')
//       .its('length');
//     //   .should('be.lte', 8);
//   });
//   it('updates item', function() {
//     cy.get('li')
//       .contains('hi mom!')
//       .last()
//       .click();
//     cy.get('input')
//       .first()
//       .click()
//       .clear()
//       .type('see you soon!');
//     cy.contains('Update').click();
//   });
// });
