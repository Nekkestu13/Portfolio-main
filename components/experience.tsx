export default function Experience() {
  return (
    <div className="space-y-8">
      <h2 className="h3 font-aspekta text-slate-800 dark:text-slate-100">Work Experience</h2>
      <ul className="space-y-8">
        {/* Item */}
        <li className="relative group">
          <div className="flex items-start before:absolute before:left-0 before:h-full before:w-px before:bg-slate-200 before:dark:bg-slate-800 before:self-start before:ml-[28px] before:-translate-x-1/2 before:translate-y-8 before:group-last-of-type:hidden">
            <div className="absolute left-0 h-14 w-14 flex items-center justify-center border border-slate-200 dark:border-slate-800 bg-white rounded-full">
              <img src='images/logo-axians.svg' width={40} alt='Axians' />
            </div>
            <div className="pl-20 space-y-1">
              <div className="text-xs text-slate-500 uppercase">June 2024 <span className="text-slate-400 dark:text-slate-600">·</span> June 2026</div>
              <div className="font-aspekta font-[650] text-slate-800 dark:text-slate-100">Data engineer</div>
              <div className="text-sm font-medium text-slate-800 dark:text-slate-100">
                <a href='https://www.axians.fr/iot/' target='_blank'>Axians PRIA, Aubagne France</a>
              </div>
              <div className="text-sm text-slate-500 dark:text-slate-400">I worked on an infrastructure monitoring project, integrating data from different types of industrial sensors using Modbus RTU/TCP, SNMP and LoRaWAN. I used Apache NiFi to process and transform the incoming data, stored it in MongoDB, and built Power BI dashboards to make the data accessible to clients.</div>
              <div className="text-sm text-slate-500 dark:text-slate-400">My role also involved testing and integrating new sensors, working with manufacturers, coordinating with the web development team, and handling client requests and after-sales support. I also took care of practical project tasks such as preparing invoices and maintaining technical documentation.</div>
              <div className="text-sm text-slate-500 dark:text-slate-400 italic">Tech stack: Apache NiFi, MongoDB, Python, SQL, Docker, GitLab, Power BI.</div>
            </div>
          </div>
        </li>
        {/* Item */}
        <li className="relative group">
          <div className="flex items-start before:absolute before:left-0 before:h-full before:w-px before:bg-slate-200 before:dark:bg-slate-800 before:self-start before:ml-[28px] before:-translate-x-1/2 before:translate-y-8 before:group-last-of-type:hidden">
            <div className="absolute left-0 h-14 w-14 flex items-center justify-center border border-slate-200 dark:border-slate-800 bg-white rounded-full">
              <img src='images/logo-byes.webp' width={40} alt='Bouygues Energies & Services' />
            </div>
            <div className="pl-20 space-y-1">
              <div className="text-xs text-slate-500 uppercase">March 2022 <span className="text-slate-400 dark:text-slate-600">·</span> August 2022</div>
              <div className="font-aspekta font-[650] text-slate-800 dark:text-slate-100">Control Systems Engineering Intern</div>
              <div className="text-sm font-medium text-slate-800 dark:text-slate-100">
                <a href='https://www.bouygues-es.fr' target='_blank'>Bouygues Energies & Services, Geneva Switzerland</a>
              </div>
              <div className="text-sm text-slate-500 dark:text-slate-400">I worked on a smart building supervision project using Ignition. My role involved connecting PLCs, sensors and other building equipment to the supervision system, working on the underlying data management, and developing HMI screens to help users monitor and control the equipment.</div>
              <div className="text-sm text-slate-500 dark:text-slate-400 italic">Tech stack: Ignition, MySQL, SQL, Python.</div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}