import Layout from "@/components/layouts/Layout";
import { Text,Flex,Button } from "@mantine/core";

export default function HomePage(){
    return (
        <Layout>
        <Flex
          mih={640}
          bg="rgba(0, 0, 0, .3)"
          gap="xs"
          justify="center"
          align="center"
          direction="column"
          wrap="wrap" style={{ backgroundColor: '#0D0D0D' }}>
            <Text fw={800} style={{ fontSize:'105px', lineHeight: '60%', color:'white'}}>Selamat Datang</Text>
            <Text fw={800} style={{ fontSize:'105px', color:'white'}}>di <span style={{ color:'#009000'}}>Portofolio</span> Saya!</Text>
            <Text fw={400} style={{ fontSize:'20px', lineHeight: '150%', width: '70%', textAlign: 'center', color:'white'}}>Halo semuanya, saya Yoga Irgi Kurniawan, yang biasa di panggil “gagayoga”, Saya adalah seorang siswa kelas 3 di SMK Negeri 5 Surakarta, saya mempunyai semangat besar dalam UI Design dan pemrograman.</Text>
            <Button style={{ backgroundColor:'#009000', marginTop: '25px' }}>Download CV</Button>
        </Flex>
        </Layout>
    );
}