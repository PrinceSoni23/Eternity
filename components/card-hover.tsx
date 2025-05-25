import { HoverEffect } from "@/components/ui/card-hover-effect";


export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    path: "innovation-at-core.svg",
  },
  {
    path: "integrity-in-action.svg",
  },
  {
    path: "excellence-collab.svg",
  },
  {
    path: "empowerment.svg",
  },
  {
    path: "sustainibilty.svg",
  },
  {
    path: "customer-centric.svg",
  },
];
