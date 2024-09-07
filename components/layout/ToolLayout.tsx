import Link from "next/link";
import { ReactNode } from "react";
import { Button } from "../ui/button";
import Header from "../ui/Header";

interface Props {
  title: string;
  description: string;
  children: ReactNode;
}

const ToolLayout = ({ title, description, children }: Props) => {
  return (
    <div>
      <div className="min-h-[calc(100vh-3.5rem)] px-4 pb-12 bg-gradient-to-b from-blue-50 to-indigo-100">
        <Header title={title} description={description} />
        {children}
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
