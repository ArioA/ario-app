import { useState } from "react";
import {
  Button,
  Separator,
  Text,
  Flex,
  Box,
  Section,
  Link,
  Heading,
  Container,
} from "@radix-ui/themes";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Box>
        <Container size="3">
          <Box
            style={{
              borderRadius: "var(--radius-3)",
            }}
          >
            <Section size="1">
              <Text size="2" align="left">
                <Flex>
                  <Box>
                    <Heading as="h5">Ario's site</Heading>{" "}
                  </Box>
                  <Box style={{ marginLeft: "auto" }}>
                    <Link
                      href="https://www.linkedin.com/in/arioaliabadi/"
                      target="_blank"
                      style={{ verticalAlign: "middle" }}
                    >
                      <LinkedInLogoIcon />
                    </Link>{" "}
                    <Link href="https://github.com/ArioA/" target="_blank">
                      <GitHubLogoIcon />
                    </Link>{" "}
                  </Box>
                </Flex>
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
            </Section>
          </Box>
          <Button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </Button>
        </Container>
      </Box>
    </>
  );
}

export default App;
