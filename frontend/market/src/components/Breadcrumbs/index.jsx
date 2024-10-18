import css from "./style.module.css";
import useBreadcrumbs from "use-react-router-breadcrumbs";


const Breadcrumbs = () => {
  const breadcrumbs = useBreadcrumbs();

  return (
    <div className={css.index}>
      {breadcrumbs.map(({ match, breadcrumb }, index) => (
        <span key={match.pathname}>
          <a href={match.pathname}>{breadcrumb}</a>
          {index < breadcrumbs.length - 1 && " > "}
        </span>
      ))}
    </div>
  );
};

export default Breadcrumbs;
