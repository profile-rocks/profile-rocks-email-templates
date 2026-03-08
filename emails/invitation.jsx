import { Link, Text } from "@react-email/components";
import EmailLayout from "../layouts/base";

export default function EmailVerify() {
  return (
    <EmailLayout title="Invitation">
      <Text>You have been invited to join profile:</Text>
      <Text style={styleProfileNameId}>{"{{profileNameId}}"}</Text>
      <Text>To accept the invitation, please click on the button below:</Text>
      <Link href="{{link}}" rel="noopener noreferrer" style={styleAcceptButton} target="_blank">Accept</Link>
    </EmailLayout>
  );
}

/**
 * @type {React.CSSProperties}
 */
const styleProfileNameId = {
  color: "#1d8"
}

/**
 * @type {React.CSSProperties}
 */
const styleAcceptButton = {
  color: "#ddd",
  display: "block",
  backgroundColor: "#2f3333",
  padding: "8px",
  textAlign: "center",
  userSelect: "none"
}
