import BuilderTypePage from "../BuilderTypePage";
import VisionaryImg from "../../assets/the-visionary.png";

export default function VisionaryPage() {
  return (
    <BuilderTypePage
      title="The Visionary"
      subtitle="The bold, future-focused Builder who leads with purpose and possibility."
      quote="You don’t just see the future — you feel pulled toward it."
      image={VisionaryImg}
      bgColor="#F5E8EA"
      borderColor="#BF8000"
      mainColor="#BB2109"
      accentColor="#144559"
      description={[
        "You’re the spark. The one with ideas that can’t be ignored. You think in possibilities, feel deeply motivated by purpose, and often sense when change is needed—before anyone else does.",
        "That can feel thrilling. But also... isolating. People may have called you “too much,” “distracted,” or “scattered.” But the truth is: you’re just ahead of the curve.",
        "You think fast, move fast, and dream big. You’re not wrong. You’re just wired differently—and the world needs that.",
      ]}
      snapshotItems={[
        { label: "Primary Trait", value: "Vision-Casting" },
        { label: "Superpower", value: "Turning ideas into movements" },
        { label: "Motivated By", value: "Purpose, possibility, and momentum" },
        { label: "Watch Out For", value: "Overcommitting, burnout, chasing novelty" },
        { label: "What You Need", value: "A rhythm and team that helps you finish what you start" },
      ]}
    />
  );
}
