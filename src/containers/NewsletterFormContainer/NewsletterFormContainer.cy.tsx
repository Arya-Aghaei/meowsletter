import NewsletterFormContainer from "./NewsletterFormContainer";
import { mount } from "cypress/react18";

const callApiWithDelay = () => {
  // delay response time to check loading state
  return cy
    .intercept({ method: "POST", url: "**/newsletter" }, () => {
      return Cypress.Promise.delay(3000).then((req: any) => {
        console.log(req);
        return req?.continue;
      });
    })
    .as("newsletter");
};

describe("Newsletter form should renders properly and loading state works", () => {
  it("renders", () => {
    mount(<NewsletterFormContainer />);

    cy.get('[data-testid="input-name"]')
      .should("exist")
      .type("John Doe")
      .should("have.value", "John Doe");
    cy.get('[data-testid="input-email"]')
      .should("exist")
      .type("John")
      .should("have.value", "John");
    cy.get('[data-testid="select-language"]')
      .should("exist")
      .select("de")
      .should("have.value", "de");
    cy.get('[data-testid="select-time"]')
      .should("exist")
      .select("MM")
      .should("have.value", "MM");

    callApiWithDelay();
    cy.get('[data-testid="submit-btn"]').should("exist").click();
    cy.get('[data-testid="btn-loading"]').should("exist");
  });
});

describe("Newsletter form should submit correctly and render subscribed", () => {
  it("success response", () => {
    mount(<NewsletterFormContainer />);

    cy.get('[data-testid="input-name"]')
      .should("exist")
      .type("John Doe")
      .should("have.value", "John Doe");
    cy.get('[data-testid="input-email"]')
      .should("exist")
      .type("John@doe.com")
      .should("have.value", "John@doe.com");
    cy.get('[data-testid="select-language"]')
      .should("exist")
      .select("de")
      .should("have.value", "de");
    cy.get('[data-testid="select-time"]')
      .should("exist")
      .select("MM")
      .should("have.value", "MM");

    callApiWithDelay();
    cy.get('[data-testid="submit-btn"]').should("exist").click();
    cy.get('[data-testid="subscribed-message"]').should("exist");
    cy.get('[data-testid="subscribed-button"]').should("exist");
  });
});

describe("Newsletter form without email should have error", () => {
  it("error displayed", () => {
    mount(<NewsletterFormContainer />);

    cy.get('[data-testid="select-time"]')
      .should("exist")
      .select("MM")
      .should("have.value", "MM");

    callApiWithDelay();
    cy.get('[data-testid="submit-btn"]').should("exist").click();
    cy.get('[data-testid="error-message-email"]')
      .should("exist")
      .should("have.text", "Please enter your email");
  });
});

describe("Newsletter form without time should have error", () => {
  it("error displayed", () => {
    mount(<NewsletterFormContainer />);

    cy.get('[data-testid="input-email"]')
      .should("exist")
      .type("John@doe.com")
      .should("have.value", "John@doe.com");

    callApiWithDelay();
    cy.get('[data-testid="submit-btn"]').should("exist").click();
    cy.get('[data-testid="error-message-time"]')
      .should("exist")
      .should("have.text", "Please select a time");
  });
});

describe("Newsletter form without email and time should have error", () => {
  it("error displayed", () => {
    mount(<NewsletterFormContainer />);

    callApiWithDelay();
    cy.get('[data-testid="submit-btn"]').should("exist").click();
    cy.get('[data-testid="error-message-email"]')
      .should("exist")
      .should("have.text", "Please enter your email");
    cy.get('[data-testid="error-message-time"]')
      .should("exist")
      .should("have.text", "Please select a time");
  });
});

describe("Newsletter form with wrong language and time should have error", () => {
  it("error displayed", () => {
    mount(<NewsletterFormContainer />);

    cy.get('[data-testid="input-email"]')
      .should("exist")
      .type("John@doe.com")
      .should("have.value", "John@doe.com");
    cy.get('[data-testid="select-language"]')
      .should("exist")
      .select("af")
      .should("have.value", "af");
    cy.get('[data-testid="select-time"]')
      .should("exist")
      .select("TE")
      .should("have.value", "TE");

    callApiWithDelay();
    cy.get('[data-testid="submit-btn"]').should("exist").click();
    cy.get('[data-testid="error-message-language"]')
      .should("exist")
      .should("have.text", "Language must be en-gb (British English), en-us (American English), de (German) or fa (Persian)");
    cy.get('[data-testid="error-message-time"]')
      .should("exist")
      .should("have.text", "Time must be MM (Monday Morning), WM (Wednesday Morning) or SE (Sunday Evening)");
 
  });
});
