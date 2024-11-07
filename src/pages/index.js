import AnimatedText from "@/components/AnimatedText";
import { Floater } from "@/components/Soon";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import lightBulb from "../../public/images/svgs/fitladies.svg";
import profilePic from "../../public/images/profile/output-onlinepngtools.png";
import TransitionEffect from "@/components/TransitionEffect";


export default function Home() {

  return (
    <>
      <Head>
        <title>LightWeight360</title>
        <meta
          name="description"
          content="Empowering fitness professionals with a streamlined CRM to build stronger client connections, boost productivity, and scale your business with ease."
        />
      </Head>

      <TransitionEffect />
      <article
        className={`flex min-h-screen items-center text-dark dark:text-light sm:items-start`}
      >
        <Layout className="!pt-0 md:!pt-16 sm:!pt-16">
          <div className="flex w-full items-start justify-between md:flex-col">
            <div className="w-1/2 lg:hidden md:inline-block md:w-full">
              <Image
                src={profilePic}
                alt="lightWeight360"
                className="h-auto w-full"
                sizes="100vw"
                priority
              />
            </div>
            <div className="flex w-1/2 flex-col items-center self-center lg:w-full lg:text-center">
            <br/>
            <br/>
              <AnimatedText
                text1="Effortless" text2="client management" text3="for every workout and wellness journey"
                className="!text-left !text-6xl xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
              <p className="my-4 text-base font-medium md:text-sm sm:!text-xs">
              Empowering fitness professionals with a streamlined CRM to build stronger client connections, boost productivity, and scale your business with ease.


                <br /><br />

                Be the first to transform your client relationships – sign up for exclusive updates!

              </p>



              <div className="mt-2 flex items-center self-start lg:self-center">
                <input type="text" placeholder="Email" className={`flex items-center rounded-lg border-2 border-solid  p-2.5 px-6 text-lg font-semibold
            `} />

</div>
<div className="mt-2 flex items-center self-start lg:self-center">
                <button className={`flex items-center rounded-lg border-2 border-solid bg-dark p-2.5 px-6 text-lg font-semibold
            capitalize text-light 
             `}>Sign up </button>
              </div>
            </div>
          </div>
        </Layout>

        {/* <Floater /> */}
        {/* <div
        className="absolute right-8 bottom-8 inline-block w-28 md:hidden"
        >
          <Image
            className="relative h-auto w-full"
            src={lightBulb}
            alt="lightWeight360"
          />

        </div> */}
      </article>
    </>
  );
}
