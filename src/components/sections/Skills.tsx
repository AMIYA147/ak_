import { skills } from '@/lib/data';
import { Badge } from '@/components/ui/badge';

export function Skills() {
  return (
    <section id="skills" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6 animate-in fade-in-0 slide-in-from-bottom-5 duration-500">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">My Skills</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Technologies I'm proficient with and use in my projects.
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-4 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center justify-center gap-2 group">
              <Badge variant="outline" className="flex items-center gap-2 p-3 text-lg transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:scale-110">
                <skill.icon className="h-6 w-6" />
                <span>{skill.name}</span>
              </Badge>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
