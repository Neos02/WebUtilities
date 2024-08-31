import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";

const TextCountLoading = () => {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader>
        <CardTitle>
          <Skeleton className="w-40 h-6" />
        </CardTitle>
        <div>
          <Skeleton className="w-96 h-5" />
        </div>
      </CardHeader>
      <CardContent className="flex flex-col md:flex-row items-start gap-4 flex-1">
        <Skeleton className="flex-1 w-full md:h-full" />
        <div className="flex flex-col gap-2 w-full md:w-48">
          <Skeleton className="w-16 h-6" />
          <Skeleton className="w-full h-[26px] rounded-full" />
          <Skeleton className="w-full h-[26px] rounded-full" />
          <Skeleton className="w-full h-[26px] rounded-full" />
          <Separator />
          <Skeleton className="w-20 h-6" />
          <Skeleton className="w-44 h-5 mx-auto mt-2" />
        </div>
      </CardContent>
    </Card>
  );
};

export default TextCountLoading;
