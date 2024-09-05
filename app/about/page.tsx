import ToolLayout from "@/components/layout/ToolLayout";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { description } from "../page";

const AboutPage = () => {
  return (
    <ToolLayout
      title="About Web Utilities"
      description={description}
      className="max-w-none"
    >
      <div className="flex flex-col gap-8 container max-w-3xl">
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold">Our Mission</h2>
          <p className="text-gray-500">
            At ToolBox, our mission is to provide a comprehensive set of online
            tools that simplify everyday tasks for users worldwide. We believe
            in making technology accessible and user-friendly, empowering
            individuals to work more efficiently and effectively.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold">Why Choose ToolBox?</h2>
          <ul className="flex flex-col gap-2 list-disc pl-6 text-gray-500">
            <li>User-friendly interface designed for ease of use</li>
            <li>Constantly updated with new tools and features</li>
            <li>Free to use with no sign-up required</li>
            <li>Responsive design that works on all devices</li>
            <li>Privacy-focused: we don't store your data</li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold">Get Started</h2>
          <p className="text-gray-500">
            Ready to simplify your workflow? Explore our tools and experience
            the convenience of ToolBox today!
          </p>
          <Link href="/#tools">
            <Button>Explore Tools</Button>
          </Link>
        </div>
      </div>
    </ToolLayout>
  );
};

export default AboutPage;
