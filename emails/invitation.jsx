import { Link, Text } from "@react-email/components";
import CustomLink from "#components/link";
import EmailLayout from "#layouts/base";

export default function EmailVerify() {
  return (
    <EmailLayout title="Invitation" preview={"Invitation to join profile: {{profile}}"}>
      <Text>You have been invited to join profile:</Text>
      <Text style={styleProfileNameId}>{"{{profile}}"}</Text>
      <Text>
        If you did not expect this email, no further action is required, you can safely ignore it. You can accept the invitation inside the{" "}
        <CustomLink href="https://app.profile.rocks/">appication</CustomLink> or by clicking the button below:
      </Text>
      <Link
        href="https://app.profile.rocks/u/invitation/{{invitation}}"
        rel="noopener noreferrer"
        style={styleAcceptButton}
        target="_blank"
      >
        Accept
      </Link>
      <Text style={styleInvitationExpiration}>Valid for 14 days</Text>
    </EmailLayout>
  );
}

/**
 * @type {React.CSSProperties}
 */
const styleAcceptButton = {
  backgroundColor: "#2f3333",
  color: "#ddd",
  display: "block",
  padding: "8px",
  textAlign: "center",
  userSelect: "none"
};

/**
 * @type {React.CSSProperties}
 */
const styleProfileNameId = {
  color: "#1d8",
  wordBreak: "break-all"
};

/**
 * @type {React.CSSProperties}
 */
const styleInvitationExpiration = {
  color: "#ddd",
  textAlign: "center"
};