"use client";
import React, { useEffect, useId } from "react";
import { range } from "@/utils";
import Equation from "./Equation";
import Card from "../Card/Card";
import SliderControl from "../SliderControl/SliderControl";
import clsx from "clsx";
import Spinner from "../Spinner/Spinner";
import dynamic from "next/dynamic";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";

interface DivisionGroupsDemoProps {
  numOfItems?: number;
  initialNumOfGroups?: number;
  includeRemainderArea?: boolean;
  className?: string;
}

function chunkArray<T>(originalArray: T[], size: number): T[][] {
  const array = [...originalArray]; // Create a copy to preserve the original array
  const chunks: T[][] = [];

  while (array.length > 0) {
    chunks.push(array.splice(0, size));
  }

  return chunks;
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
  const id = useId();
  const [numOfGroups, setNumOfGroups] = React.useState(initialNumOfGroups);
  const [items, setItems] = React.useState(
    Array.from({ length: numOfItems }, (_, index) => index + 1)
  );
  const numOfItemsPerGroup = Math.floor(numOfItems / numOfGroups);
  const groups = chunkArray<number>(items, numOfItemsPerGroup);

  const remainder = includeRemainderArea ? numOfItems % numOfGroups : null;
  const remainderGroup = groups.splice(numOfGroups).flat().reverse();

  // Dynamic grid structure adjustment based on the number of groups
  const gridClasses =
    numOfGroups < 4 ? `grid-cols-${numOfGroups}` : "grid-cols-2 grid-rows-2";

  return (
    <LayoutGroup>
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
            onChange={(ev) => setNumOfGroups(ev.target.valueAsNumber)}
          />
        </header>

        <div className="relative w-full max-w-3xl">
          <div
            className={`grid ${gridClasses} gap-4 h-75 border-2 border-gray-500 p-4`}
          >
            {groups.map((items, groupIndex) => (
              <div
                key={groupIndex.toString()}
                className="flex gap-2 flex-wrap items-center justify-center align-content-center p-2 border border-gray-300"
              >
                {items.map((item) => (
                  <motion.div
                    key={`${id}-${item}`}
                    layoutId={`${id}-${item}`}
                    className="relative z-20 w-8 h-8 bg-green-300 rounded-full flex justify-center items-center font-bold"
                  />
                ))}
              </div>
            ))}
          </div>
        </div>

        {includeRemainderArea && remainderGroup.length > 0 && (
          <div className="relative flex justify-center items-center gap-2 border border-gray-300 h-16 w-full max-w-3xl mt-4">
            <p className="absolute top-0 -left-[1px] p-1 border border-gray-300 border-b-0 bg-gray-200 font-semibold text-xs uppercase tracking-widest transform -translate-y-full rounded-t-sm">
              Remainder Area
            </p>
            {remainderGroup.map((item) => (
              <motion.div
                key={`${id}-${item}`}
                layoutId={`${id}-${item}`}
                className="relative z-20 w-8 h-8 bg-green-200 rounded-full flex justify-center items-center font-bold"
              />
            ))}
          </div>
        )}

        <Equation
          dividend={numOfItems}
          divisor={numOfGroups}
          remainder={remainder ?? undefined}
        />
      </Card>
    </LayoutGroup>
  );
}

export default DivisionGroupsDemo;
