import { LucideProps } from "lucide-react";
import Link from "next/link";
import { ForwardRefExoticComponent, RefAttributes } from "react";
import { Button } from "./button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./card";

interface Props {
  title: string;
  description: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  href: string;
}

const ToolCard = ({ title, description, icon: Icon, href }: Props) => {
  return (
    <Card className="flex flex-col justify-between h-full">
      <CardHeader className="flex-1 flex flex-col justify-between">
        <CardTitle className="flex justify-between">
          <span className="min-h-12">{title}</span>
          <Icon className="min-w-8 min-h-8" />
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Link href={href}>
          <Button className="w-full">Open Tool</Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default ToolCard;
