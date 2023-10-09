import { useState } from "react";
import { useDisclosure } from '@mantine/hooks';
import classes from '@/styles/headernav.module.css';
import { Burger, Container, Group } from "@mantine/core";
import { Image } from "@mantine/core";

const links= [
    { link : '/', label : 'Home'},
    { link : '/about', label : 'About'},
    { link : '/sosmed', label : 'Project'},
    { link : '/sosmed', label : 'Sosmed'},
];


export default function HeaderNav(){

    const [oppend, {toogle}] = useDisclosure(false);
    const [active , setActive] = useState(links[0].link);

    const items = links.map((link) =>(
        <a
        key={link.label}
        href={link.link}
        className={classes.link}
        data-active={active === link.link || undefined}
        onclick={(event) => {
            event.preventDefault();
            setActive(link.link);
        }}
    >

            {link.label}
        </a>
    ));

    return(
        <header className={classes.header}>
        <Container size="md" className={classes.inner}>
         <Image src="/images/logo/Logo.svg" height={35} alt="Logo"/>
          <Group gap={5} visibleFrom="xs">
            {items}
          </Group>
  
          <Burger opened={oppend} onClick={toogle} hiddenFrom="xs" size="sm" />
        </Container>
      </header>
    );
    }
    