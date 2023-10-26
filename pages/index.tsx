import clsx from "clsx";
import { GetServerSideProps } from "next";
import { ComponentProps, ReactNode } from "react";
import { DASHBOARD_URL } from "../constants";
import { MarketingLayout } from "../layouts/Marketing";
import * as Server from "../lib/server";
import { LinkButton } from "../primitives/Button";
import { Container } from "../primitives/Container";
import styles from "./index.module.css";

interface FeatureProps extends Omit<ComponentProps<"div">, "title"> {
  description: ReactNode;
  title: ReactNode;
}
function Feature({ title, description, className, ...props }: FeatureProps) {
  return (
    <div className={clsx(className, styles.featuresFeature)} {...props}>
      <h4 className={styles.featuresFeatureTitle}>{title}</h4>
      <p className={styles.featuresFeatureDescription}>{description}</p>
    </div>
  );
}

// new button to send to calendly
export default function Index() {
  return (
    <MarketingLayout>
      <Container className={styles.section}>
        <div className={styles.heroInfo}>
          <h1 className={styles.heroTitle}>Automate Tasks with Swarms</h1>
          <p className={styles.heroLead}>
            Deploy personalized swarms of AI Agents that automate your business tasks
            reliably, securely, and at scale.
          </p>
        </div>
        <div className={styles.heroActions}>
          <LinkButton
            href="https://calendly.com/swarm-corp/30min"
            target="_blank"
            variant="secondary"
          >
            Book Discovery Call
          </LinkButton>
          <LinkButton
            href="https://github.com/kyegomez/swarms"
            target="_blank"
            variant="secondary"
          >
            Learn more
          </LinkButton>
        </div>
      </Container>
      <Container className={styles.section}>
        <h2 className={styles.sectionTitle}>Benefits</h2>
        <div className={styles.featuresGrid}>
          <Feature
            description={
              <>
                Vast arrays of special agents for sales, marketing, customer
                support, and much more.
              </>
            }
            title="Specialized Agents"
          />
          <Feature
            description={
              <>
                Outcomes you want, when you want them, and
                how you want them.
              </>
            }
            title="Reliablity Comes First"
          />
          <Feature
            description={
              <>
                Swarming Architectures like Groupchats, Hierarchical, and the
                Orchestraor provide the scalability you need to automate
                hundreds of tasks at once.
              </>
            }
            title="Scalability"
          />
          <Feature
            description={
              <>
                Finetune custom agents on your data to get the results you want.
              </>
            }
            title="Securely Finetuned on your Data"
          />
          <Feature
            description={
              <>
                Automate complex workflows that involve multiple steps and
                multiple applications in the browser.
              </>
            }
            title="Automate Browser Tasks"
          />
          <Feature
            description={
              <>
                Generate high-converting multi-media content using text, images, videos, and more.
              </>
            }
            title="Generate Content"
          />
        </div>
      </Container>
    </MarketingLayout>
  );
}

// If logged in, redirect to dashboard
export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await Server.getServerSession(req, res);

  if (session) {
    return {
      redirect: {
        permanent: false,
        destination: DASHBOARD_URL,
      },
    };
  }

  return {
    props: {},
  };
};
