
export default function Recommendations() {
  return (
    <div className="space-y-8">
      <h2 className="h3 font-aspekta text-slate-800 dark:text-slate-100">Recommendations</h2>
      <ul className="space-y-8">
        {/* Item */}
        <li className="relative group">
          <div className="flex items-start">
            <div className="absolute left-0 h-14 w-14 flex items-center justify-center dark:border-slate-800 dark:bg-gradient-to-t dark:from-slate-800 dark:to-slate-800/30 bg-white dark:bg-slate-900 rounded-full">
              <img className='rounded-full' src='images/sacha-guigui.jpeg' width={56} alt='Sacha GUIGUI' />
            </div>
            <div className="pl-20 space-y-1">
              <div className="font-aspekta font-[650] text-slate-800 dark:text-slate-100">Sacha GUIGUI</div>
              <div className="text-sm font-medium text-slate-800 dark:text-slate-100">Business manager</div>
              <div className="text-sm text-slate-500 dark:text-slate-400">
                “Ryan is reliable and able to work both independently and as part of a team. During the PRIA project, he contributed to both the technical work and the day-to-day management of the project. I could count on him to get things done.”</div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}