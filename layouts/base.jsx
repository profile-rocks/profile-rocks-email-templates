import { Body, Container, Font, Head, Hr, Html, Img, Preview, Section, Text } from "@react-email/components";
import CustomLink from "#components/link";

const BASE_URL = process.env.NODE_ENV === "development" ? "/static" : "https://www.profile.rocks";
const REPLY_EMAIL_ADDRESS = process.env.REPLY_EMAIL_ADDRESS || "support@contact.profile.rocks";
const SEPARATOR = "•";

/**
 * @function
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {string} props.preview
 * @param {string} props.title
 * @returns {React.ReactNode}
 */
export default function EmailLayout({ children, preview, title }) {
  return (
    <Html lang="en" style={styleHtml}>
      <Head>
        <Font
          fallbackFontFamily={["Helvetica", "Arial", "Verdana", "sans-serif", "monospace"]}
          fontFamily="Inter"
          fontStyle="normal"
          fontWeight={400}
          webFont={{
            format: "woff2",
            url: "https://cdn.jsdelivr.net/fontsource/fonts/inter:vf@latest/latin-wght-normal.woff2"
          }}
        />
        <title>{`${title} | profile.rocks`}</title>
      </Head>
      <Preview>{preview}</Preview>
      <Body style={styleBody}>
        <Container style={styleContainer}>
          <Img alt="profile.rocks" draggable={false} height="45" src={BASE_URL + "/logo-long.png"} style={styleLogo} width="271" />
          {children}
          <Text style={styleDisclaimer}>
            profile.rocks will never email you to ask to disclose or verify your credit card or banking account number.
          </Text>
          <Text style={styleDisclaimer}>
            Please do not reply to this email address, if you need assistance or simply want to get in touch, please visit the{" "}
            <CustomLink href="https://www.profile.rocks/i/contact">contact page</CustomLink> or send an email to {REPLY_EMAIL_ADDRESS}
          </Text>
          <Hr style={styleLine} />
          <Section style={styleFooter}>
            <Text>
              <CustomLink href="https://www.profile.rocks/i/help">Help</CustomLink> {SEPARATOR}{" "}
              <CustomLink href="https://www.profile.rocks/i/privacy">Privacy</CustomLink> {SEPARATOR}{" "}
              <CustomLink href="https://www.profile.rocks/i/terms">Terms</CustomLink> {SEPARATOR}{" "}
              <CustomLink href="https://www.profile.rocks/i/legal-notice">Legal Notice</CustomLink>
            </Text>
            <Text style={styleCopyright}>© {"{{year}}"} profile.rocks</Text>
            <Text style={styleCopyright}>All rights reserved</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

/**
 * @type {React.CSSProperties}
 */
const styleHtml = {
  colorScheme: "dark light"
};

/**
 * @type {React.CSSProperties}
 */
const styleBody = {
  backgroundColor: "#000",
  color: "#c5c8c9",
  lineHeight: "1.5"
};

/**
 * @type {React.CSSProperties}
 */
const styleContainer = {
  padding: "16px"
};

const styleDisclaimer = {
  color: "#a5a8a9"
};

/**
 * @type {React.CSSProperties}
 */
const styleLogo = {
  marginBottom: "24px",
  marginLeft: "auto",
  marginRight: "auto",
  userSelect: "none"
};

/**
 * @type {React.CSSProperties}
 */
const styleLine = {
  borderColor: "#303335",
  marginTop: "28px"
};

/**
 * @type {React.CSSProperties}
 */
const styleFooter = {
  textAlign: "center"
};

/**
 * @type {React.CSSProperties}
 */
const styleCopyright = {
  color: "#a5a8a9",
  margin: 0
};
