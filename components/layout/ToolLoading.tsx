import { PropsWithChildren, ReactNode } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../ui/card";
import { Skeleton } from "../ui/skeleton";

interface Props extends PropsWithChildren {
  className?: string;
}

const ToolLoading = ({ className, children }: Props) => {
  return (
    <>
      <header className="w-full py-12 bg-gray-100">
        <div className="flex flex-col items-center text-center container">
          <Skeleton className="w-60 h-10" />
          <Skeleton className="w-1/2 h-7" />
        </div>
      </header>
      <section className={`container py-12 max-w-2xl ${className}`}>
        {children}
      </section>
    </>
  );
};

export default ToolLoading;
