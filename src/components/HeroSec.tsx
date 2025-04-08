import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

interface Hero1Props {
  badge?: string;
  heading: string;
  description: string;
  buttons?: {
    primary?: {
      text: string;
      url: string;
    };
    secondary?: {
      text: string;
      url: string;
    };
  };
  image: {
    src: string;
    alt: string;
  };
}

const Hero = ({
  badge = "✨ Your Online Academy",
  heading = "Academy World Wide",
  description = "Skoolz.PK is a platform for students and teachers to connect. We provide online learning, courses, students, education, and much more.",
  buttons = {
    primary: {
      text: "Discover all Courses",
      url: "/courses",
    },
    secondary: {
      text: "View Articles",
      url: "/blog",
    },
  },
  image = {
    src: "https://www.shadcnblocks.com/images/block/placeholder-1.svg",
    alt: "Skoolz.PK - Academy Online",
  },
}: Hero1Props) => {
  return (
    <section>
      <div className="container px-8">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            {badge && (
              <Badge variant="outline">
                {badge}
                <ArrowUpRight className="ml-2 size-4" />
              </Badge>
            )}
            <h1 className="my-6 text-pretty text-4xl font-bold lg:text-6xl">
              {heading}
            </h1>
            <p className="mb-8 max-w-xl text-muted-foreground lg:text-xl">
              {description}
            </p>
            <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
              {buttons.primary && (
                <Button asChild className="w-full sm:w-auto">
                  <Link href={buttons.primary.url}>{buttons.primary.text}</Link>
                </Button>
              )}
              {buttons.secondary && (
                <Button asChild variant="outline" className="w-full sm:w-auto">
                  <Link href={buttons.secondary.url}>
                    {buttons.secondary.text}
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
              )}
            </div>
          </div>
          <Image
            src={image.src}
            alt={image.alt}
            className="max-h-96 w-full rounded-md object-cover"
            width={800}
            height={800}
          />
        </div>
      </div>
    </section>
  )
}

export { Hero }