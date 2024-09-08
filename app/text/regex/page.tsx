import { Page, pageDetails } from "@/app/navigation";
import ToolLayout from "@/components/layout/ToolLayout";
import RegexTester from "./RegexTester";

const page = () => {
  return (
    <ToolLayout
      title={pageDetails[Page.RegexTester].label}
      description={pageDetails[Page.RegexTester].description}
    >
      <RegexTester />
    </ToolLayout>
  );
};

export default page;
