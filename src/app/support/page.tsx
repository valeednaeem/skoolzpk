import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

const faqs = [
  {
    question: "What is a FAQ and why is it important?",
    answer:
      "FAQ stands for Frequently Asked Questions. It is a list that provides answers to common questions people may have about a specific product, service, or topic.",
  },
  {
    question: "Why should I use a FAQ on my website or app?",
    answer:
      "Utilizing a FAQ section on your website or app is a practical way to offer instant assistance to your users or customers. Instead of waiting for customer support responses, they can find quick answers to commonly asked questions. ",
  },
  {
    question: "How do I effectively create a FAQ section?",
    answer:
      "Creating a FAQ section starts with gathering the most frequent questions you receive from your users or customers. Once you have a list, you need to write clear, detailed, and helpful answers to each question.",
  },
  {
    question: "What are the benefits of having a well-maintained FAQ section?",
    answer:
      "There are numerous advantages to maintaining a robust FAQ section. Firstly, it provides immediate answers to common queries, which improves the user experience.",
  },
];

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

interface FaqProps {
  heading: string;
  description: string;
  items?: FaqItem[];
  supportHeading: string;
  supportDescription: string;
  supportButtonText: string;
  supportButtonUrl: string;
}

const FaqItem = [
  {
    id: "faq-1",
    question: "What is the return policy?",
    answer:
      "You can return any item within 30 days of purchase for a full refund, provided it is in its original condition.",
  },
  {
    id: "faq-2",
    question: "How do I track my order?",
    answer:
      "Once your order is shipped, you will receive an email with a tracking number. You can use this number on our website to track your order.",
  },
  {
    id: "faq-3",
    question: "Do you offer international shipping?",
    answer:
      "Yes, we ship to most countries worldwide. Shipping costs and delivery times vary depending on the destination.",
  },
  {
    id: "faq-4",
    question: "Can I change my order after it has been placed?",
    answer:
      "You can change your order within 24 hours of placing it by contacting our customer service team.",
  },
  {
    id: "faq-5",
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, PayPal, and Apple Pay.",
  },
  {
    id: "faq-6",
    question: "How can I contact customer support?",
    answer:
      "You can reach our customer support team via email at support@example.com or by calling 1-800-123-4567.",
  },
  {
    id: "faq-7",
    question: "Are there any discounts for bulk purchases?",
    answer:
      "Yes, we offer discounts for bulk purchases. Please contact our sales team for more information.",
  },
]


const Faq = ({
  heading = "Frequently asked questions",
  description = "Find answers to common questions about our products. Can't find what you're looking for? Contact our support team.",
  items = FaqItem,
  supportHeading = "Need more support?",
  supportDescription = "Our dedicated support team is here to help you with any questions or concerns. Get in touch with us for personalized assistance.",
  supportButtonText = "Contact Support",
  supportButtonUrl = "/contactus",
}: FaqProps) => {
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
          {faqs.map((faq, index) => (
            <div key={index} className="mb-8 flex gap-4">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-sm bg-secondary font-mono text-xs text-primary">
                {index + 1}
              </span>
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="font-medium">{faq.question}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16">
        <div className="container space-y-16">
            <div className="mx-auto flex max-w-3xl flex-col text-left md:text-center">
            <h2 className="mb-3 text-3xl font-semibold md:mb-4 lg:mb-6 lg:text-4xl">
                {heading}
            </h2>
            <p className="text-muted-foreground lg:text-lg">{description}</p>
            </div>
            <Accordion
            type="single"
            collapsible
            className="mx-auto w-full lg:max-w-3xl"
            >
            {items.map((item) => (
                <AccordionItem key={item.id} value={item.id}>
                <AccordionTrigger className="transition-opacity duration-200 hover:no-underline hover:opacity-60">
                    <div className="font-medium sm:py-1 lg:py-2 lg:text-lg">
                    {item.question}
                    </div>
                </AccordionTrigger>
                <AccordionContent className="sm:mb-1 lg:mb-2">
                    <div className="text-muted-foreground lg:text-lg">
                    {item.answer}
                    </div>
                </AccordionContent>
                </AccordionItem>
            ))}
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
                {supportHeading}
            </h3>
            <p className="mb-8 max-w-3xl text-muted-foreground lg:text-lg">
                {supportDescription}
            </p>
            <div className="flex w-full flex-col justify-center gap-2 sm:flex-row">
                <Button className="w-full sm:w-auto" asChild>
                <a href={supportButtonUrl} target="_blank">
                    {supportButtonText}
                </a>
                </Button>
            </div>
            </div>
        </div>
    </section>
    </>
    );
};

export default Faq