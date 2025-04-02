import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";


const year = new Date().getFullYear()

const sections = [
  // {
  //   title: "Product",
  //   links: [
  //     { name: "Overview", href: "#" },
  //     { name: "Pricing", href: "#" },
  //     { name: "Marketplace", href: "#" },
  //     { name: "Features", href: "#" },
  //   ],
  // },
  {
    title: "Company",
    links: [
      { name: "About", href: "/about" },
      { name: "Blog", href: "/blog" },
      { name: "Careers", href: "/careers" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Help", href: "/support" },
      { name: "Advertise", href: "/advertise" },
      { name: "Privacy", href: "/privacypolicy" },
    ],
  },
];

const Footer = () => {
  return (
    <section className="py-8">
      <div className="container">
        <div className="flex w-full flex-col gap-8 overflow-hidden rounded-lg bg-accent p-8 my-3 md:rounded-xl lg:flex-row lg:items-center lg:p-16">
          <div className="flex-1">
            <h3 className="text-2xl font-semibold md:mb-2 md:text-4xl lg:mb-3">
              Call to Action
            </h3>
            <p className="text-muted-foreground lg:text-lg">
              Boost your grades with expert resources and personalized support. Subscribe now to unlock your academic potential!
            </p>
          </div>
          <div className="shrink-0">
            <p className="mt-2 text-left text-xs text-muted-foreground">
              View our{" "}
              <a href="/privacypolicy" className="underline hover:text-foreground">
                privacy policy
              </a>
              .
            </p>
          </div>
        </div>

        <footer>
          <div className="flex flex-col items-center justify-between gap-10 text-center lg:flex-row lg:text-left">
            <div className="flex w-full max-w-96 shrink flex-col items-center justify-between gap-6 lg:items-start">
              <div>
                <span className="flex items-center justify-center gap-4 lg:justify-start">
                  <Image
                    src="/public/skoolz-logo.svg"
                    alt=""
                    width={44}
                    height={44}
                    className="h-11"
                  />
                  <p className="text-3xl font-semibold">Skoolz.PK</p>
                </span>
                <p className="mt-6 text-sm text-muted-foreground">
                  371-N, Samanabad, Lahore, Pakistan, 54000.
                  <Link href="tel:+923014536761">+923014536761</Link>
                </p>
              </div>
              <ul className="flex items-center space-x-6 text-muted-foreground">
                <li className="font-medium hover:text-primary">
                  <Link href="#">
                    <FaInstagram className="size-6" />
                  </Link>
                </li>
                <li className="font-medium hover:text-primary">
                  <Link href="#">
                    <FaFacebook className="size-6" />
                  </Link>
                </li>
                <li className="font-medium hover:text-primary">
                  <Link href="#">
                    <FaTwitter className="size-6" />
                  </Link>
                </li>
                <li className="font-medium hover:text-primary">
                  <Link href="#">
                    <FaLinkedin className="size-6" />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-3 gap-6 lg:gap-20">
              {sections.map((section, sectionIdx) => (
                <div key={sectionIdx}>
                  <h3 className="mb-6 font-bold">{section.title}</h3>
                  <ul className="space-y-4 text-sm text-muted-foreground">
                    {section.links.map((link, linkIdx) => (
                      <li
                        key={linkIdx}
                        className="font-medium hover:text-primary"
                      >
                        <Link href={link.href}>{link.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 flex flex-col justify-between gap-4 border-t pt-8 text-center text-sm font-medium text-muted-foreground lg:flex-row lg:items-center lg:text-left">
            <p>&copy; {year} <Link href="/" className="hover:text-black">SkoolzPK</Link>. All rights reserved.</p>
            <ul className="flex justify-center gap-4 lg:justify-start">
              <li className="hover:text-primary">
                <Link href="/termsconditions"> Terms and Conditions</Link>
              </li>
              <li className="hover:text-primary">
                <Link href="/privacypolicy"> Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Footer;