import { useState, useEffect } from "react";

type TrafficLightState = "green" | "yellow" | "red";

interface UseTrafficLightReturn {
  streetA: TrafficLightState;
  streetB: TrafficLightState;
  reset: () => void;
  start: () => void;
  timer: number;
}

const HALF_CYCLE = 5;
const FULL_CYCLE = 10;

export function useTrafficLight(): UseTrafficLightReturn {
  const [streetA, setStreetA] = useState<TrafficLightState>("green");
  const [streetB, setStreetB] = useState<TrafficLightState>("red");
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [timer, setTimer] = useState<number>(0);

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;
    let countdown: NodeJS.Timeout | undefined;

    if (isRunning) {
      if (streetA === "green" || streetB === "green") {
        setTimer(FULL_CYCLE);
      }

      countdown = setInterval(() => {
        setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : prevTimer));
      }, 1000);

      interval = setInterval(() => {
        if (streetA === "green") {
          setStreetA("yellow");
          setStreetB("yellow");
          setTimer(HALF_CYCLE);
          setTimeout(() => {
            setStreetA("red");
            setStreetB("green");
            setTimer(FULL_CYCLE);
          }, HALF_CYCLE * 1000);
        }
        if (streetB === "green") {
          setStreetA("yellow");
          setStreetB("yellow");
          setTimer(HALF_CYCLE);
          setTimeout(() => {
            setStreetA("green");
            setStreetB("red");
            setTimer(FULL_CYCLE);
          }, HALF_CYCLE * 1000);
        }
      }, FULL_CYCLE * 1000);
    }

    return () => {
      clearInterval(interval);
      clearInterval(countdown);
    };
  }, [streetA, streetB, isRunning]);

  function start(): void {
    setIsRunning(true);
  }

  function reset(): void {
    setStreetA("green");
    setStreetB("red");
    setTimer(0);
    setIsRunning(false);
  }

  return { streetA, streetB, reset, start, timer };
}
