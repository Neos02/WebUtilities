import { Button } from "@/components/ui/button";
import ToolCard from "@/components/ui/ToolCard";
import { Binary, Dices, LucideProps, Palette, Type } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import { ForwardRefExoticComponent, RefAttributes } from "react";
import { tools } from "./Navbar";
import { baseUrl } from "./sitemap";

const toolIcons: ForwardRefExoticComponent<
  Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
>[] = [Binary, Palette, Dices, Type];

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
                Your one-stop solution for various online tools. Simplify your
                tasks with our easy-to-use utilities.
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
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
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

const title = "Web Utilities - Your All-in-One Online Utility Suite";
const description =
  "Discover Web Utilities, a comprehensive collection of free online tools for everyday tasks. Simplify your workflow with our user-friendly utilities.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url: baseUrl,
  },
};
