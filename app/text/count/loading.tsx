import ToolLoading from "@/components/layout/ToolLoading";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";

const TextCountLoading = () => {
  return (
    <ToolLoading className="flex flex-col md:flex-row gap-4">
      <Skeleton className="flex-1 w-auto min-h-80 md:h-[337px] resize-none" />
      <div className="flex flex-col gap-2 w-full md:w-48">
        <Skeleton className="w-16 h-6" />
        <Skeleton className="w-full h-[26px] rounded-full" />
        <Skeleton className="w-full h-[26px] rounded-full" />
        <Skeleton className="w-full h-[26px] rounded-full" />
        <Separator />
        <Skeleton className="w-20 h-6" />
        <Skeleton className="w-44 h-5 mx-auto mt-2" />
      </div>
    </ToolLoading>
  );
};

export default TextCountLoading;
