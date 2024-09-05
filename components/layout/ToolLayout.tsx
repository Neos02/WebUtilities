import { ReactNode } from "react";

interface Props {
  title: string;
  description: string;
  className?: string;
  children: ReactNode;
}

const ToolLayout = ({ title, description, className, children }: Props) => {
  return (
    <>
      <header className="w-full py-12 bg-gray-100">
        <div className="flex flex-col items-center text-center container">
          <h1 className="text-3xl font-bold tracking-tighter md:text-4xl">
            {title}
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
            {description}
          </p>
        </div>
      </header>
      <section className={`container py-12 max-w-2xl ${className}`}>
        {children}
      </section>
    </>
  );
};

export default ToolLayout;
