import './SectionHead.css';

type Props = {
  num: string;
  title: string;
};

export function SectionHead({ num, title }: Props) {
  return (
    <div className="nb-section-head">
      <span className="nb-section-head__num">{num}</span>
      <h2 className="nb-section-head__title">{title}</h2>
      <span className="nb-section-head__rule" aria-hidden="true" />
    </div>
  );
}
