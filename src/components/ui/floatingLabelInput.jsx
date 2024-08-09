import * as React from "react";
import { cn } from "../../lib/utils";
import { Input as ShadcnInput } from "./";

const FloatingLabelInput = React.forwardRef(({ className, type, label, error, ...props }, ref) => {
  const [focused, setFocused] = React.useState(false);

  const handleFocus = () => setFocused(true);
  const handleBlur = () => setFocused(false);

  return (
    <div className="relative">
      <ShadcnInput
        type={type}
        className={cn(
          "w-full px-3 py-3 text-sm placeholder-transparent rounded-2xl border-2",
          error ? "border-red-500" : "border-gray-300",
          "focus:border-slate-950 focus:ring-0 focus:outline-none",
          "disabled:cursor-not-allowed disabled:opacity-50",
          "dark:border-slate-800 dark:bg-slate-950 dark:placeholder:text-slate-400",
          className
        )}
        ref={ref}
        {...props}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <label
        className={cn(
          "absolute top-3 left-3 text-sm transition-all duration-300",
          "text-slate-500 dark:text-slate-400",
          error && "text-red-500",
          (focused || props.value) ? "transform -translate-y-4 scale-75" : "transform translate-y-3 scale-100"
        )}
      >
        {label}
      </label>
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
});

FloatingLabelInput.displayName = "FloatingLabelInput";

export { FloatingLabelInput };
