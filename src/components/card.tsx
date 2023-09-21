import { useContentful, useCategories } from "@smu-chile/pkg-unimarc-hooks";
import { ClientPanel } from "../constants";
import { Backbone, Container, Row } from "@smu-chile/pkg-unimarc-components";

const Component = () => {
  const { data, isLoading } = useCategories({ level: 2 });

  if (isLoading) {
    return (
      <Container>
        <Row width="100" isWrap gap="15px">
          {Array(10)
            .fill("1")
            .map((item, index) => {
              return (
                <Row maxWidth="150px" key={item + index}>
                  <Backbone
                    height={40}
                    borderRadius="10px"
                    backgroundColor="white"
                  />
                </Row>
              );
            })}
        </Row>
      </Container>
    );
  }

  return (
    <Container>
      <Row width="100" isWrap gap="15px">
        {data?.data?.map((category) => {
          return (
            <Row
              key={category.name}
              borderRadius="10px"
              padding="10px"
              customWidth="max-content"
              backgroundColor="#e74a4a"
            >
              {category.name}
            </Row>
          );
        })}
      </Row>
    </Container>
  );
};

export const Card = () => {
  return (
    <ClientPanel>
      <Component />
    </ClientPanel>
  );
};
