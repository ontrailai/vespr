import { AlertTriangle, Database, FileWarning, TrendingDown } from "lucide-react"

const stats = [
  {
    icon: TrendingDown,
    stat: "70%",
    label: "of AI projects fail",
  },
  {
    icon: Database,
    stat: "3 out of 4",
    label: "companies report data not AI-ready",
  },
  {
    icon: FileWarning,
    stat: "80%",
    label: "of data scientist time spent on cleaning",
  },
  {
    icon: AlertTriangle,
    stat: "$881M",
    label: "lost by one company on bad AI data decisions",
  },
]

export function ProblemSection() {
  return (
    <section id="problem" className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            {"You Bought the AI. It Still Doesn't Work. Here's Why."}
          </h2>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
            70% of AI projects fail. Not because the AI is bad. Because the data underneath it is a disaster.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.label}
              className="relative rounded-xl border border-border bg-card p-6 transition-colors hover:border-accent/50"
            >
              <item.icon className="h-8 w-8 text-accent" />
              <p className="mt-4 text-3xl font-bold text-foreground">{item.stat}</p>
              <p className="mt-1 text-sm text-muted-foreground">{item.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-xl border border-border bg-card p-8 lg:p-12">
          <div className="mx-auto max-w-3xl space-y-6 text-muted-foreground">
            <p className="text-lg leading-relaxed">
              You hired the agency. You bought the tools. You built the chatbot. And it gives wrong answers, misses context, and makes mistakes that embarrass your team in front of customers.
            </p>
            <p className="text-lg leading-relaxed">
              Why? Because every AI tool you plug in is reading from the same messy, duplicated, inconsistent data you've been duct-taping together for years.
            </p>
            <p className="text-lg leading-relaxed">
              Your customer records live in 4 different systems and none of them agree. Your spreadsheets have 3 versions of the same contact. Your CRM hasn't been cleaned since the last system migration.
            </p>
            <p className="mt-8 border-l-2 border-accent pl-6 text-xl font-medium text-foreground">
              {"Here's the part nobody wants to say out loud: the AI industry has been selling you the roof before anyone poured the foundation."}
            </p>
            <p className="text-lg leading-relaxed">
              Your AI is only as good as your data. And right now, your data is probably terrible.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
