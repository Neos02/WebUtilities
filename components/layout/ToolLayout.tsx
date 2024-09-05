import Link from "next/link";
import { ReactNode } from "react";
import { Button } from "../ui/button";

interface Props {
  title: string;
  description: string;
  className?: string;
  children: ReactNode;
}

const ToolLayout = ({ title, description, className, children }: Props) => {
  return (
    <div>
      <div className="min-h-[calc(100vh-3.5rem)] pb-12 bg-gradient-to-b from-blue-50 to-indigo-100">
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
      <section className="flex flex-col gap-2 py-8 bg-white text-center">
        <h2 className="text-3xl font-bold tracking-tighter text-primary">
          Explore More Tools
        </h2>
        <p className="max-w-[600px] mx-auto text-gray-600">
          Discover our range of useful tools designed to simplify your tasks.
        </p>
        <Link href="/#tools" className="mt-2">
          <Button>View All Tools</Button>
        </Link>
      </section>
    </div>
  );
};

export default ToolLayout;
