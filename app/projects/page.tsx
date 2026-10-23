import ProjectCard from '../project-card'
import Icon01 from '@/public/images/project-icon-01.svg'
import Icon02 from '@/public/images/project-icon-02.svg'
import Icon03 from '@/public/images/project-icon-03.svg'
import Icon04 from '@/public/images/project-icon-04.svg'
import Icon05 from '@/public/images/project-icon-05.svg'
import Icon06 from '@/public/images/project-icon-06.svg'
import Icon07 from '@/public/images/project-icon-07.svg'
import { type Item } from '../project-card'
import WidgetNewsletter from '@/components/widget-newsletter'

export const metadata = {
  title: 'Projects - My Personal and Professional Work',
  description: 'Explore my portfolio of personal and professional projects, showcasing my skills and experiences in various fields.',
}

export default function Projects() {

  const items01: Item[] = [
    {
      id: 0,
      icon: Icon01,
      slug: 'https://github.com/Nekkestu13/stock-availability-bot',
      title: 'stock availability bot',
      excerpt: "A Python bot that monitors an online clothing store, extracts product names, prices and availability with web scraping, and sends the results by email. It runs unattended on a Raspberry Pi Zero WH, scheduled with cron, so no personal computer has to stay on.",
      status: "open-source",
    },
    {
      id: 1,
      icon: Icon02,
      slug: 'https://github.com/Nekkestu13/esp32-cam-security-system',
      title: 'ESP32 cam security system',
      excerpt: 'A low-cost home security prototype built around an ESP32-CAM, a magnetic door/window contact sensor and Gmail SMTP. When the sensor detects that a door or window has been opened, the device captures a photo, emails it as an alert and exposes a live video stream on the local network.',
      status: "open-source"
    },
  ]

{/*  const items02: Item[] = [
  ]*/}

  return (
    <div className="grow md:flex space-y-8 md:space-y-0 md:space-x-8 pt-12 md:pt-16 pb-16 md:pb-20">

      { /* Middle area */}
      <div className="grow">
        <div className="max-w-[700px]">

          <section>
            {/* Page title */}
            <h1 className="h1 font-aspekta mb-12">Nice stuff I've built</h1>
            {/* Page content */}
            <div className="space-y-10">
              {/* Side Hustles cards */}
              <section>
                <h2 className="h3 font-aspekta font-[650] mb-6">Side Projects</h2>
                {/* Cards */}
                <div className="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-5">

                  {items01.map(item => (
                    <ProjectCard key={item.id} item={item} />
                  ))}

                </div>
              </section>
              {/* Client Projects cards */}
{/*              <section>
                <h2 className="h3 font-aspekta font-[650] mb-6">Client Projects</h2>
                {/* Cards */}
{/*                <div className="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-5">

                  {items02.map(item => (
                    <ProjectCard key={item.id} item={item} />
                  ))}

                </div>
              </section>*/}
            </div>
          </section>

        </div>
      </div>

      { /* Right sidebar */}
      <aside className="md:w-[240px] lg:w-[300px] shrink-0">
        <div className="space-y-6">

          <WidgetNewsletter />

        </div>
      </aside>

    </div>
  )
}
