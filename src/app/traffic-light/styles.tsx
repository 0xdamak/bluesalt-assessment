import styled from "styled-components";

export const BackButton = styled.span`
  margin: 1.5rem;
  display: flex;
  font-size: 1rem;
  font-weight: 500;

  @media (max-width: 640px) {
    margin: 1rem;
  }

  > a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
  width: 100vw;
`;

export const Label = styled.div<{
  yAxis: "top" | "bottom";
}>`
  display: flex;
  justify-content: end;
  align-items: ${(props) => (props.yAxis === "top" ? "start" : "end")};
  height: 100%;
  width: 100%;
  padding: 1rem;
  font-weight: 600;

  @media (max-width: 640px) {
    padding: 1.5rem 0.75rem;
  }

  > h2 {
    font-size: 1.25rem;

    @media (max-width: 640px) {
      font-size: 0.875rem;
    }
  }
`;

export const Crossroad = styled.section`
  display: grid;
  grid-template-columns: 2fr 12.5rem 2fr;
  grid-template-rows: 1fr 12.5rem 1fr;
  justify-items: center;
  align-items: center;
  background-color: white;
  padding: 1.5rem;
  width: 100%;
  height: 100%;

  @media (max-width: 640px) {
    grid-template-columns: 2fr 6.25rem 2fr;
    grid-template-rows: 1fr 6.25rem 1fr;
    padding: 1rem;
  }

  > div:nth-child(even),
  > div:nth-child(5) {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: gray;
    width: 100%;
    height: 100%;
    padding: 1rem;
  }

  > div:nth-child(5) {
    flex-direction: column;
    gap: 0.75rem;
  }

  > div:nth-child(2),
  > div:nth-child(8) {
    border-left: 0.375rem solid green;
    border-right: 0.375rem solid green;
  }

  > div:nth-child(4),
  > div:nth-child(6) {
    border-top: 0.375rem solid green;
    border-bottom: 0.375rem solid green;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.625rem 1.25rem;
  font-size: 0.875rem;
  font-weight: 500;
  background-color: green;
  border-radius: 0.5rem;
  flex-shrink: 0;
  color: white;
  height: 3rem;
  width: 8rem;
  transition: background-color 0.3s ease;

  @media (max-width: 640px) {
    padding: 0;
    height: 2rem;
    width: 100%;
  }

  &:hover {
    background-color: darkgreen;
  }
`;
