import { Page, pageDetails } from "@/app/navigation";
import ToolLayout from "@/components/layout/ToolLayout";
import CheatSheet from "./CheatSheet";
import RegexTester from "./RegexTester";

const page = () => {
  return (
    <ToolLayout
      title={pageDetails[Page.RegexTester].label}
      description={pageDetails[Page.RegexTester].description}
    >
      <div className="flex flex-col gap-4">
        <RegexTester />
        <CheatSheet />
      </div>
    </ToolLayout>
  );
};

export default page;
