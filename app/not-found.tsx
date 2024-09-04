import { Button } from "@/components/ui/button";
import { ArrowLeftFromLine } from "lucide-react";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col justify-center gap-4 container h-full p-12 text-center">
      <h1 className="font-bold text-4xl">Oops!</h1>
      <p className="mb-2">The page you are looking for does not exist.</p>
      <Link href="/">
        <Button>
          <ArrowLeftFromLine className="w-4 h-4 mr-2" />
          <span>Return to Home</span>
        </Button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
