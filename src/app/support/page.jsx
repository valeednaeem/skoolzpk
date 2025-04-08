import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import Link from "next/link";

const Faq = () => {
    return (
    <>
    <section className="py-16">
      <div className="container">
        <div className="text-center">
          <h1 className="mt-4 text-4xl font-semibold">
            Common Questions & Answers
          </h1>
          <p className="mt-6 font-medium text-muted-foreground">
            Find out all the essential details about our platform and how it can
            serve your needs.
          </p>
        </div>
        <div className="mx-auto mt-14 max-w-screen-sm">
            <div className="mb-8 flex gap-4">
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="font-medium">What is the return policy?</h3>
                </div>
                <p className="text-sm text-muted-foreground">You can return any item within 30 days of purchase for a full refund, provided it is in its original condition.</p>
              </div>
            </div>
            <div className="mb-8 flex gap-4">
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="font-medium">How do I track my order?</h3>
                </div>
                <p className="text-sm text-muted-foreground">Utilizing a FAQ section on your website or app is a practical way to offer instant assistance to your users or customers. Instead of waiting for customer support responses, they can find quick answers to commonly asked questions. </p>
              </div>
              </div>
              <div className="mb-8 flex gap-4">
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="font-medium">Do you offer international shipping?</h3>
                </div>
                <p className="text-sm text-muted-foreground">Yes, we ship to most countries worldwide. Shipping costs and delivery times vary depending on the destination.</p>
              </div>
              </div>
              <div className="mb-8 flex gap-4">
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="font-medium">Can I change my order after it has been placed?</h3>
                </div>
                <p className="text-sm text-muted-foreground">You can change your order within 24 hours of placing it by contacting our customer service team.</p>
              </div>
              </div>
              <div className="mb-8 flex gap-4">
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="font-medium">What payment methods do you accept?</h3>
                </div>
                <p className="text-sm text-muted-foreground">We accept all major credit cards, PayPal, and Apple Pay.</p>
              </div>
              </div>
              <div className="mb-8 flex gap-4">
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="font-medium">How can I contact customer support?</h3>
                </div>
                <p className="text-sm text-muted-foreground">You can reach our customer support team via email at support@example.com or by calling 1-800-123-4567.</p>
              </div>
              </div>
              <div className="mb-8 flex gap-4">
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="font-medium">Are there any discounts for bulk purchases?</h3>
                </div>
                <p className="text-sm text-muted-foreground">Yes, we offer discounts for bulk purchases. Please contact our sales team for more information.</p>
              </div>
            </div>
        </div>
      </div>
    </section>

    <section className="py-16">
        <div className="container space-y-16">
            <div className="mx-auto flex max-w-3xl flex-col text-left md:text-center">
            <h2 className="mb-3 text-3xl font-semibold md:mb-4 lg:mb-6 lg:text-4xl">
                Frequently asked questions
            </h2>
            <p className="text-muted-foreground lg:text-lg">Find answers to common questions about our products. Can't find what you're looking for? Contact our support team.</p>
            </div>
            <Accordion
            type="single"
            collapsible
            className="mx-auto w-full lg:max-w-3xl"
            >

                <AccordionItem value="faq-1">
                <AccordionTrigger className="transition-opacity duration-200 hover:no-underline hover:opacity-60">
                    <div className="font-medium sm:py-1 lg:py-2 lg:text-lg">
                    What is a FAQ and why is it important?
                    </div>
                </AccordionTrigger>
                <AccordionContent className="sm:mb-1 lg:mb-2">
                    <div className="text-muted-foreground lg:text-lg">
                    FAQ stands for Frequently Asked Questions. It is a list that provides answers to common questions people may have about a specific product, service, or topic.
                    </div>
                </AccordionContent>
                </AccordionItem>

                <AccordionItem value="faq-2">
                <AccordionTrigger className="transition-opacity duration-200 hover:no-underline hover:opacity-60">
                    <div className="font-medium sm:py-1 lg:py-2 lg:text-lg">
                    Why should I use a FAQ on my website or app?
                    </div>
                </AccordionTrigger>
                <AccordionContent className="sm:mb-1 lg:mb-2">
                    <div className="text-muted-foreground lg:text-lg">
                    Utilizing a FAQ section on your website or app is a practical way to offer instant assistance to your users or customers. Instead of waiting for customer support responses, they can find quick answers to commonly asked questions.
                    </div>
                </AccordionContent>
                </AccordionItem>

                <AccordionItem value="faq-3">
                <AccordionTrigger className="transition-opacity duration-200 hover:no-underline hover:opacity-60">
                    <div className="font-medium sm:py-1 lg:py-2 lg:text-lg">
                    How do I effectively create a FAQ section?
                    </div>
                </AccordionTrigger>
                <AccordionContent className="sm:mb-1 lg:mb-2">
                    <div className="text-muted-foreground lg:text-lg">
                    Creating a FAQ section starts with gathering the most frequent questions you receive from your users or customers. Once you have a list, you need to write clear, detailed, and helpful answers to each question.
                    </div>
                </AccordionContent>
                </AccordionItem>

                <AccordionItem value="faq-4">
                <AccordionTrigger className="transition-opacity duration-200 hover:no-underline hover:opacity-60">
                    <div className="font-medium sm:py-1 lg:py-2 lg:text-lg">
                    What are the benefits of having a well-maintained FAQ section?
                    </div>
                </AccordionTrigger>
                <AccordionContent className="sm:mb-1 lg:mb-2">
                    <div className="text-muted-foreground lg:text-lg">
                    There are numerous advantages to maintaining a robust FAQ section. Firstly, it provides immediate answers to common queries, which improves the user experience.
                    </div>
                </AccordionContent>
                </AccordionItem>
  
            </Accordion>
            <div className="mx-auto flex max-w-4xl flex-col items-center rounded-lg bg-accent p-4 text-center md:rounded-xl md:p-6 lg:p-8">
            <div className="relative">
                <Avatar className="absolute mb-4 size-16 origin-bottom -translate-x-[60%] scale-[80%] border md:mb-5">
                <AvatarImage src="https://shadcnblocks.com/images/block/avatar-2.webp" />
                <AvatarFallback>SU</AvatarFallback>
                </Avatar>
                <Avatar className="absolute mb-4 size-16 origin-bottom translate-x-[60%] scale-[80%] border md:mb-5">
                <AvatarImage src="https://shadcnblocks.com/images/block/avatar-3.webp" />
                <AvatarFallback>SU</AvatarFallback>
                </Avatar>
                <Avatar className="mb-4 size-16 border md:mb-5">
                <AvatarImage src="https://shadcnblocks.com/images/block/avatar-1.webp" />
                <AvatarFallback>SU</AvatarFallback>
                </Avatar>
            </div>
            <h3 className="mb-2 max-w-3xl font-semibold lg:text-lg">
                Need more support?
            </h3>
            <p className="mb-8 max-w-3xl text-muted-foreground lg:text-lg">
                Our dedicated support team is here to help you with any questions or concerns. Get in touch with us for personalized assistance.
            </p>
            <div className="flex w-full flex-col justify-center gap-2 sm:flex-row">
                <Button className="w-full sm:w-auto" asChild>
                <Link href="/contactus" target="_blank">
                    Contact Support
                </Link>
                </Button>
            </div>
            </div>
        </div>
    </section>
    </>
    );
};

export default Faq