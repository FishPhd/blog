import React from "react";

interface SliderControlProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  value: number;
}

function SliderControl({ label, value, ...delegated }: SliderControlProps) {
  const id = React.useId();

  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between items-baseline">
        <label htmlFor={id} className="text-lg font-semibold">
          {label}
        </label>
        <span className="text-lg font-normal">{value}</span>
      </div>

      {/* Slider */}
      <input
        value={value}
        type="range"
        className="w-64 appearance-none bg-transparent [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-green-100 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-[30px] [&::-webkit-slider-thumb]:w-[20px] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-green-600"
        {...delegated}
      />
    </div>
  );
}

export default SliderControl;
