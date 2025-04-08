import Team from "@/components/TeamSec";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const About = () => {
    return (
      <>
        <section className="py-16">
        <div className="container flex flex-col gap-16 lg:px-16">
            <div className="lg:max-w-sm">
            <h2 className="mb-3 text-xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
                About Skoolz.PK
            </h2>
            <p className="mb-8 text-muted-foreground lg:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig
                doloremque mollitia fugiat omnis! Porro facilis quo animi
                consequatur. Explicabo.
            </p>
            <Link
                href="#"
                className="group flex items-center text-xs font-medium md:text-base lg:text-lg"
            >
                Book a demo{" "}
                <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Link>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
            <div className="flex flex-col overflow-clip rounded-xl border border-border md:col-span-2 md:grid md:grid-cols-2 md:gap-6 lg:gap-8">
                <div className="md:min-h-[24rem] lg:min-h-[28rem] xl:min-h-[32rem]">
                <Image
                    src="https://shadcnblocks.com/images/block/placeholder-1.svg"
                    alt="Feature 1"
                    className="aspect-[16/9] h-full w-full object-cover object-center"
                    width={800}
                    height={600}
                />
                </div>
                <div className="flex flex-col justify-center px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
                <h3 className="mb-3 text-lg font-semibold md:mb-4 md:text-2xl lg:mb-6">
                    Feature 1
                </h3>
                <p className="text-muted-foreground lg:text-lg">
                    Nam vitae molestie arcu. Quisque eu libero orci. Aliquam
                    imperdiet magna nec massa consectetur, id interdum ante congue.
                </p>
                </div>
            </div>
            <div className="flex flex-col-reverse overflow-clip rounded-xl border border-border md:col-span-2 md:grid md:grid-cols-2 md:gap-6 lg:gap-8">
                <div className="flex flex-col justify-center px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
                <h3 className="mb-3 text-lg font-semibold md:mb-4 md:text-2xl lg:mb-6">
                    Feature 2
                </h3>
                <p className="text-muted-foreground lg:text-lg">
                    Nam vitae molestie arcu. Quisque eu libero orci. Aliquam
                    imperdiet magna nec massa consectetur, id interdum ante congue.
                </p>
                </div>
                <div className="md:min-h-[24rem] lg:min-h-[28rem] xl:min-h-[32rem]">
                <Image
                    src="https://shadcnblocks.com/images/block/placeholder-2.svg"
                    alt="Feature 2"
                    className="aspect-[16/9] h-full w-full object-cover object-center"
                    width={800}
                    height={600}
                />
                </div>
            </div>
            </div>
        </div>
    </section>

    <section className="py-16">
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-3">
          <h2 className="row-span-2 text-3xl font-semibold lg:text-5xl">
            Our Values and Principles
          </h2>
          <div>
            <h3 className="mb-2 text-xl font-medium">Team Spirit</h3>
            <p className="text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              architecto atque consequuntur perferendis ratione dolorem vitae,
              doloribus facere.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-xl font-medium">Innovation</h3>
            <p className="text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              architecto atque consequuntur perferendis ratione dolorem vitae,
              doloribus facere.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-xl font-medium">Quality</h3>
            <p className="text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              architecto atque consequuntur perferendis ratione dolorem vitae,
              doloribus facere.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-xl font-medium">Integrity</h3>
            <p className="text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              architecto atque consequuntur perferendis ratione dolorem vitae,
              doloribus facere.
            </p>
          </div>
        </div>
      </div>
    </section>

    <Team />

        </>
  );
};

export default About