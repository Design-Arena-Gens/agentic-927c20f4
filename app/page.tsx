export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-white dark:from-black dark:to-zinc-900">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <div className="text-xl font-semibold tracking-tight">Kling</div>
        <nav className="hidden gap-6 text-sm text-zinc-600 dark:text-zinc-300 sm:flex">
          <a href="#features" className="hover:text-black dark:hover:text-white">
            Features
          </a>
          <a href="#about" className="hover:text-black dark:hover:text-white">
            About
          </a>
          <a href="#cta" className="hover:text-black dark:hover:text-white">
            Get Started
          </a>
        </nav>
      </header>

      <main className="mx-auto flex max-w-6xl flex-col items-center px-6 pb-24 pt-20 sm:pt-28">
        <section className="text-center">
          <h1 className="bg-gradient-to-b from-black to-zinc-600 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent dark:from-white dark:to-zinc-400 sm:text-6xl">
            Build with clarity. Ship with speed.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Kling is a minimal, elegant starting point for your next idea.
            Designed for focus, built for performance.
          </p>
          <div id="cta" className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-medium text-white shadow-sm transition-colors hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
            >
              Get Started
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center rounded-full border border-zinc-300 px-6 py-3 text-sm font-medium text-zinc-800 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-800/60"
            >
              Learn More
            </a>
          </div>
        </section>

        <section
          id="features"
          className="mt-20 grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {[
            {
              title: "Modern Stack",
              desc: "Next.js App Router, TypeScript, and Tailwind CSS.",
            },
            {
              title: "Fast by Default",
              desc: "Optimized performance and best practices out of the box.",
            },
            {
              title: "Dark Mode",
              desc: "Thoughtful colors that adapt to your preference.",
            },
            {
              title: "Deploy in Minutes",
              desc: "Seamless deployment to Vercel production.",
            },
            {
              title: "Accessible",
              desc: "Semantic HTML and keyboard-friendly interactions.",
            },
            {
              title: "Extensible",
              desc: "Clean structure ready for your features.",
            },
          ].map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
            >
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                {f.desc}
              </p>
            </div>
          ))}
        </section>

        <section id="about" className="mt-20 w-full">
          <div className="rounded-2xl border border-dashed border-zinc-200 p-8 dark:border-zinc-800">
            <h2 className="text-2xl font-semibold">What is Kling?</h2>
            <p className="mt-3 max-w-3xl text-zinc-600 dark:text-zinc-400">
              Kling is a minimalist template and landing page designed to help
              you launch ideas quickly. Customize the content, add your product
              details, and deploy.
            </p>
          </div>
        </section>
      </main>

      <footer className="mx-auto w-full max-w-6xl px-6 pb-10 pt-6 text-sm text-zinc-500 dark:text-zinc-400">
        <div className="border-t border-zinc-200 pt-6 dark:border-zinc-800">
          ? {new Date().getFullYear()} Kling. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
