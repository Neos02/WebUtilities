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
    <Card className="flex flex-col h-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-start gap-4 flex-1">
        {children}
      </CardContent>
    </Card>
  );
};

export default ToolLayout;
