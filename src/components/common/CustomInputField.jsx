import React from "react";
import { useFormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage, FormField } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const CustomInputField = React.forwardRef(({ name, label, description, ...props }, ref) => {
  const { id, formItemId, formDescriptionId, formMessageId, error } = useFormField();

  return (
    <FormItem className="space-y-2">
      {label && (
        <FormLabel htmlFor={formItemId}>{label}</FormLabel>
      )}
      <FormControl>
        <Input
          id={id}
          ref={ref}
          {...props}
          aria-describedby={error ? `${formDescriptionId} ${formMessageId}` : formDescriptionId}
          aria-invalid={!!error}
        />
      </FormControl>
      {description && (
        <FormDescription id={formDescriptionId}>{description}</FormDescription>
      )}
      <FormMessage id={formMessageId} />
    </FormItem>
  );
});

CustomInputField.displayName = "CustomInputField";

export default CustomInputField;
