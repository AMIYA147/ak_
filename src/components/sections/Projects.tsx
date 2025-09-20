import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { projects } from '@/lib/data';
import { ExternalLink, Github } from 'lucide-react';

export function Projects() {
  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 animate-in fade-in-0 slide-in-from-bottom-5 duration-500">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">My Projects</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Here are some of the projects I've worked on, showcasing my skills and passion for development.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card key={index} className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <CardHeader className="p-0">
                <Image
                  src={`https://picsum.photos/seed/${project.image}/${600}/${400}`}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="object-cover w-full aspect-[3/2]"
                  data-ai-hint={project.imageHint}
                />
              </CardHeader>
              <div className="flex flex-col flex-grow p-6">
                <CardTitle>{project.title}</CardTitle>
                <CardDescription className="mt-2 flex-grow">{project.description}</CardDescription>
              </div>
              <CardFooter className="flex justify-end gap-2 p-6 pt-0">
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm">
                    <ExternalLink className="mr-2 h-4 w-4" /> Live
                  </Button>
                </a>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                  <Button variant="secondary" size="sm">
                    <Github className="mr-2 h-4 w-4" /> GitHub
                  </Button>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
