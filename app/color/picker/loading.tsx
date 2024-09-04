import ToolLoading from "@/components/layout/ToolLoading";
import { Skeleton } from "@/components/ui/skeleton";

const loading = () => {
  const fieldSkeletons = [1, 2, 3];

  return (
    <ToolLoading className="flex flex-col md:flex-row gap-4 w-full">
      <div className="flex flex-col gap-4">
        <Skeleton className="w-full md:w-80 h-80" />
        <Skeleton className="w-full md:w-80 h-8" />
      </div>

      <div className="flex flex-col flex-1 gap-4 h-96">
        <Skeleton className="h-[98px]" />

        {fieldSkeletons.map((skeleton) => (
          <div key={skeleton} className="flex flex-col gap-1">
            <Skeleton className="w-7 h-3.5" />
            <Skeleton className="h-10" />
          </div>
        ))}
      </div>
    </ToolLoading>
  );
};

export default loading;
