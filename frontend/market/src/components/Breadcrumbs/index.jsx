"use cilent";

import { usePathname } from "next/navigation";
import Link from "next/link";
import css from "./style.module.css";

const Breadcrumbs = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter((segment) => segment);

  const breadcrumbs = pathSegments.map((segment, index) => {
    const href = "/" + pathSegments.slice(0, index + 1).join("/");

    const name = decodeURIComponent(segment).replace(/-/g, " "); // Replace hyphens with spaces

    return { name, href };
  });

  return (
    <div className="container">
      <nav aria-label="breadcrumbs" className={css.breadcrumbs}>
        <ul className={css.breadcrumb__list}>
          <li>
            <Link className={css.breadcrumb__link} href="/">
              Home
            </Link>
          </li>
          {breadcrumbs.map((breadcrumb, index) => (
            <li key={index}>
              <span className={css.separator}>/</span>
              <Link className={css.breadcrumb__link} href={breadcrumb.href}>
                {breadcrumb.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Breadcrumbs;
