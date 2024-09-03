import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Palette, Type, Binary, Dice5 } from "lucide-react";

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
            <Card>
              <CardHeader>
                <Palette className="h-8 w-8 mb-2" />
                <CardTitle>Color Picker</CardTitle>
                <CardDescription>
                  Choose and convert colors with ease
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full">Open Tool</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Dice5 className="h-8 w-8 mb-2" />
                <CardTitle>Random Number Generator</CardTitle>
                <CardDescription>
                  Generate random numbers in various ranges
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full">Open Tool</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Type className="h-8 w-8 mb-2" />
                <CardTitle>Word Counter</CardTitle>
                <CardDescription>
                  Count words, characters, and more
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full">Open Tool</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Binary className="h-8 w-8 mb-2" />
                <CardTitle>Number Base Converter</CardTitle>
                <CardDescription>
                  Convert between different number bases
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full">Open Tool</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
