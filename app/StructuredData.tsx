"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { JsonLd } from "react-schemaorg";
import { WebSite } from "schema-dts";
import { NavSubItem, pageDetails } from "./navigation";

const StructuredData = () => {
  const pathname = usePathname();
  const [url, setUrl] = useState(
    new URL(pathname, process.env.NEXT_PUBLIC_URL).toString()
  );
  const [details, setDetails] = useState<NavSubItem | undefined>();

  useEffect(() => {
    setUrl(new URL(pathname, process.env.NEXT_PUBLIC_URL).toString());
    setDetails(
      Object.values(pageDetails).find((page) => page.href === pathname)
    );
  }, [pathname]);

  return (
    <JsonLd<WebSite>
      item={{
        "@context": "https://schema.org",
        "@type": "WebSite",
        description: details?.description,
        name: `${details?.label} - Web Utilities`,
        url,
      }}
    />
  );
};

export default StructuredData;
