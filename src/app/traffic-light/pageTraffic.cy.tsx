import Traffic from "./page";

describe("<Traffic />", () => {
  const gray = "rgb(128, 128, 128)";
  const green = "rgb(0, 128, 0)";
  const yellow = "rgb(255, 255, 0)";
  const red = "rgb(255, 0, 0)";

  it("renders", () => {
    cy.mount(<Traffic />);
  });

  it("renders traffic lights for both streets", () => {
    cy.mount(<Traffic />);
    cy.get('[data-testid="traffic-light-street-a"]').should("exist");
    cy.get('[data-testid="traffic-light-street-b"]').should("exist");
  });

  it("starts the traffic light sequence when Start button is clicked", () => {
    cy.mount(<Traffic />);
    cy.get("button").contains("Start").click();

    cy.wait(1000);
    cy.get('[data-testid="red-light"]')
      .should("have.css", "background-color")
      .and("equal", gray);
    cy.get('[data-testid="yellow-light"]')
      .should("have.css", "background-color")
      .and("equal", gray);
    cy.get('[data-testid="green-light"]')
      .should("have.css", "background-color")
      .and("equal", green);

    cy.wait(10000);
    cy.get('[data-testid="green-light"]')
      .should("have.css", "background-color")
      .and("equal", gray);
    cy.get('[data-testid="yellow-light"]')
      .should("have.css", "background-color")
      .and("equal", yellow);

    cy.wait(5000);
    cy.get('[data-testid="yellow-light"]')
      .should("have.css", "background-color")
      .and("equal", gray);
    cy.get('[data-testid="red-light"]')
      .should("have.css", "background-color")
      .and("equal", red);
  });

  it("resets the traffic light sequence when Reset button is clicked", () => {
    cy.mount(<Traffic />);

    cy.get("button").contains("Start").click();
    cy.wait(3000);

    cy.get("button").contains("Reset").click();

    cy.get('[data-testid="traffic-light-street-a"] [data-testid="green-light"]')
      .should("have.css", "background-color")
      .and("equal", green);
    cy.get('[data-testid="traffic-light-street-b"] [data-testid="red-light"]')
      .should("have.css", "background-color")
      .and("equal", red);

    cy.get(
      '[data-testid="traffic-light-street-a"] [data-testid="yellow-light"]',
    )
      .should("have.css", "background-color")
      .and("equal", gray);
    cy.get('[data-testid="traffic-light-street-a"] [data-testid="red-light"]')
      .should("have.css", "background-color")
      .and("equal", gray);

    cy.get('[data-testid="traffic-light-street-b"] [data-testid="green-light"]')
      .should("have.css", "background-color")
      .and("equal", gray);
    cy.get(
      '[data-testid="traffic-light-street-b"] [data-testid="yellow-light"]',
    )
      .should("have.css", "background-color")
      .and("equal", gray);
  });
});
