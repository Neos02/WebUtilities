import { Button } from "@/components/ui/button";
import ToolCard from "@/components/ui/ToolCard";
import { Binary, Dice5, LucideProps, Palette, Type } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

const toolCards: {
  title: string;
  description: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  href: string;
}[] = [
  {
    title: "Base Converter",
    description: "Convert between different number bases",
    icon: Binary,
    href: "/number/convert",
  },
  {
    title: "Color Picker",
    description: "Choose and convert colors with ease",
    icon: Palette,
    href: "/color/picker",
  },
  {
    title: "Random Number Generator",
    description: "Generate random numbers in various ranges",
    icon: Dice5,
    href: "/number/random",
  },
  {
    title: "Word Counter",
    description: "Count words, characters, and more",
    icon: Type,
    href: "/text/count",
  },
];

export default function Home() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Welcome to Web Utilities
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Your one-stop solution for various online tools. Simplify your
                tasks with our easy-to-use utilities.
              </p>
            </div>
            <div className="space-x-4">
              <Button>Get Started</Button>
              <Button variant="outline">Learn More</Button>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
            Our Tools
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {toolCards.map((tool) => (
              <ToolCard
                title={tool.title}
                description={tool.description}
                icon={tool.icon}
                href={tool.href}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
