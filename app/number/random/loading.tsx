import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const NumberRandomLoading = () => {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>
          <Skeleton className="w-80 h-6" />
        </CardTitle>
        <div>
          <Skeleton className="w-72 h-5" />
        </div>
      </CardHeader>
      <CardContent className="flex flex-col items-start gap-4">
        <div className="flex flex-col md:flex-row gap-4 w-full">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <Skeleton className="w-full md:w-44 h-10" />
            <Skeleton className="hidden md:block md:w-[18px] h-5" />
            <Skeleton className="w-full md:w-44 h-10" />
          </div>

          <Skeleton className="w-full md:w-32 h-10" />
        </div>

        <Skeleton className="w-full h-[78px]" />
        <Skeleton className="w-[94px] h-10" />
      </CardContent>
    </Card>
  );
};

export default NumberRandomLoading;
