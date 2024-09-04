import React from "react";

interface Props {
  error: string;
}

const ErrorMessage = ({ error }: Props) => {
  if (!error) return null;

  return <p className="text-red-500 text-sm">{error}</p>;
};

export default ErrorMessage;
