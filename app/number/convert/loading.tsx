import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const NumberConvertLoading = () => {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>
          <Skeleton className="w-1/2 max-w-60 h-6" />
        </CardTitle>
        <Skeleton className="w-full max-w-96 h-5" />
      </CardHeader>
      <CardContent className="flex flex-col items-start gap-4">
        <div className="flex flex-col xs:flex-row gap-4">
          <div className="flex items-center gap-4">
            <Skeleton className="w-24 h-10" />
            <Skeleton className="w-[18px] h-5" />
            <Skeleton className="w-24 h-10" />
          </div>
          <div className="flex gap-4">
            <Skeleton className="w-[70px] h-10" />
            <Skeleton className="w-[70px] h-10" />
          </div>
        </div>
        <Skeleton className="w-full h-10" />
        <Skeleton className="w-full h-20" />
      </CardContent>
    </Card>
  );
};

export default NumberConvertLoading;
