"use client";
import React, { useEffect, useId, useState } from "react";
import clsx from "clsx";
import { Play, Pause, RotateCcw } from "react-feather";

import styles from "./CircularColorsDemo.module.css";
import Card from "../Card/Card";
import VisuallyHidden from "../VisuallyHidden/VisuallyHidden";
import { LayoutGroup, motion } from "framer-motion";

const COLORS = [
  { label: "red", value: "hsl(348deg 100% 60%)" },
  { label: "yellow", value: "hsl(50deg 100% 55%)" },
  { label: "blue", value: "hsl(235deg 100% 65%)" },
];

export default function CircularColorsDemo() {
  const [playing, setPlaying] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const selectedColor = COLORS[elapsed % COLORS.length];
  const id = useId();

  useEffect(() => {
    if (!playing) return;

    const interval = setInterval(() => {
      setElapsed((elapsed) => elapsed + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [playing]);

  return (
    <Card as="section" className={styles.wrapper}>
      <ul className={styles.colorsWrapper}>
        {COLORS.map((color, index) => {
          const isSelected = color.value === selectedColor.value;

          return (
            <li className={styles.color} key={index}>
              {isSelected && (
                <motion.div
                  layoutId={`${id}-selected-color`}
                  className={
                    "absolute -inset-2 border-4 rounded-xl border-black z-20"
                  }
                />
              )}
              <div
                className={clsx(
                  styles.colorBox,
                  isSelected && styles.selectedColorBox
                )}
                style={{
                  backgroundColor: color.value,
                }}
              >
                <VisuallyHidden>{color.label}</VisuallyHidden>
              </div>
            </li>
          );
        })}
      </ul>

      <div className={styles.timeWrapper}>
        <dl className={styles.timeDisplay}>
          <dt>Time Elapsed</dt>
          <dd>{elapsed}</dd>
        </dl>
        <div className={styles.actions}>
          <button
            onClick={() => {
              setPlaying((playing) => !playing);
              setElapsed((elapsed) => elapsed + 1);
            }}
          >
            {!playing && <Play />}
            {playing && <Pause />}
            <VisuallyHidden>{playing ? "Pause" : "Play"}</VisuallyHidden>
          </button>

          <button
            onClick={() => {
              setPlaying(false);
              setElapsed(0);
            }}
          >
            <RotateCcw />
            <VisuallyHidden>Reset</VisuallyHidden>
          </button>
        </div>
      </div>
    </Card>
  );
}
