import { Button } from "@/components/ui/button";
import Header from "@/components/ui/Header";
import { Metadata } from "next";
import Link from "next/link";
import { Page, pageDetails } from "../navigation";

const AboutPage = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-indigo-100">
      <Header
        title={pageDetails[Page.About].label}
        description={pageDetails[Page.About].description}
      />
      <div className="bg-white py-12">
        <div className="flex flex-col gap-8 container max-w-3xl">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-primary">Our Mission</h2>
            <p className="text-gray-600">
              At Web Utilities, our mission is to provide a comprehensive set of
              online tools that simplify everyday tasks for users worldwide. We
              believe in making technology accessible and user-friendly,
              empowering individuals to work more efficiently and effectively.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-primary">
              Why Choose Web Utilities?
            </h2>
            <ul className="flex flex-col gap-2 list-disc pl-6 text-gray-600">
              <li>User-friendly interface designed for ease of use</li>
              <li>Constantly updated with new tools and features</li>
              <li>Free to use with no sign-up required</li>
              <li>Responsive design that works on all devices</li>
              <li>Privacy-focused: we don&apos;t store your data</li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-primary">Get Started</h2>
            <p className="text-gray-600">
              Ready to simplify your workflow? Explore our tools and experience
              the convenience of Web Utilities today!
            </p>
            <Link href="/#tools">
              <Button>Explore Tools</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const title = "About - Web Utilities";
const description =
  "Learn about Web Utiltities and explore our growing collection of free, easy-to-use online tools.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url: new URL("/about", process.env.NEXT_PUBLIC_URL),
  },
};

export default AboutPage;
