import { useContentful, useCategories } from "@smu-chile/pkg-unimarc-hooks";
import { ClientPanel } from "../constants";

const Component = () => {
  const { data, isLoading } = useContentful({
    id_contentful: "footer",
    options: {
      "sys.contentType.sys.id[in]":
        "unimarcWebTopFooter,unimarcWebMiddleFooter,unimarcWebBottomFooter",
    },
  });

  const categories = useCategories({ level: 2 });

  console.log({ data, isLoading, categories });

  return <div>component of test</div>;
};

export const TestComponent = () => {
  return (
    <ClientPanel>
      <Component />
    </ClientPanel>
  );
};
