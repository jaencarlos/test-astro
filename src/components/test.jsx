import { useContentful } from "@smu-chile/pkg-unimarc-hooks";
import { ClientPanel } from "../constants";

const Component = () => {
  const { data, isLoading } = useContentful({
    id_contentful: "footer",
    options: {
      "sys.contentType.sys.id[in]":
        "unimarcWebTopFooter,unimarcWebMiddleFooter,unimarcWebBottomFooter",
    },
  });

  console.log({ data, isLoading });

  return <div>component of test</div>;
};

export const TestComponent = () => {
  return (
    <ClientPanel>
      <Component />
    </ClientPanel>
  );
};
