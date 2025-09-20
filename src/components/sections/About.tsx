import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

export function About() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container grid items-center gap-10 px-4 md:px-6 lg:grid-cols-2 lg:gap-16 animate-in fade-in-0 slide-in-from-bottom-5 duration-500">
        <div className="flex justify-center">
          <Card className="overflow-hidden rounded-full w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 border-4 border-primary shadow-lg">
            <CardContent className="p-0">
               <Image
                src="https://picsum.photos/seed/profile/400/400"
                alt="Profile Photo"
                width={400}
                height={400}
                className="object-cover w-full h-full"
                data-ai-hint="professional headshot"
              />
            </CardContent>
          </Card>
        </div>
        <div className="space-y-4">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">About Me</div>
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">A Passionate Developer</h2>
          <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            I am a passionate Electronics and Communication Engineering student with a strong interest in software development and technology. I enjoy building applications that are both functional and user-friendly. I'm always eager to learn new technologies and take on challenging projects.
          </p>
           <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            When I'm not coding, I enjoy exploring the latest tech trends, contributing to open-source projects, and reading about advancements in AI and embedded systems.
          </p>
        </div>
      </div>
    </section>
  );
}
