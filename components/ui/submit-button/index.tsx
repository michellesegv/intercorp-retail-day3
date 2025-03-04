"use client";

import * as React from "react";
import { useFormStatus } from "react-dom";
import { Button, ButtonProps } from "../button";

interface SubmitButtonProps extends ButtonProps {
  loadingText?: string;
}

export function SubmitButton({
  children,
  loadingText = "Cargando...",
  disabled,
  ...props
}: SubmitButtonProps) {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={disabled || pending} {...props}>
      {pending ? loadingText : children}
    </Button>
  );
}
