import { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

type Props = {
  to: string;
  children: ReactNode;
};

export function Link({ to, children }: Props) {
  return (
    <NavLink
      className={({ isActive }) =>
        isActive
          ? 'font-semibold hover:opacity-100'
          : 'transition duration-300 ease-in-out hover:opacity-75'
      }
      to={to}
    >
      {children}
    </NavLink>
  );
}
