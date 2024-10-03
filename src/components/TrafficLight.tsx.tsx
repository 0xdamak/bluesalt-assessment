import React from "react";
import styled from "styled-components";

interface TrafficLightProps {
  activeLight: "red" | "yellow" | "green";
  timer: number;
}

const TrafficLightContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  width: 3.125rem;
  padding: 0.625rem;
  background-color: orange;
  border-radius: 0.625rem;
`;

const Light = styled.div<{
  isActive: boolean;
  backgroundColor: string;
  color?: string;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.125rem;
  height: 2.125rem;
  border-radius: 50%;
  font-weight: 600;
  font-size: 1.25rem;
  color: ${(props) => props.color ?? "white"};
  background-color: ${(props) =>
    props.isActive ? props.backgroundColor : "gray"};
  transition: background-color 0.5s ease;

  @media (max-width: 640px) {
    width: 2rem;
    height: 2rem;
    font-size: 0.875rem;
  }
`;

export function TrafficLight({
  activeLight,
  timer = 9,
}: TrafficLightProps): JSX.Element {
  return (
    <TrafficLightContainer>
      <Light backgroundColor="red" isActive={activeLight === "red"}>
        {activeLight === "red" && timer}
      </Light>
      <Light
        backgroundColor="yellow"
        color="black"
        isActive={activeLight === "yellow"}
      >
        {activeLight === "yellow" && timer}
      </Light>
      <Light backgroundColor="green" isActive={activeLight === "green"}>
        {activeLight === "green" && timer}
      </Light>
    </TrafficLightContainer>
  );
}
