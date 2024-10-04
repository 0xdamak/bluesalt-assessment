import { TrafficLight } from "./TrafficLight.tsx";

describe("<TrafficLight />", () => {
  it("renders the TrafficLight component", () => {
    cy.mount(<TrafficLight activeLight="red" timer={10} />);
    cy.get('[data-testid="red-light"]').should("exist");
  });

  it('shows red light as active when activeLight is "red"', () => {
    cy.mount(<TrafficLight activeLight="red" timer={9} />);
    cy.get('[data-testid="red-light"]').contains(9);
    cy.get('[data-testid="red-light"]').should(
      "have.css",
      "background-color",
      "rgb(255, 0, 0)",
    );
  });

  it('shows yellow light as active when activeLight is "yellow"', () => {
    cy.mount(<TrafficLight activeLight="yellow" timer={5} />);
    cy.get('[data-testid="yellow-light"]').contains(5);
    cy.get('[data-testid="yellow-light"]').should(
      "have.css",
      "background-color",
      "rgb(255, 255, 0)",
    );
  });

  it('shows green light as active when activeLight is "green"', () => {
    cy.mount(<TrafficLight activeLight="green" timer={7} />);
    cy.get('[data-testid="green-light"]').contains(7);
    cy.get('[data-testid="green-light"]').should(
      "have.css",
      "background-color",
      "rgb(0, 128, 0)",
    );
  });

  it("shows gray background for inactive lights", () => {
    cy.mount(<TrafficLight activeLight="yellow" timer={5} />);
    cy.get('[data-testid="red-light"]').should(
      "have.css",
      "background-color",
      "rgb(128, 128, 128)",
    );
    cy.get('[data-testid="green-light"]').should(
      "have.css",
      "background-color",
      "rgb(128, 128, 128)",
    );
  });

  it("adjusts size and font on smaller screens", () => {
    cy.viewport(640, 480);
    cy.mount(<TrafficLight activeLight="green" timer={3} />);
    cy.get('[data-testid="green-light"]').should("have.css", "width", "32px");
    cy.get('[data-testid="green-light"]').should("have.css", "height", "32px");
  });
});
