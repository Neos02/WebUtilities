"use client";

import ToolContainer from "@/components/layout/ToolContainer";
import { useState } from "react";
import RegexInput from "./RegexInput";
import "./RegexTester.css";

const RegexTester = () => {
  const [pattern, setPattern] = useState("[A-Z0-9]\\w+");
  const [flags, setFlags] = useState("g");

  return (
    <ToolContainer>
      <RegexInput pattern={pattern} flags={flags} onChange={setPattern} />
    </ToolContainer>
  );
};

export default RegexTester;
