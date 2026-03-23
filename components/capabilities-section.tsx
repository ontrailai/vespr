import { CheckCircle, Workflow, BarChart3, Target, TrendingUp, DollarSign } from "lucide-react"

const capabilities = [
  {
    icon: CheckCircle,
    title: "Accurate AI Responses",
    description:
      "Your AI assistant answers customer questions correctly on the first try. Not because it's a better model. Because it has access to your real, clean, organized data instead of contradictory records from 6 different systems.",
  },
  {
    icon: Workflow,
    title: "Workflows That Don't Break",
    description:
      "Your automations run end to end without failing at step 3 because a field was missing or a record was duplicated. Built on structured data, not spreadsheet chaos.",
  },
  {
    icon: BarChart3,
    title: "Decisions You Can Trust",
    description:
      'Reports and dashboards that reflect reality. Forecasting that works. AI recommendations based on data that\'s actually accurate. No more "the numbers don\'t look right" meetings.',
  },
  {
    icon: Target,
    title: "One Source of Truth",
    description:
      "Every team, every tool, every system pulling from the same clean database. Sales, ops, support - everyone sees the same information. No more conflicting data across departments.",
  },
  {
    icon: TrendingUp,
    title: "AI That Improves Over Time",
    description:
      "When your foundation is solid, your AI agents learn and improve from real patterns in real data. Not noise. Not duplicates. Actual signal.",
  },
  {
    icon: DollarSign,
    title: "Cost Efficiency",
    description:
      "Without clean data, your $20K AI project balloons to $35K or more just dealing with data problems after the fact. With clean data, everything you build works the first time and scales from there.",
  },
]

export function CapabilitiesSection() {
  return (
    <section id="capabilities" className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            What Becomes Possible When Your Data Is Actually Clean
          </h2>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
            Most AI tools underperform because they're built on garbage. When your data is clean, structured, and connected, everything changes.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((capability) => (
            <div
              key={capability.title}
              className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-accent/50 hover:bg-card/80"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                <capability.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                {capability.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {capability.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
