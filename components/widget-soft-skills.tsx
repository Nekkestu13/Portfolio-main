export default function WidgetSoftSkills() {
  return (
    <div className="rounded-lg border border-slate-200 dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30 odd:rotate-1 even:-rotate-1 p-5">
      <div className="font-aspekta font-[650] mb-3">Soft Skills</div>
      <ul className="space-y-3">
        <li className="flex justify-between items-center">
          <div className="grow inline-flex mr-1 truncate">
            <span className="text-sky-500 mr-2">*</span> <a className="font-aspekta font-[650] text-sm truncate">Teamwork</a>
          </div>
        </li>
        <li className="flex justify-between items-center">
          <div className="grow inline-flex mr-1 truncate">
            <span className="text-sky-500 mr-2">*</span> <a className="font-aspekta font-[650] text-sm truncate">Proactivity</a>
          </div>
        </li>
        <li className="flex justify-between items-center">
          <div className="grow inline-flex mr-1 truncate">
            <span className="text-sky-500 mr-2">*</span> <a className="font-aspekta font-[650] text-sm truncate">Rigour</a>
          </div>
        </li>
        <li className="flex justify-between items-center">
          <div className="grow inline-flex mr-1 truncate">
            <span className="text-sky-500 mr-2">*</span> <a className="font-aspekta font-[650] text-sm truncate">Patience</a>
          </div>
        </li>
        <li className="flex justify-between items-center">
          <div className="grow inline-flex mr-1 truncate">
            <span className="text-sky-500 mr-2">*</span> <a className="font-aspekta font-[650] text-sm truncate">Pedagogue</a>
          </div>
        </li>
        <li className="flex justify-between items-center">
          <div className="grow inline-flex mr-1 truncate">
            <span className="text-sky-500 mr-2">*</span> <a className="font-aspekta font-[650] text-sm truncate">Autonomous</a>
          </div>
        </li>
      </ul>
    </div>
  )
}