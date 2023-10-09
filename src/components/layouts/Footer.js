import { Anchor, Group, ActionIcon, rem } from '@mantine/core';
import classes from '@/styles/footer.module.css';
import { Container } from '@mantine/core';
import {Image} from '@mantine/core';
import { BsYoutube, BsTwitter, BsInstagram } from 'react-icons/bs';

const links = [
    { link : '/', label : 'Home'},
    { link : '/about', label : 'About'},
    { link : '/sosmed', label : 'Project'},
    { link : '/sosmed', label : 'Sosmed'},
];

export default function FooterCentered() {
  const items = links.map((link) => (
    <Anchor
      c="dimmed"
      key={link.label}
      href={link.link}
      lh={1}
      onClick={(event) => event.preventDefault()}
      size="sm"
    >
      {link.label}
    </Anchor>
  ));

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Image src="/images/logo/Logo.svg" h={35} alt="Logo"/>
        <Group className={classes.links}>{items}</Group>

        <Group gap="xs" justify="flex-end" wrap="nowrap">
          <ActionIcon size="lg" variant="default" radius="xl">
            <BsTwitter style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
            
          </ActionIcon>
          <ActionIcon size="lg" variant="default" radius="xl">
            <BsYoutube style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" variant="default" radius="xl">
            <BsInstagram style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </div>
  );
}