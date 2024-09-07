import { Page, pageDetails } from "@/app/navigation";
import ToolContainer from "@/components/layout/ToolContainer";
import ToolLayout from "@/components/layout/ToolLayout";

const page = () => {
  return (
    <ToolLayout
      title={pageDetails[Page.RegexTester].label}
      description={pageDetails[Page.RegexTester].description}
    >
      <ToolContainer>
        <h1>Regex</h1>
      </ToolContainer>
    </ToolLayout>
  );
};

export default page;
