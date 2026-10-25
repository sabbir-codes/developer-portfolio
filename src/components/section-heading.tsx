export function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="mb-12">
      <p className="mb-2 font-mono text-sm text-primary">{eyebrow}</p>
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      <div className="mt-4 h-1 w-14 rounded-full bg-primary" />
    </div>
  );
}
