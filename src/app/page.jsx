import { Blog } from "@/components/BlogSec";
import { Feature } from "@/components/FeatureSec";
import { Hero } from "@/components/HeroSec";
import { Courses } from "@/components/CoursesSec";
import { FaRegChartBar } from "react-icons/fa";

export default function Home() {
  return (
    <>
    <div className="bg-gray-100 rounded-lg">
      <Hero {...{
        badge: "New",
        heading: "Welcome to our website",
        description: "We are a team of talented developers and designers creating websites for you.",
        buttons: {
         primary: {
            text: "Get Started",
            url: "/get-started",
          },
          secondary: {
            text: "View Projects",
            url: "/projects",
          },
        },
        image : {
            src: "https://www.shadcnblocks.com/images/block/placeholder-1.svg",
            alt: "Skoolz.PK - Academy Online",
        },
        }} />
        </div>

      <div className="mx-auto">
        <Feature />
      </div>

      <div className="mx-auto">
        <Courses {...{
          title: "Our Courses",
          description: "We offer a wide range of courses to help you create your kid's life perfect.",
          items: [
            {
              id: "1",
              title: "Analytics",
              summary: "Track your website's performance with our built-in analytics tool.",
              url: "/public/courses/analytics",
              image: "/public/courses/analytics.jpg",
              price: "$99",
            },
            {
              id: "2",
              title: "SEO",
              summary: "Optimize your website for search engines with our SEO tools.",
              url: "/public/courses/seo",
              image: "/public/courses/seo.jpg",
              price: "$199",
            },
            {
              id: "3",
              title: "E-Commerce",
              summary: "Sell products on your website with our e-commerce tools.",
              url: "/public/courses/e-commerce",
              image: "/public/courses/e-commerce.jpg",
              price: "$499",
            },
            {
              id: "4",
              title: "Mobile Optimization",
              summary: "Make your website work well on mobile devices with our mobile optimization features.",
              url: "/public/courses/mobile-optimization",
              image: "/public/courses/mobile-optimization.jpg",
              price: "$799",
            },
            {
              id: "5",
              title: "Responsive Design",
              summary: "Make your website look great on all devices with our responsive design features.",
              url: "/public/courses/responsive-design",
              image: "/public/courses/responsive-design.jpg",
              price: "$699",
            }
          ]
        }} />
      </div>

      <div className="mx-auto">
        <Blog />
      </div>


    </>
  )
}
