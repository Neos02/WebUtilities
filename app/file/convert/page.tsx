import { Page, pageDetails } from "@/app/navigation";
import ToolContainer from "@/components/layout/ToolContainer";
import ToolLayout from "@/components/layout/ToolLayout";
import ImageConverter from "./ImageConverter";

const page = () => {
  return (
    <ToolLayout
      title={pageDetails[Page.FileConverter].label}
      description={pageDetails[Page.FileConverter].description}
    >
      <ToolContainer>
        <ImageConverter />
      </ToolContainer>
    </ToolLayout>
  );
};

export default page;
