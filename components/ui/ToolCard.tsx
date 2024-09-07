import { NavSubItem } from "@/app/navigation";
import Link from "next/link";
import { Button } from "./button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./card";

interface Props {
  tool: NavSubItem;
}

const ToolCard = ({ tool }: Props) => {
  return (
    <Card className="flex flex-col justify-between h-full">
      <CardHeader className="flex-1 flex flex-col justify-between">
        <CardTitle className="flex justify-between">
          <span className="min-h-12">{tool.label}</span>
          <tool.icon className="w-8 h-8" />
        </CardTitle>
        <CardDescription>{tool.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Link href={tool.href}>
          <Button className="w-full">Open Tool</Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default ToolCard;
