import React from "react";
import { Input } from "@nextui-org/react";

export default function InputEmail() {
  return (
    <Input
      isRequired
      type="email"
      id="email"
      label="Email"
      name="email"
      placeholder="email@example.com"
      className="max-w-xs mx-auto"
    />
  );
}