import Image from 'next/image';

export function About() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid items-center gap-10 px-4 md:px-6 lg:grid-cols-2 lg:gap-16 animate-in fade-in-0 slide-in-from-bottom-5 duration-500">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-primary">About Me</h2>
          <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            I am a ECE undergrad, Blockchain & IoT Enthusiast, Embedded Systems and full stack developer.
          </p>
           <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            When I'm not coding, I enjoy exploring the latest tech trends, contributing to open-source projects, and reading about advancements in AI and embedded systems.
          </p>
        </div>
         <div className="flex justify-center">
          <Image
            src="/ak-logo.png"
            alt="Amiya Kumar brand logo"
            width={400}
            height={400}
            className="rounded-lg object-contain w-full max-w-sm"
            data-ai-hint="logo monogram"
          />
        </div>
      </div>
    </section>
  );
}
