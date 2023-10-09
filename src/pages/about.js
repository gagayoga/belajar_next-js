import Layout from "@/components/layouts/Layout";
import {Text, Flex} from "@mantine/core";

export default function About()
{
    return(
        <Layout>
            <Flex
          mih={640}
          bg="rgba(0, 0, 0, .3)"
          gap="xs"
          justify="center"
          align="center"
          direction="column"
          wrap="wrap" style={{ backgroundColor: '#0D0D0D' }}>
            <Text> Halaman Masih Maintance, Sorry! </Text>
          </Flex>
        </Layout>
    )
}