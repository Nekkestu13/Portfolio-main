export const metadata = {
  title: 'Home - Data Engineer Portfolio',
  description: 'Welcome to my Data Engineer portfolio. Explore my projects, skills, and professional journey.',
}

export default function About() {
  return (
    <div className="grow md:flex space-y-8 md:space-y-0 md:space-x-8 pt-12 md:pt-16 pb-16 md:pb-20">

      { /* Middle area */}
      <div className="grow">
        <div className="max-w-[900px]">

          <section>
            { /* Page title */}
          <h1 className="h1 font-aspekta mb-8">Welcome to<br />
            <span className="inline-flex relative text-sky-500 before:absolute before:inset-0 before:bg-sky-200 dark:before:bg-sky-500 before:opacity-30 before:-z-10 before:-rotate-2 before:translate-y-1/4">Ryan Houha&apos;s<br />portfolio
            </span>
          </h1>
            <img className="w-full" src='images/home.png' width={692} height={390} alt="Picture of Ryan Houha" />
            { /* Page content */}
            <div className="text-slate-500 dark:text-slate-400 space-y-8 text-justify">
              <div className="space-y-4">
                <p>
                  I'm an industrial IoT and data engineer with two years of experience working with sensor data and monitoring systems. I've worked with industrial protocols such as Modbus, SNMP and LoRaWAN, as well as data processing with Apache NiFi, storage in MongoDB and reporting with Power BI.
                </p>
                <p>
                  I'm now looking for a data engineering role in the industrial sector where I can build on this experience and explore areas such as predictive analytics and anomaly detection in sensor data.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="h3 font-aspekta text-slate-800 dark:text-slate-100">Career</h2>
                <p>
                  I started out with my final-year internship at Bouygues Energies & Services in Geneva, Switzerland. I worked on a project to upgrade a building supervision system built around Ignition.
                </p>
                <p>
                  This involved reconnecting field equipment, including sensors, automation systems and actuators, working on the database, and developing the human-machine interface (HMI) used to monitor and control the building.
                </p>
                <p>
                  From June 2024 to June 2026, I worked as an R&D Engineer at AGH Consulting on an infrastructure monitoring project for Axians.
                </p>
                <p>
                  My work included researching and testing sensors for our supervision platform, integrating them into the system, and collecting and processing their data.
                </p>
                <p>
                  I worked with Apache NiFi for data processing, MongoDB for storage, and Power BI to build dashboards for clients.
                </p>
                <p>
                  This experience gave me hands-on exposure to several parts of an industrial IoT project, from integrating equipment in the field to making the collected data useful to clients.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="h3 font-aspekta text-slate-800 dark:text-slate-100">About me</h2>
                <p>
                  Outside work, I like keeping active, travelling, cooking and building small side projects. Some are related to data, while others are simply a way to try something new.
                </p>
                <p>
                  I'm also curious about subjects outside technology. I enjoy learning about history, politics, economics and philosophy, usually through books and documentaries.
                </p>
                <p>
                  In the long run, I'd like to lead larger IoT engineering projects and a team of engineers, while staying involved in the technical side of the work.
                </p>
              </div>

              <div className="space-y-4 text-justify">
                <h2 className="h3 font-aspekta text-slate-800 dark:text-slate-100">Let's Connect</h2>
                <p>
                  I'm excited to connect with others via <a className="font-medium text-sky-500 hover:underline" href="mailto:ryan.houha13@gmail.com?subject=Prise de contact" target="_blank">email</a> and <a className="font-medium text-sky-500 hover:underline" href="https://www.linkedin.com/in/ryan-houha-8734b9229/" target='_blank'>LinkedIn</a> to chat about projects and ideas. I am open to hearing about potential opportunities, discussing them with you and then potentially collaborating if it's a good fit.
                </p>
              </div>
            </div>
          </section>

        </div>
      </div>

    </div>
  )
}
