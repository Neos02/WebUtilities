import { ReactNode } from "react";

interface Props {
  title: string;
  description: string;
  className?: string;
  children: ReactNode;
}

const ToolLayout = ({ title, description, className, children }: Props) => {
  return (
    <div className="h-full pb-8 bg-gradient-to-b from-blue-50 to-indigo-100">
      <header className="w-full py-12">
        <div className="flex flex-col items-center text-center container">
          <h1 className="text-3xl font-bold tracking-tighter md:text-4xl">
            {title}
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
            {description}
          </p>
        </div>
      </header>
      <section
        className={`container max-w-2xl p-8 rounded-lg shadow-lg bg-white ${className}`}
      >
        {children}
      </section>
    </div>
  );
};

export default ToolLayout;
