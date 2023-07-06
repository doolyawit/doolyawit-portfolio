type ExternalLinkProp = {
  link: string;
  label: string;
  className?: string;
};

export default function ExternalLink(prop: ExternalLinkProp) {
  return (
    <a href={prop.link} className={prop?.className} target="_blank" rel="noreferrer">
      {prop.label}
    </a>
  );
}
