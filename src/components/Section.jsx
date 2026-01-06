export default function Section({
  id,
  eyebrow,
  title,
  intro,
  level = 2,
  children
}) {
  const HeadingTag = `h${level}`;

  return (
    <section id={id} className="section">
      <div className="section__inner">
        {(eyebrow || title || intro) && (
          <header className="section__header">
            {eyebrow && <p className="section__eyebrow">{eyebrow}</p>}
            {title && <HeadingTag className="section__title">{title}</HeadingTag>}
            {intro && <p className="section__intro">{intro}</p>}
          </header>
        )}
        <div className="section__content">{children}</div>
      </div>
    </section>
  );
}

