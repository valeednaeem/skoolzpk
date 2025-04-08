"use client";

import { useState } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

const Feature = () => {
  const [activeTabId, setActiveTabId] = useState<number | null>(1);
  const [activeImage, setActiveImage] = useState("https://www.shadcnblocks.com/images/block/placeholder-1.svg");

  return (
    <section className="py-32">
      <div className="container mx-auto">
        <div className="mb-12 flex w-full items-start justify-between gap-12">
          <div className="w-full md:w-1/2">
            <Accordion type="single" className="w-full" defaultValue="item-1">
                <AccordionItem key="1" value="item-1">
                  <AccordionTrigger
                    onClick={() => {
                      setActiveImage("https://www.shadcnblocks.com/images/block/placeholder-1.svg");
                      setActiveTabId(1);
                    }}
                    className="cursor-pointer py-5 !no-underline transition"
                  >
                    <h6
                      className={`text-xl font-semibold ${activeTabId === 1 ? "text-foreground" : "text-muted-foreground"}`}
                    >
                      Ready-To-Use Skoolz.PK
                    </h6>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="mt-3 text-muted-foreground">
                      Browse through our extensive collection of pre-built Cources designed by Professional Teachers. Each cource is carefully crafted to be understandable, accessible and easy.
                    </p>
                    <div className="mt-4 md:hidden">
                      <Image
                        src="https://www.shadcnblocks.com/images/block/placeholder-1.svg"
                        alt="Ready-to-Use Skoolz.PK"
                        width={800}
                        height={600}
                        className="h-full max-h-80 w-full rounded-md object-cover"
                      />
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem key="2" value="item-2">
                  <AccordionTrigger
                    onClick={() => {
                      setActiveImage("https://www.shadcnblocks.com/images/block/placeholder-2.svg");
                      setActiveTabId(2);
                    }}
                    className="cursor-pointer py-5 !no-underline transition"
                  >
                    <h6
                      className={`text-xl font-semibold ${activeTabId === 2 ? "text-foreground" : "text-muted-foreground"}`}
                    >
                      Professionaly Designed Courses
                    </h6>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="mt-3 text-muted-foreground">
                      Our courses are designed by Professional Teachers to help you learn faster and better. We have a wide range of courses available for you to choose from. Simply sign-up with us.
                    </p>
                    <div className="mt-4 md:hidden">
                      <Image
                        src="https://www.shadcnblocks.com/images/block/placeholder-2.svg"
                        alt="Professionaly Designed Courses"
                        width={800}
                        height={600}
                        className="h-full max-h-80 w-full rounded-md object-cover"
                      />
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem key="3" value="item-3">
                  <AccordionTrigger
                    onClick={() => {
                      setActiveImage("https://www.shadcnblocks.com/images/block/placeholder-3.svg");
                      setActiveTabId(3);
                    }}
                    className="cursor-pointer py-5 !no-underline transition"
                  >
                    <h6
                      className={`text-xl font-semibold ${activeTabId === 3 ? "text-foreground" : "text-muted-foreground"}`}
                    >
                      Kids Friendly Courses
                    </h6>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="mt-3 text-muted-foreground">
                      Our courses are designed to be kids friendly. We have a wide range of courses available for kids to choose from. Simply sign-up with us.
                    </p>
                    <div className="mt-4 md:hidden">
                      <Image
                        src="https://www.shadcnblocks.com/images/block/placeholder-3.svg"
                        alt="Kids Friendly Courses"
                        width={800}
                        height={600}
                        className="h-full max-h-80 w-full rounded-md object-cover"
                      />
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem key="4" value="item-4">
                  <AccordionTrigger
                    onClick={() => {
                      setActiveImage("https://www.shadcnblocks.com/images/block/placeholder-4.svg");
                      setActiveTabId(4);
                    }}
                    className="cursor-pointer py-5 !no-underline transition"
                  >
                    <h6
                      className={`text-xl font-semibold ${activeTabId === 4 ? "text-foreground" : "text-muted-foreground"}`}
                    >
                      Accessibility First
                    </h6>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="mt-3 text-muted-foreground">
                      Our courses are designed to be accessible to everyone. We have a wide range of courses available for you to choose from. Simply sign-up with us.
                    </p>
                    <div className="mt-4 md:hidden">
                      <Image
                        src="https://www.shadcnblocks.com/images/block/placeholder-4.svg"
                        alt="Accessibility First"
                        width={800}
                        height={600}
                        className="h-full max-h-80 w-full rounded-md object-cover"
                      />
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem key="5" value="item-5">
                  <AccordionTrigger
                    onClick={() => {
                      setActiveImage("https://www.shadcnblocks.com/images/block/placeholder-5.svg");
                      setActiveTabId(5);
                    }}
                    className="cursor-pointer py-5 !no-underline transition"
                  >
                    <h6
                      className={`text-xl font-semibold ${activeTabId === 5 ? "text-foreground" : "text-muted-foreground"}`}
                    >
                      Modern and Basic Courses
                    </h6>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="mt-3 text-muted-foreground">
                      Our courses are designed to be modern and basic. We have a wide range of courses available for you to choose from. Simply sign-up with us.
                    </p>
                    <div className="mt-4 md:hidden">
                      <Image
                        src="https://www.shadcnblocks.com/images/block/placeholder-5.svg"
                        alt="Modern and Basic Courses"
                        width={800}
                        height={600}
                        className="h-full max-h-80 w-full rounded-md object-cover"
                      />
                    </div>
                  </AccordionContent>
                </AccordionItem>
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