import BuilderTypePage from "../../components/BuilderTypePage";
import OperatorImg from "../../assets/the operator.png";

export default function OperatorPage() {
  return (
    <BuilderTypePage
      title="The Operator"
      subtitle="The grounded Builder who brings consistency, structure, and momentum."
      quote="You don’t just get it done. You keep everything going."
      image={OperatorImg}
      bgColor="#DFF3F4"
      borderColor="#29557D"
      mainColor="#554F73"
      accentColor="#553014"
      description={[
        "You’re steady. Practical. Clear under pressure. While others are off chasing shiny ideas, you’re the one who gets things across the finish line again and again.",
        "You're not always the loudest voice in the room, but you're often the one people trust to get it done right.",
        "You thrive in environments where clarity and reliability matter—and where your contribution isn’t just recognized, but relied on.",
        "You bring the follow-through that dreams need to become real.",
      ]}
      snapshotItems={[
        { label: "Primary Trait", value: "Steady Execution" },
        { label: "Superpower", value: "Building consistent momentum and follow through" },
        { label: "Motivated By", value: "Clarity, reliability, progress" },
        { label: "Watch Out For", value: "Burnout, resentment, or being underutilized" },
        { label: "What You Need", value: "A clear role, realistic goals, and to know your efforts matter" },
      ]}
    />
  );
}
