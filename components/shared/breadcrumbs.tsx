import { Slash } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface BreadcrumbProps {
  currentPage: string;
  variant?: "default" | "muted" | "solid";
}

export function BreadcrumbWithCustomSeparator({ 
  currentPage, 
  variant = "default" 
}: BreadcrumbProps) {
  return (
    <Breadcrumb variant={variant}>
      <BreadcrumbList variant={variant}>
        <BreadcrumbItem>
          <BreadcrumbLink href="/" variant={variant}>
            Главная
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <Slash className={variant !== "default" ? "text-textsmain" : "text-white"} />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbPage variant={variant}>
            {currentPage}
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}