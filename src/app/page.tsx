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
        // badge: "New",
        // heading: "Welcome to our website",
        // description: "We are a team of talented developers and designers creating websites for you.",
        // buttons: {
        //  primary: {
          //   text: "Get Started",
          //   url: "/get-started",
          // },
          // secondary: {
          //   text: "View Projects",
          //   url: "/projects",
          // },
        // },
        }} />
        </div>

      <div className="mx-auto">
      <Feature {...{
        heading: "Our Features",
        description: "We offer a wide range of features to help you create your perfect website.",
        FeatureItem: [
          {
            id: 1,
            icon: <FaRegChartBar />,
            title: "Analytics",
            description: "Track your website's performance with our built-in analytics tool.",
            url: "/features/analytics",
            image: "/features/analytics.jpg",
          },
          {
            id: 2,
            icon: <FaRegChartBar />,
            title: "SEO",
            description: "Optimize your website for search engines with our SEO tools.",
            url: "/features/seo",
            image: "/features/seo.jpg",
          },
          {
            id: 3,
            icon: <FaRegChartBar />,
            title: "E-Commerce",
            description: "Sell products on your website with our e-commerce tools.",
            url: "/features/e-commerce",
            image: "/features/e-commerce.jpg",
          },
          {
            id: 4,
            icon: <FaRegChartBar />,
            title: "Mobile Optimization",
            description: "Make your website work well on mobile devices with our mobile optimization features.",
            url: "/features/mobile-optimization",
            image: "/features/mobile-optimization.jpg",
          },
          {
            id: 5,
            icon: <FaRegChartBar />,
            title: "Responsive Design",
            description: "Make your website look great on all devices with our responsive design features.",
            url: "/features/responsive-design",
            image: "/features/responsive-design.jpg",
          },
          {
            id: 6,
            icon: <FaRegChartBar />,
            title: "Email Marketing",
            description: "Send targeted email newsletters to your audience with our email marketing tools.",
            url: "/features/email-marketing",
            image: "/features/email-marketing.jpg",
          },
          {
            id: 7,
            icon: <FaRegChartBar />,
            title: "Content Creation",
            description: "Write and edit content for your website with our content creation tools.",
            url: "/features/content-creation",
            image: "/features/content-creation.jpg",
          }
        ]
      }} />
      </div>

      <div className="mx-auto">
        <Courses {...{
          title: "Our Courses",
          description: "We offer a wide range of courses to help you create your kid's life perfect.",
          items: [
            {
              id: 1,
              title: "Analytics",
              summary: "Track your website's performance with our built-in analytics tool.",
              url: "/public/courses/analytics",
              image: "/public/courses/analytics.jpg",
              price: "$99",
            },
            {
              id: 2,
              title: "SEO",
              summary: "Optimize your website for search engines with our SEO tools.",
              url: "/public/courses/seo",
              image: "/public/courses/seo.jpg",
              price: "$199",
            },
            {
              id: 3,
              title: "E-Commerce",
              summary: "Sell products on your website with our e-commerce tools.",
              url: "/public/courses/e-commerce",
              image: "/public/courses/e-commerce.jpg",
              price: "$499",
            },
            {
              id: 4,
              title: "Mobile Optimization",
              summary: "Make your website work well on mobile devices with our mobile optimization features.",
              url: "/public/courses/mobile-optimization",
              image: "/public/courses/mobile-optimization.jpg",
              price: "$799",
            },
            {
              id: 5,
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
        <Blog {...{
          title: "Our Blog",
          description: "Read our latest blog posts to stay informed about our latest developments.",
          items: [
            {
              id: 1,
              title: "Getting Started with shadcn/ui Components",
              summary: "Learn how to quickly integrate and customize shadcn/ui components in your Next.js projects. We'll cover installation, theming, and best practices for building modern interfaces.",
              label: "Tutorial",
              url: "/blog/getting-started-with-shadcn-ui-components",
              image: "/blog/getting-started-with-shadcn-ui-components.jpg",
              date: "March 12, 2023",
            },
            {
              id: 2,
              title: "Building Accessible Web Applications",
              summary: "Explore how to create inclusive web experiences using shadcn/ui's accessible components. Discover practical tips for implementing ARIA labels, keyboard navigation, and semantic HTML.",
              label: "Accessibility",
              url: "/blog/building-accessible-web-applications",
              image: "/blog/building-accessible-web-applications.jpg",
              date: "February 15, 2023",
            },
            {
              id: 3,
              title: "Introducing shadcn/ui v2",
              summary: "Discover the new shadcn/ui v2 release, which includes over 500 new components and updates to existing ones. We'll cover the key features, breaking changes, and migration instructions.",
              label: "Release",
              url: "/blog/introducing-shadcn-ui-v2",
              image: "/blog/introducing-shadcn-ui-v2.jpg",
              date: "January 20, 2023",
            },
          ]
        }} />
      </div>


    </>
  )
}
