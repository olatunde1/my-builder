import BuilderTypePage from "../../components/BuilderTypePage";
import StrategistImg from "../../assets/the strategist.png";

export default function StrategistPage() {
  return (
    <BuilderTypePage
      title="The Strategist"
      subtitle="The precise, pattern-seeking Builder who turns vision into action."
      quote="You don’t just see what’s possible—you map out how to get there."
      image={StrategistImg}
      bgColor="#EAF3F5"
      borderColor="#1E6A7E"
      mainColor="#155E63"
      accentColor="#0E3742"
      description={[
        "You’re a thinker, a planner, a calm presence in the chaos. You have a unique ability to step back, assess the situation, and spot the path forward long before others do.",
        "You’re likely the person friends or coworkers turn to when it’s time to “figure it out.",
        "That doesn’t mean you always have it all together. In fact, it can feel exhausting to be the one who’s always expected to make the plan.",
        "You’re not just the planner. You’re the quiet builder who sees structure as power.",
      ]}
      snapshotItems={[
        { label: "Primary Trait", value: "Structured Thinking" },
        { label: "Superpower", value: "Clarifying complexity into action" },
        { label: "Motivated By", value: "Precision, purpose, progress" },
        { label: "Watch Out For", value: "Overthinking, analysis paralysis, burnout from over-responsibility" },
        { label: "What You Need", value: "Trust in your own vision-not just supporting everyone else’s" },
      ]}
    />
  );
}
