import { ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";


const Blog = () => {
  return (
    <section className="py-32">
      <div className="container mx-auto">
        <div className="mx-auto max-w-3xl text-center">
          <Badge variant="secondary" className="mb-6">
            Latest Updates
          </Badge>
          <h2 className="mb-3 text-pretty text-3xl font-semibold md:mb-4 md:text-5xl lg:mb-6">
            Blog Posts
          </h2>
          <p className="mb-12 text-muted-foreground md:text-base lg:text-lg">
            Discover the latest trends, tips, and best practices in modern web development. From UI components to design systems, stay updated with our expert insights.
          </p>
        </div>

        <div className="mx-auto max-w-5xl space-y-12">
            <Card
              key="1"
              className="overflow-hidden border-0 bg-transparent shadow-none"
            >
              <div className="flex flex-col gap-6 sm:flex-row">
                <div className="shrink-0">
                  <Link
                    href="https://shadcnblocks.com"
                    target="_blank"
                    className="block transition-opacity duration-200 hover:opacity-90"
                  >
                    <Image
                      src="https://shadcnblocks.com/images/block/placeholder-dark-1.svg"
                      alt="Getting Started with shadcn/ui Components"
                      width={260}
                      height={160}
                      className="aspect-[16/9] w-full rounded-lg object-cover object-center sm:w-[260px]"
                    />
                  </Link>
                </div>
                <div className="flex-1 space-y-3">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <Badge variant="secondary">Tutorial</Badge>
                    <span>Sarah Chen</span>
                    <span>1 Jan 2024</span>
                  </div>
                  <h3 className="text-xl font-bold leading-tight lg:text-2xl">
                    <Link
                      href="https://shadcnblocks.com"
                      target="_blank"
                      className="hover:underline"
                    >
                      Getting Started with shadcn/ui Components
                    </Link>
                  </h3>
                  <p className="text-base text-muted-foreground">
                    Learn how to quickly integrate and customize shadcn/ui components in your Next.js projects. We'll cover installation, theming, and best practices for building modern interfaces.
                  </p>
                  <Link
                    href="https://shadcnblocks.com"
                    target="_blank"
                    className="inline-flex items-center text-primary hover:underline"
                  >
                    Read more
                    <ArrowRight className="ml-2 size-4" />
                  </Link>
                </div>
              </div>
            </Card>

            <Card
              key="2"
              className="overflow-hidden border-0 bg-transparent shadow-none"
            >
              <div className="flex flex-col gap-6 sm:flex-row">
                <div className="shrink-0">
                  <Link
                    href="https://shadcnblocks.com"
                    target="_blank"
                    className="block transition-opacity duration-200 hover:opacity-90"
                  >
                    <Image
                      src="https://shadcnblocks.com/images/block/placeholder-dark-1.svg"
                      alt="Building Accessible Web Applications"
                      width={260}
                      height={160}
                      className="aspect-[16/9] w-full rounded-lg object-cover object-center sm:w-[260px]"
                    />
                  </Link>
                </div>
                <div className="flex-1 space-y-3">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <Badge variant="secondary">Accessibility</Badge>
                    <span>Marcus Rodriguez</span>
                    <span>1 Jan 2024</span>
                  </div>
                  <h3 className="text-xl font-bold leading-tight lg:text-2xl">
                    <Link
                      href="https://shadcnblocks.com"
                      target="_blank"
                      className="hover:underline"
                    >
                      Building Accessible Web Applications
                    </Link>
                  </h3>
                  <p className="text-base text-muted-foreground">
                    Explore how to create inclusive web experiences using shadcn/ui's accessible components. Discover practical tips for implementing ARIA labels, keyboard navigation, and semantic HTML.
                  </p>
                  <Link
                    href="https://shadcnblocks.com"
                    target="_blank"
                    className="inline-flex items-center text-primary hover:underline"
                  >
                    Read more
                    <ArrowRight className="ml-2 size-4" />
                  </Link>
                </div>
              </div>
            </Card>

            <Card
              key="3"
              className="overflow-hidden border-0 bg-transparent shadow-none"
            >
              <div className="flex flex-col gap-6 sm:flex-row">
                <div className="shrink-0">
                  <Link
                    href="https://shadcnblocks.com"
                    target="_blank"
                    className="block transition-opacity duration-200 hover:opacity-90"
                  >
                    <Image
                      src="https://shadcnblocks.com/images/block/placeholder-dark-1.svg"
                      alt="Modern Design Systems with Tailwind CSS"
                      width={260}
                      height={160}
                      className="aspect-[16/9] w-full rounded-lg object-cover object-center sm:w-[260px]"
                    />
                  </Link>
                </div>
                <div className="flex-1 space-y-3">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <Badge variant="secondary">Design Systems</Badge>
                    <span>Emma Thompson</span>
                    <span>1 Jan 2024</span>
                  </div>
                  <h3 className="text-xl font-bold leading-tight lg:text-2xl">
                    <Link
                      href="https://shadcnblocks.com"
                      target="_blank"
                      className="hover:underline"
                    >
                      Modern Design Systems with Tailwind CSS
                    </Link>
                  </h3>
                  <p className="text-base text-muted-foreground">
                    Dive into creating scalable design systems using Tailwind CSS and shadcn/ui. Learn how to maintain consistency while building flexible and maintainable component libraries.
                  </p>
                  <Link
                    href="https://shadcnblocks.com"
                    target="_blank"
                    className="inline-flex items-center text-primary hover:underline"
                  >
                    Read more
                    <ArrowRight className="ml-2 size-4" />
                  </Link>
                </div>
              </div>
            </Card>

        </div>

        <div className="mt-16 text-center">
          <Button
            variant="outline"
            size="lg"
            className="w-full sm:w-auto"
            asChild
          >
            <Link href="/blog" target="_blank">
              View all articles
              <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export { Blog };