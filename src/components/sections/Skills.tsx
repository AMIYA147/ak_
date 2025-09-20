import { skills } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';

export function Skills() {
  return (
    <section id="skills" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6 animate-in fade-in-0 slide-in-from-bottom-5 duration-500">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">My Skills</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Technologies I'm proficient with and use in my projects.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-2 justify-items-center gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center justify-center gap-2 group">
              <Card className="flex items-center justify-center p-6 text-center transition-all duration-300 group-hover:shadow-xl group-hover:scale-110 group-hover:text-primary w-28 h-28">
                <CardContent className="flex items-center justify-center p-0">
                  <skill.icon className="h-12 w-12 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                </CardContent>
              </Card>
              <span className="font-medium text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
