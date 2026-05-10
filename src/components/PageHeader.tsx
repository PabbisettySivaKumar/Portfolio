import './PageHeader.css';

type Props = {
  entryDate: string;
  title: string;
  page: string;
};

export function PageHeader({ entryDate, title, page }: Props) {
  return (
    <>
      <header className="nb-page-header">
        <div className="nb-page-header__meta">
          <div className="nb-page-header__date">Entry · {entryDate}</div>
          <h1 className="nb-page-header__title">{title}</h1>
        </div>
        <div className="nb-page-header__page">{page} →</div>
      </header>
      <hr className="nb-page-header__rule" />
    </>
  );
}
