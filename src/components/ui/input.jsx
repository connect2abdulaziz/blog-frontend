import * as React from "react";
import { cn } from "../../lib/utils";

const Input = React.forwardRef(({ className, error, ...props }, ref) => {
  return (
    <div className="relative">
      <input
        className={cn(
          "w-full px-3 py-4 text-md my-1 placeholder:text-slate-500 rounded-3xl border",
          error ? "border-red-500" : "border-gray-300",
          "focus:border-slate-950 focus:ring-0 focus:outline-none",
          "disabled:cursor-not-allowed disabled:opacity-50",
          "dark:border-slate-800 dark:bg-slate-950 dark:placeholder:text-slate-400",
          className
        )}
        ref={ref}
        aria-invalid={!!error}
        {...props}
      />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
});

Input.displayName = "Input";

export { Input };
