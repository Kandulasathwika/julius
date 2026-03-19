import { ScrollReveal } from "@/components/ui/ScrollReveal";

const ACTIONS = [
  {
    title: "Reorder Last Delivery",
    description: "One click to re-add your most recent 24-item order to cart",
    detail: "Last order: Mar 17",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182" />
      </svg>
    ),
  },
  {
    title: "Open Requisition Lists",
    description: "Manage saved lists for recurring orders by station or prep day",
    detail: "3 active lists",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15a2.25 2.25 0 0 1 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25Z" />
      </svg>
    ),
  },
  {
    title: "Browse by Category",
    description: "Explore our full catalog across all product lines and suppliers",
    detail: "5 departments",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25a2.25 2.25 0 0 1-2.25-2.25v-2.25Z" />
      </svg>
    ),
  },
  {
    title: "Check Delivery Cutoff",
    description: "View route windows and next eligible delivery times for your account",
    detail: "Next: Thu 3/20",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
  },
];

export function QuickActions() {
  return (
    <section id="quick-actions" className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24">
      <ScrollReveal>
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-js-accent mb-2">
              Workflow
            </p>
            <h2 className="text-xl md:text-2xl font-bold text-js-text tracking-tight">
              Quick Actions
            </h2>
          </div>
          <p className="text-xs text-js-text-muted hidden sm:block">
            Jump back into your ordering workflow
          </p>
        </div>
      </ScrollReveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {ACTIONS.map((action, i) => (
          <ScrollReveal key={action.title} delay={i * 0.08}>
            <button className="w-full h-full text-left group p-6 rounded-2xl bg-js-surface border border-js-border/20 hover:border-js-accent/25 transition-all duration-300 js-glow js-card-shine flex flex-col">
              <div className="flex items-center justify-between mb-5">
                <div className="w-11 h-11 rounded-xl bg-js-elevated/80 flex items-center justify-center text-js-text-muted group-hover:text-js-accent group-hover:bg-js-accent/10 transition-all duration-300">
                  {action.icon}
                </div>
                <svg className="w-4 h-4 text-js-text-muted/0 group-hover:text-js-text-muted transition-all duration-300 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </div>
              <h3 className="text-sm font-semibold text-js-text mb-1.5 tracking-[-0.01em]">
                {action.title}
              </h3>
              <p className="text-xs text-js-text-muted leading-relaxed mb-4 flex-1">
                {action.description}
              </p>
              <p className="text-[10px] font-medium text-js-text-secondary font-mono uppercase tracking-wider pt-3 border-t border-js-border/15">
                {action.detail}
              </p>
            </button>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
