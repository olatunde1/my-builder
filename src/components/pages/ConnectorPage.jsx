import BuilderTypePage from "../../components/BuilderTypePage";
import ConnectorImg from "../../assets/the connector.png";

export default function ConnectorPage() {
  return (
    <BuilderTypePage
      title="The Connector"
      subtitle="The relational Builder who thrives through people, purpose, and presence."
      quote="You don’t just build systems—you build trust."
      image={ConnectorImg}
      bgColor="#FFEFF3"
      borderColor="#DA5A1A"
      mainColor="#554F73"
      accentColor="#66410C"
      description={[
        "You’re the bridge. The glue. The person who brings energy into the room and connection into the process.",
        "People open up around you. They feel seen, heard, and supported. And while others build frameworks or momentum, you build the relationships that make it all work.",
        "Sometimes your gift is loud and expressive. Other times it’s quiet, steady, and behind the scenes. Either way it’s vital.",
        "You build belonging, and that’s what makes everything else possible.",
      ]}
      snapshotItems={[
        { label: "Primary Trait", value: "Emotional Presence" },
        { label: "Superpower", value: "Building trust and cohesion between people" },
        { label: "Motivated By", value: "Meaning, connection, Impact " },
        { label: "Watch Out For", value: "Emotional exhaustion, people-pleasing, being undervalued " },
        { label: "What You Need", value: "Healthy boundaries, shared responsibility, and space to feel and recharge  " },
      ]}
    />
  );
}
