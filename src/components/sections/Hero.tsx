import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section id="hero" className="relative w-full min-h-[calc(100vh-3.5rem)] flex items-center justify-center text-center overflow-hidden">
      <div className="container z-10 animate-in fade-in-0 slide-in-from-bottom-5 duration-500">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none bg-clip-text text-transparent bg-gradient-to-r from-primary to-foreground/70">
          Your Name
        </h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mt-4">
          ECE Student | Developer | Tech Enthusiast
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <a href="#projects">
            <Button size="lg" className="transition-transform duration-300 hover:scale-105">View Projects</Button>
          </a>
          <a href="#contact">
            <Button size="lg" variant="outline" className="transition-transform duration-300 hover:scale-105">
              Contact Me <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </div>
      </div>
       <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_400px_at_50%_300px,_hsl(var(--primary)/0.15),_transparent)]"></div>
    </section>
  );
}
