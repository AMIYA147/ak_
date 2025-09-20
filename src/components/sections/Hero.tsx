import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Sparkles } from 'lucide-react';

export function Hero() {
  return (
    <section id="hero" className="relative w-full min-h-[calc(100vh-3.5rem)] flex items-center justify-center text-center overflow-hidden">
      <div className="container z-10 animate-in fade-in-0 slide-in-from-bottom-5 duration-500">
        <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl/none">
          Hi, I'm <span className="text-primary">Amiya Kumar Behera</span>
        </h1>
        <p className="mt-6 mx-auto max-w-[700px] text-muted-foreground md:text-xl">
          I am a passionate Electronics and Communication Engineering student with a strong interest in software development and technology.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <a href="#projects">
            <Button size="lg" className="transition-transform duration-300 hover:scale-105 group">
              View Projects <Sparkles className="ml-2 h-4 w-4 group-hover:animate-pulse" />
            </Button>
          </a>
          <a href="#contact">
            <Button size="lg" variant="outline" className="transition-transform duration-300 hover:scale-105">
              Contact Me <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_400px_at_50%_300px,_hsl(var(--primary)/0.1),_transparent)]"></div>
    </section>
  );
}
