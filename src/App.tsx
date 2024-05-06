import { useState } from "react";
import { Button, Separator, Text, Flex } from "@radix-ui/themes";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Text size="2">
        Ario's site
        <Separator my="3" size="4" />
        <Flex gap="3" align="center">
          Themes
          <Separator orientation="vertical" />
          Primitives
          <Separator orientation="vertical" />
          Icons
          <Separator orientation="vertical" />
          Colors
        </Flex>
      </Text>
      <Button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </Button>
    </>
  );
}

export default App;
