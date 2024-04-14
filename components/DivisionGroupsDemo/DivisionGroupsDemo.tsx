"use client";
import React from "react";
import { range } from "@/utils";
import Equation from "./Equation";
import Card from "../Card/Card";
import SliderControl from "../SliderControl/SliderControl";
import clsx from "clsx";
import Spinner from "../Spinner/Spinner";
import dynamic from "next/dynamic";

interface DivisionGroupsDemoProps {
  numOfItems?: number;
  initialNumOfGroups?: number;
  includeRemainderArea?: boolean;
  className?: string;
}

export const DivisionGroupsDemoLazy = dynamic(
  () => Promise.resolve(DivisionGroupsDemo),
  {
    loading: () => <Spinner />,
  }
);

function DivisionGroupsDemo({
  numOfItems = 12,
  initialNumOfGroups = 1,
  includeRemainderArea = false,
  className,
}: DivisionGroupsDemoProps) {
  const [numOfGroups, setNumOfGroups] = React.useState(initialNumOfGroups);
  const numOfItemsPerGroup = Math.floor(numOfItems / numOfGroups);
  const remainder = includeRemainderArea ? numOfItems % numOfGroups : null;

  // Dynamic grid structure adjustment based on the number of groups
  const gridClasses =
    numOfGroups < 4 ? `grid-cols-${numOfGroups}` : "grid-cols-2 grid-rows-2";

  return (
    <Card
      as="section"
      className={clsx(
        "flex flex-col items-center gap-8 my-10 w-full",
        className
      )}
    >
      <header className="flex justify-between">
        <SliderControl
          label="Number of Groups"
          step={1}
          min={1}
          max={4}
          value={numOfGroups}
          onChange={(ev) => setNumOfGroups(Number(ev.target.value))}
        />
      </header>

      <div className="relative w-full max-w-3xl">
        <div
          className={`grid ${gridClasses} gap-4 h-75 border-2 border-gray-500 p-4`}
        >
          {range(numOfGroups).map((groupIndex) => (
            <div
              key={groupIndex}
              className="flex gap-2 flex-wrap items-center justify-center align-content-center p-2 border border-gray-300"
            >
              {range(numOfItemsPerGroup).map((index) => (
                <div
                  key={index}
                  className="relative z-20 w-8 h-8 bg-green-300 rounded-full flex justify-center items-center font-bold"
                ></div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {includeRemainderArea && (
        <div className="relative flex justify-center items-center gap-2 border border-gray-300 h-16 w-full max-w-3xl mt-4">
          <p className="absolute top-0 -left-[1px] p-1 border border-gray-300 border-b-0 bg-gray-200 font-semibold text-xs uppercase tracking-widest transform -translate-y-full rounded-t-sm">
            Remainder Area
          </p>
          {range(remainder).map((index) => (
            <div
              key={index}
              className="relative z-20 w-8 h-8 bg-green-200 rounded-full flex justify-center items-center font-bold"
            ></div>
          ))}
        </div>
      )}

      <Equation
        dividend={numOfItems}
        divisor={numOfGroups}
        remainder={remainder ?? undefined}
      />
    </Card>
  );
}

export default DivisionGroupsDemo;
