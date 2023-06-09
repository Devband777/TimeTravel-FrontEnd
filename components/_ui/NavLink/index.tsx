import Link, { LinkProps } from "next/link";
import classNames from "classnames";
import { PropsWithChildren } from "react";
import { useRouter } from "next/router";

type Props = PropsWithChildren<LinkProps> & {
  exact?: boolean;
  activeClassName?: string;
  className?: string;
};

const NavLink: React.FC<Props> = ({
  exact = false,
  activeClassName = "",
  className = "",
  href,
  children,
  ...props
}) => {
  const { pathname } = useRouter();
  const router = useRouter();
  console.log("out", router.locales);

  const isActive = exact ? pathname === href : pathname.startsWith(href.toString());

  return (
    <Link
      href={href}
      className={classNames(className, { [activeClassName]: isActive })}
      {...props}
    >
      {children}
    </Link>
  );
};

export default NavLink;
