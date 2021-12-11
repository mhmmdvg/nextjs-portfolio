import NavItem from "./NavItem";
import classnames from "classnames";
import DarkMdButton from "./DarkModeBt";

export default function NavMenu({ dir, onClick }) {
  const dirs = {
    horizontal: "justify-end space-x-10",
    vertical: "flex-col space-y-6",
  };

  const pickedDir = dirs[dir];

  return (
    <ul className={classnames("flex", pickedDir)}>
      <NavItem href="#profile" onClick={onClick}>
        Profile
      </NavItem>
      <NavItem href="#skills" onClick={onClick}>
        Skills
      </NavItem>
      <NavItem href="#projects" onClick={onClick}>
        Projects
      </NavItem>
      <DarkMdButton/>
    </ul>
  );
}
