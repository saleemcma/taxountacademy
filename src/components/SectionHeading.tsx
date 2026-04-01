interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  center?: boolean;
}

const SectionHeading = ({ badge, title, description, center = true }: SectionHeadingProps) => (
  <div className={`mb-12 ${center ? "text-center" : ""}`}>
    {badge && (
      <span className="inline-block mb-3 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 rounded-full">
        {badge}
      </span>
    )}
    <h2 className="text-3xl md:text-4xl font-bold text-foreground">{title}</h2>
    {description && (
      <p className="mt-4 text-muted-foreground max-w-2xl leading-relaxed mx-auto">{description}</p>
    )}
  </div>
);

export default SectionHeading;
