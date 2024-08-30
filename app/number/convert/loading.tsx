import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const NumberConvertLoading = () => {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>
          <Skeleton className="w-36 h-6" />
        </CardTitle>
        <div>
          <Skeleton className="w-72 h-5" />
        </div>
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
