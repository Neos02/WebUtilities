import { Button } from "@/components/ui/button";
import ToolCard from "@/components/ui/ToolCard";
import { Binary, Dices, LucideProps, Palette, Type } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";
import { tools } from "./Navbar";
import Link from "next/link";

const toolIcons: ForwardRefExoticComponent<
  Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
>[] = [Binary, Palette, Dices, Type];

export const description =
  "Your one-stop solution for various online tools. Simplify your tasks with our easy-to-use utilities.";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-indigo-100">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="flex flex-col gap-2">
              <h1 className="text-primary text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Welcome to Web Utilities
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                {description}
              </p>
            </div>
            <div className="flex gap-4">
              <Link href="/#tools">
                <Button>Get Started</Button>
              </Link>
              <Link href="/about">
                <Button variant="outline">Learn More</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white" id="tools">
        <div className="container">
          <h2 className="text-primary text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
            Our Tools
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {tools.map((tool, i) => (
              <ToolCard
                key={tool.label}
                title={tool.label}
                description={tool.description}
                icon={toolIcons[i]}
                href={tool.href}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
