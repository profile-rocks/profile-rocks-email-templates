import { Section, Text } from "@react-email/components";
import EmailLayout from "#layouts/base";

export default function EmailVerify() {
  return (
    <EmailLayout title="Verify">
      <Text>
        A request has been made to access the platform using this email address. If you didn't request this email, no further action is
        required, you can safely ignore it. To continue, please enter the following verification code:
      </Text>
      <Section style={styleSectionCode}>
        <Text style={styleCode}>{"{{code}}"}</Text>
        <Text style={styleCodeExpiration}>Valid for 5 minutes</Text>
        <Text style={styleCodeNotShare}>Don't share it with anyone</Text>
        <Text style={styleLocation}>{"{{location}}"}</Text>
      </Section>
    </EmailLayout>
  );
}

/**
 * @type {React.CSSProperties}
 */
const styleSectionCode = {
  marginTop: "22px",
  textAlign: "center"
};

/**
 * @type {React.CSSProperties}
 */
const styleCode = {
  color: "#1d8",
  fontSize: "28px",
  fontVariantNumeric: "tabular-nums",
  letterSpacing: "2px",
  margin: "0",
  marginLeft: "2px"
};

/**
 * @type {React.CSSProperties}
 */
const styleCodeExpiration = {
  color: "#ddd",
  fontSize: "14px",
  marginBottom: 0,
  marginTop: "20px"
};

/**
 * @type {React.CSSProperties}
 */
const styleCodeNotShare = {
  color: "#ddd",
  fontSize: "14px",
  margin: 0
};

/**
 * @type {React.CSSProperties}
 */
const styleLocation = {
  fontSize: "14px",
  marginBottom: 0,
  marginTop: "10px"
};
