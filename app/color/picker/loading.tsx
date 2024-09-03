import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const loading = () => {
  const fieldSkeletons = [1, 2, 3];

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
          <div className="flex flex-col gap-4">
            <Skeleton className="w-full md:w-96 h-96" />
            <Skeleton className="w-full md:w-96 h-8" />
          </div>

          <div className="flex flex-col flex-1 gap-4 h-96">
            <Skeleton className="h-[162px]" />

            {fieldSkeletons.map((skeleton) => (
              <div key={skeleton} className="flex flex-col gap-1">
                <Skeleton className="w-7 h-3.5" />
                <Skeleton className="h-10" />
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default loading;
