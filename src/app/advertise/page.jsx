  import React from 'react'
  import {
    BatteryCharging,
    GitPullRequest,
    Layers,
    RadioTower,
    SquareKanban,
    WandSparkles,
  } from "lucide-react"

  function page() {
      return (
      <section className="py-32">
        <div className="container">
          <div className="mb-10 md:mb-20">
            <h2 className="mb-2 text-center text-3xl font-semibold lg:text-5xl">
              Why Work With Us
            </h2>
          </div>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col">
                <div className="mb-5 flex size-16 items-center justify-center rounded-full bg-accent">
                  <GitPullRequest className="size-6" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Quality</h3>
                <p className="text-muted-foreground">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe est aliquid exercitationem, quos explicabo repellat?</p>
              </div>
              <div className="flex flex-col">
                <div className="mb-5 flex size-16 items-center justify-center rounded-full bg-accent">
                  <SquareKanban className="size-6" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Experience</h3>
                <p className="text-muted-foreground">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe est aliquid exercitationem, quos explicabo repellat?</p>
              </div>
              <div className="flex flex-col">
                <div className="mb-5 flex size-16 items-center justify-center rounded-full bg-accent">
                  <RadioTower className="size-6" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Support</h3>
                <p className="text-muted-foreground">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe est aliquid exercitationem, quos explicabo repellat?</p>
              </div>
              <div className="flex flex-col">
                <div className="mb-5 flex size-16 items-center justify-center rounded-full bg-accent">
                  <WandSparkles className="size-6" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Innovation</h3>
                <p className="text-muted-foreground">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe est aliquid exercitationem, quos explicabo repellat?</p>
              </div>
              <div className="flex flex-col">
                <div className="mb-5 flex size-16 items-center justify-center rounded-full bg-accent">
                  <Layers className="size-6" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Results</h3>
                <p className="text-muted-foreground">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe est aliquid exercitationem, quos explicabo repellat?</p>
              </div>
              <div className="flex flex-col">
                <div className="mb-5 flex size-16 items-center justify-center rounded-full bg-accent">
                  <BatteryCharging className="size-6" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Efficiency</h3>
                <p className="text-muted-foreground">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe est aliquid exercitationem, quos explicabo repellat?</p>
              </div>
          </div>
        </div>
      </section>
    )
  }

  export default page