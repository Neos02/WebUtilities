import { ReactNode } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../ui/card";

interface Props {
  title: string;
  description: string;
  children: ReactNode;
}

const ToolLayout = ({ title, description, children }: Props) => {
  return (
    <div className="px-4 pb-4 h-full">
      <Card className="flex flex-col container h-full">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-start gap-4 flex-1">
          {children}
        </CardContent>
      </Card>
    </div>
  );
};

export default ToolLayout;
