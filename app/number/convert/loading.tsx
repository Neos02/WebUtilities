import ToolLoading from "@/components/layout/ToolLoading";
import { Skeleton } from "@/components/ui/skeleton";

const NumberConvertLoading = () => {
  return (
    <ToolLoading className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <Skeleton className="w-24 h-3.5" />
        <Skeleton className="h-10" />
      </div>
      <div className="flex gap-4">
        <div className="flex-1 flex flex-col gap-2">
          <Skeleton className="w-16 h-3.5" />
          <Skeleton className="h-10" />
        </div>
        <div className="flex-1 flex flex-col gap-2">
          <Skeleton className="w-14 h-3.5" />
          <Skeleton className="h-10" />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Skeleton className="w-24 h-3.5" />
        <Skeleton className="h-10" />
      </div>

      <div className="flex gap-4 mt-2">
        <Skeleton className="flex-1 h-10" />
        <Skeleton className="flex-1 h-10" />
      </div>
    </ToolLoading>
  );
};

export default NumberConvertLoading;
