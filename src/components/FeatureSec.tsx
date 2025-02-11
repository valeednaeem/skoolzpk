"use client";

import { useState } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

interface FeatureItem {
  id: number;
  title: string;
  image: string;
  description: string;
}

interface FeatureProps {
  features: FeatureItem[];
}

const defaultFeatures: FeatureItem[] = [
  {
    id: 1,
    title: "Ready-to-Use Skoolz.PK",
    image: "https://shadcnblocks.com/images/block/placeholder-1.svg",
    description:
      "Browse through our extensive collection of pre-built Courses designed by Professional Teachers. Each course is carefully crafted to be understandable, accessible, and easy. Simply sign-up with us.",
  },
  {
    id: 2,
    title: "Professionaly Designed Courses",
    image: "https://shadcnblocks.com/images/block/placeholder-2.svg",
    description:
      "Our courses are designed by Professional Teachers to help you learn faster and better. We have a wide range of courses available for you to choose from. Simply sign-up with us.",
  },
  {
    id: 3,
    title: "Kids Friendly Courses",
    image: "https://shadcnblocks.com/images/block/placeholder-3.svg",
    description:
      "Our courses are designed to be kids friendly. We have a wide range of courses available for kids to choose from. Simply sign-up with us.",
  },
  {
    id: 4,
    title: "Accessibility First",
    image: "https://shadcnblocks.com/images/block/placeholder-4.svg",
    description:
      "Our courses are designed to be accessible to everyone. We have a wide range of courses available for you to choose from. Simply sign-up with us.",   
  },
  {
    id: 5,
    title: "Modern and Basic Courses",
    image: "https://shadcnblocks.com/images/block/placeholder-5.svg",
    description:
      "Our courses are designed to be modern and basic. We have a wide range of courses available for you to choose from. Simply sign-up with us.",
  },
];

const Feature = ({ features = defaultFeatures }: FeatureProps) => {
  const [activeTabId, setActiveTabId] = useState<number | null>(1);
  const [activeImage, setActiveImage] = useState(features[0].image);

  return (
    <section className="py-32">
      <div className="container mx-auto">
        <div className="mb-12 flex w-full items-start justify-between gap-12">
          <div className="w-full md:w-1/2">
            <Accordion type="single" className="w-full" defaultValue="item-1">
              {features.map((tab) => (
                <AccordionItem key={tab.id} value={`item-${tab.id}`}>
                  <AccordionTrigger
                    onClick={() => {
                      setActiveImage(tab.image);
                      setActiveTabId(tab.id);
                    }}
                    className="cursor-pointer py-5 !no-underline transition"
                  >
                    <h6
                      className={`text-xl font-semibold ${tab.id === activeTabId ? "text-foreground" : "text-muted-foreground"}`}
                    >
                      {tab.title}
                    </h6>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="mt-3 text-muted-foreground">
                      {tab.description}
                    </p>
                    <div className="mt-4 md:hidden">
                      <Image
                        src={tab.image}
                        alt={tab.title}
                        width={800}
                        height={600}
                        className="h-full max-h-80 w-full rounded-md object-cover"
                      />
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div className="relative m-auto hidden w-1/2 overflow-hidden rounded-xl bg-muted md:block">
          <Image
              src={activeImage}
              alt="Feature preview"
              width={800}
              height={600}
              className="aspect-[4/3] rounded-md object-cover pl-4"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export { Feature };