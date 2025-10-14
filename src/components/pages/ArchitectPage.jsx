import BuilderTypePage from "../../components/BuilderTypePage";
import ArchitectImg from "../../assets/the architect.png";

export default function ArchitectPage() {
  return (
    <BuilderTypePage
      title="The Architect"
      subtitle="The systems-minded Builder who turns complexity into clarity."
      quote="You don’t just build things — you build things that last."
      image={ArchitectImg}
      bgColor="#EAEAF2"
      borderColor="#2E2A7B"
      mainColor="#554F73"
      accentColor="#2E3A2B"
      description={[
        "You’re the designer behind the scenes. Thoughtful, thorough, and intentional. You don’t chase quick wins you build frameworks, foundations, and solutions that stand the test of time.",
        "People may not always see how much you’re holding—but you’re often the one holding it all together.",
        "You value integrity, structure, and depth. You thrive in environments where planning and excellence are respected—not rushed.",
        "You don’t need to be loud to be powerful. You lead by building things that work.",
      ]}
      snapshotItems={[
        { label: "Primary Trait", value: "System Building" },
        { label: "Superpower", value: "Designing structures that sustain and scale" },
        { label: "Motivated By", value: "Excellence, clarity, long-term success" },
        { label: "Watch Out For", value: "Perfectionism, burnout, working behind the scenes for too long" },
        { label: "What You Need", value: "Time and space to design what works best (without being rushed)" },
      ]}
    />
  );
}
