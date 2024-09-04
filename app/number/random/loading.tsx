import ToolLoading from "@/components/layout/ToolLoading";
import { Skeleton } from "@/components/ui/skeleton";

const NumberRandomLoading = () => {
  return (
    <ToolLoading className="flex flex-col gap-4">
      <Skeleton className="w-full h-10" />
      <div className="flex flex-col md:flex-row gap-4 mt-2">
        <div className="flex-1 flex flex-col gap-2">
          <Skeleton className="w-16 h-[17px]" />
          <Skeleton className="h-10" />
        </div>
        <div className="flex-1 flex flex-col gap-2">
          <Skeleton className="w-16 h-[17px]" />
          <Skeleton className="h-10" />
        </div>
      </div>
      <Skeleton className="h-10" />
      <Skeleton className="h-[104px]" />
    </ToolLoading>
  );
};

export default NumberRandomLoading;
