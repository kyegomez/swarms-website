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
            Swarms is a modular framework that enables you to build reliable,
            high-performance, and useful autonomous agents at scale to automate
            real-world tasks.
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
              <>Outcomes you want, when you want them, and how you want them.</>
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
                Generate high-converting multi-media content using text, images,
                videos, and more.
              </>
            }
            title="Generate MultiMedia Content"
          />
          <Feature
            description={
              <>
                Deploy LLMs and AI with internal systems using a secure data
                foundation while maintaining control over AI access. Use
                commercial or open-source LLMs
              </>
            }
            title="Any LLM/Model"
          />
          <Feature
            description={
              <>
                Monitor and control agents and AI activity, ensuring compliance
                with laws and regulations. Audit all prompts, outputs,
                explanations, recommendations, and actions taken for regulatory
                compliance.
              </>
            }
            title="Control Your Agents"
          />
          <Feature
            description={
              <>
                Define autonomous agents agents to pursue specific, scoped goals
                or dynamic nonlinear workflows.
              </>
            }
            title="Automate NonLinear Workflows"
          />
          <Feature
            description={
              <>
                Run LLMs and AI securely in real-time, using a strong
                multi-modal foundation.
              </>
            }
            title="Reliable Multi-Modal Agents"
          />
          <Feature
            description={
              <>
                Models. Agents. Tools. Data Loaders. Swarming Architectures. We
                provide the blocks you need.
              </>
            }
            title="Modular Building Blocks"
          />
          <Feature
            description={
              <>
                Each of our agents are equipped with a base LLM, easily
                swappable tools, and long term memory providing you with a
                feature complete agent.
              </>
            }
            title="Superior Agent Design"
          />
          <Feature
            description={
              <>
                Enterprise grade security, reliability, and scalability. We
                provide the tools you need to deploy your agents in production.
              </>
            }
            title="Enterprise Grade"
          />
          <Feature
            description={
              <>
                Our Agents are built on top of the latest AI research with State
                of the Art performance.
              </>
            }
            title="Post-Human Performance"
          />
          <Feature
            description={<>Build in seconds and deploy in minutes.</>}
            title="A Fluid Development Experience"
          />
        </div>
      </Container>
      <Container className={styles.section}>
        <h2 className={styles.sectionTitle}>Built on Open Source!</h2>
        <div className={styles.featuresGrid}>
          <Feature
            description={
              <>
                Swarms powers apps like ComicGen, The Compiler, and dozens of
                open source projects!
              </>
            }
            title="54,000+ Downloads"
          />
          <Feature
            description={
              <>
                230+ developers from Google, Ford, and world class organizations
              </>
            }
            title="230+ Stars"
          />
          <Feature
            description={
              <>
                Dozens of veteran autonomous agent contributors from the open
                source community!
              </>
            }
            title="Dozens of Contributors"
          />
        </div>
      </Container>
      <Container className={styles.section}>
        <div className={styles.heroInfo}>
          <h1 className={styles.heroTitle}>Swarm Cloud</h1>
          <p className={styles.heroLead}>
            Deploy and optimize swarms of autonomous agents in the cloud 24/7
            automating thousands of real world tasks.
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
            href="https://docs.google.com/forms/d/e/1FAIpQLScwik5_xlBq9jF_a1ya8GDpWCiq3o4wx7pful87oRpKzcBJKA/viewform?usp=sf_link"
            target="_blank"
            variant="secondary"
          >
            Sign up
          </LinkButton>
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
