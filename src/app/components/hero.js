import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ArrowRight, ArrowUpRight } from 'react-icons/fa'

function Hero() {
  return (
    <section>
      <div className="container px-8">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                ✨ Your Online Academy
                {/* <ArrowUpRight className="ml-2 size-4" /> */}
            <h1 className="my-6 text-pretty text-4xl font-bold lg:text-6xl">
              Academy World Wide
            </h1>
            <p className="mb-8 max-w-xl text-muted-foreground lg:text-xl">
              Skoolz.PK is a platform for students and teachers to connect. We provide online learning, courses, students, education, and much more.
            </p>
            <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
                <button className="w-full sm:w-auto">
                  <Link href="/courses">Discover all Courses</Link>
                </button>
                <button variant="outline" className="w-full sm:w-auto">
                  <Link href="/blog">
                    View Articles
                    {/* <ArrowRight className="size-4" /> */}
                  </Link>
                </button>
            </div>
          </div>
          <Image
            src="https://www.shadcnblocks.com/images/block/placeholder-1.svg"
            alt="Skoolz.PK - Academy Online"
            className="max-h-96 w-full rounded-md object-cover"
            width={800}
            height={800}
          />
        </div>
      </div>
    </section>
  )
}

export default Hero