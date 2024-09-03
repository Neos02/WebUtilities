import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const NumberRandomLoading = () => {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>
          <Skeleton className="w-1/2 max-w-60 h-6" />
        </CardTitle>
        <Skeleton className="w-full max-w-96 h-5" />
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
