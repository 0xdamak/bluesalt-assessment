"use client";

import { useTrafficLight } from "@/hooks/useTrafficLight";
import { TrafficLight } from "@/src/components/TrafficLight.tsx";
import { Wrapper, Crossroad, Button, Label, BackButton } from "./styles";
import LeftChevron from "@/public/svgs/left-chevron.svg";
import Link from "next/link";

export default function Traffic(): JSX.Element {
  const { streetA, streetB, start, reset, timer } = useTrafficLight();

  return (
    <>
      <BackButton>
        <Link href="/">
          <LeftChevron className="h-3 w-3" />
          <p>Back</p>
        </Link>
      </BackButton>
      <Wrapper>
        <Crossroad>
          <Label yAxis="top">
            <h2>Street A</h2>
          </Label>
          <div data-testid="traffic-light-street-a">
            <TrafficLight activeLight={streetA} timer={timer} />
          </div>
          <Label yAxis="bottom">
            <h2>Street B</h2>
          </Label>
          <div data-testid="traffic-light-street-b">
            <TrafficLight activeLight={streetB} timer={timer} />
          </div>
          <div>
            <Button onClick={start}>Start</Button>
            <Button onClick={reset}>Reset</Button>
          </div>
          <div data-testid="traffic-light-street-b">
            <TrafficLight activeLight={streetB} timer={timer} />
          </div>
          <div />
          <div data-testid="traffic-light-street-a">
            <TrafficLight activeLight={streetA} timer={timer} />
          </div>
        </Crossroad>
      </Wrapper>
    </>
  );
}
