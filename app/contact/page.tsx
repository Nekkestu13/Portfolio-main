import CalComponent from '@/components/calcom'

export const metadata = {
  title: 'Contact - Schedule a Meeting with Me',
  description: 'Book a call to discuss your needs. Choose a time slot and get a meeting link via email.',
}

export default function Subscribe() {
  return (
    <div className="grow md:flex space-y-8 md:space-y-0 md:space-x-8 pt-12 pb-8">
      <div className="grow">
        <div className="max-w-[1000px]">
          <div className="space-y-10">
            <section>
              <h1 className="h1 font-aspekta mb-6">Schedule a meeting 📞</h1>
              <div className="text-slate-500 dark:text-slate-400 space-y-8">
                <p className="text-base">
                  Let's take a moment to talk together.<br/>
                  You can choose a time slot in my calendar and you will receive a meeting link by email.
                </p> 
                <CalComponent />
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
