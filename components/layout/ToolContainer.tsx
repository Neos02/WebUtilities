import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  className?: string;
}

const ToolContainer = ({ className, children }: Props) => {
  return (
    <section
      className={`container max-w-2xl p-8 rounded-lg shadow-lg bg-white ${className}`}
    >
      {children}
    </section>
  );
};

export default ToolContainer;
