import { Link } from "@react-email/components";

/**
 * @function
 * @param {Omit<Parameters<Link>[0],"rel"|"target">} props
 */
export default function CustomLink({ children, ...props }) {
  return (
    <Link {...props} rel="noopener noreferrer" style={styleLink} target="_blank">
      {children}
    </Link>
  );
}

/**
 * @type {React.CSSProperties}
 */
const styleLink = {
  color: "#00af9f"
};
