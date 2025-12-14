export default function HireMe() {
  return (
    <div
      id="hire-me"
      className="relative overflow-hidden text-stone-800 dark:text-stone-100 bg-gradient-to-br from-white via-stone-50 to-rose-50 dark:from-[#0F172A] dark:via-[#0F172A] dark:to-blue-800 p-8 rounded-2xl my-16 shadow-xl dark:shadow-none"
    >
      <div className="relative z-10 flex flex-col items-center text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-rose-600 to-stone-800 dark:from-rose-400 dark:to-stone-200">
          Let&apos;s Work Together
        </h2>

        <p className="text-lg text-stone-600 dark:text-stone-300 max-w-2xl leading-relaxed">
          For any inquiries or project discussions, feel free to reach out.
          I&apos;m always open to new opportunities and collaborations.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center mt-4">
          <a
            href="mailto:taysongermano@gmail.com"
            className="px-8 py-4 bg-indigo-500 hover:text-white hover:bg-indigo-400 text-white rounded-xl font-semibold transition-all shadow-lg flex items-center justify-center gap-2"
          >
            Email: taysongermano@gmail.com
          </a>
          <a
            href="tel:+27834823694"
            className="px-8 py-4 bg-white hover:text-stone-800 hover:bg-stone-50 text-stone-800 border border-stone-200 rounded-xl font-semibold shadow-lg dark:bg-stone-800 dark:text-stone-100 dark:border-stone-700 dark:hover:text-white flex items-center justify-center gap-2"
          >
            Whatsapp: 083 482 3694
          </a>
        </div>
      </div>

      {/* Decorative background blur */}
      <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-rose-200/30 dark:bg-rose-900/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-64 h-64 bg-stone-200/30 dark:bg-stone-700/20 rounded-full blur-3xl pointer-events-none"></div>
    </div>
  );
}
