import clsx from "clsx";
import Link from "next/link";
import { ComponentProps } from "react";
import { LinkButton } from "../../primitives/Button";
import { Container } from "../../primitives/Container";
import { Logo } from "../Logo";
import styles from "./MarketingHeader.module.css";

export function MarketingHeader({
  className,
  ...props
}: ComponentProps<"header">) {
  return (
    <header className={clsx(className, styles.header)} {...props}>
      <Container className={styles.container}>
        <Link href="https://calendly.com/swarm-corp/30min">
          <Logo />
        </Link>
        <LinkButton
          href="https://calendly.com/swarm-corp/30min"
          target="_blank"
          variant="secondary"
          className={styles.heroAction}
        >
          Book Discovery Call
        </LinkButton>
      </Container>
    </header>
  );
}
