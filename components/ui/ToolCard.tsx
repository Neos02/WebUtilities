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
    <Card className="flex flex-col justify-between h-52">
      <CardHeader className="flex flex-col">
        <CardTitle className="flex justify-between h-12">
          <span>{title}</span>
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
