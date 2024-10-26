import Layout from "@/components/Layout";
import Head from "next/head";
import Journey from "@/components/Journey";
import AnimatedText from "@/components/AnimatedText";
import TransitionEffect from "@/components/TransitionEffect";


export default function About() {
  return (
    <>
      <Head>
        <title>Lightweight360 | About Page</title>
        <meta name="description" content="Empowering personal trainers and nutritionists with an innovative CRM platform that simplifies client management, enhances scalability, and fosters lasting relationships, allowing professionals to focus on transforming lives while we handle the details."
 />
      </Head>
      <TransitionEffect />
      <main
        className={`flex  w-full flex-col items-center justify-center dark:text-light`}
      >
        <Layout className="pt-13">
          <br/>
          <br/>
          <br/>
          <AnimatedText
            text1="Walk" text2="the journey " text3="with us!"
            className="mb-16 !text-8xl !leading-tight lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"

            
          />
          <Journey />
        </Layout>
      </main>
    </>
  );
}
