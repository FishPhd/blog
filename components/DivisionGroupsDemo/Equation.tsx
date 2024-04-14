import React from "react";

interface EquationProps {
  dividend: number;
  divisor: number;
  remainder?: number;
}

function Equation({ dividend, divisor, remainder }: EquationProps) {
  return (
    <p className="text-center text-3xl mb-2">
      {dividend} ÷ {divisor} = {Math.floor(dividend / divisor)}
      {typeof remainder === "number" && remainder > 0 && (
        <span>
          (and <span>{remainder}</span>
          leftover)
        </span>
      )}
    </p>
  );
}

export default Equation;
