import { Body, Container, Font, Head, Hr, Html, Img, Link, Preview, Section, Text } from "@react-email/components";

const SEPARATOR = "•";

const BASE_URL = process.env.NODE_ENV === "development" ? "/static" : "https://www.profile.rocks";

/**
 * @function
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {string} props.title
 * @returns {React.ReactNode}
 */
export default function EmailLayout({ children, title }) {
  return (
    <Html lang="en" style={styleHtml}>
      <Head>
        <Font
          fallbackFontFamily={["Arial", "Helvetica", "Verdana", "Georgia", "sans-serif", "monospace"]}
          fontFamily="Inter"
          fontStyle="normal"
          fontWeight={400}
          webFont={{
            format: "woff2",
            url: "https://cdn.jsdelivr.net/fontsource/fonts/inter:vf@latest/latin-wght-normal.woff2"
          }}
        />
        <title>{`${title} - profile.rocks`}</title>
      </Head>
      <Body style={styleBody}>
        <Preview>Verification code: {"{{code}}"}</Preview>
        <Container style={styleContainer}>
          <Img alt="profile.rocks™" draggable={false} height="45" src={BASE_URL + "/logo-long.png"} style={styleLogo} width="271" />
          {children}
          <Text style={styleDisclaimer}>profile.rocks will never email you to ask to disclose or verify your credit card or banking account number.</Text>
          <Hr style={styleLine} />
          <Section style={styleFooter}>
            <Text>
              <Link href="https://www.profile.rocks/i/help" style={styleLink} target="_blank">
                Help
              </Link>{" "}
              {SEPARATOR}{" "}
              <Link href="https://www.profile.rocks/i/privacy" style={styleLink} target="_blank">
                Privacy
              </Link>{" "}
              {SEPARATOR}{" "}
              <Link href="https://www.profile.rocks/i/terms" style={styleLink} target="_blank">
                Terms
              </Link>
            </Text>
            <Text style={styleCopyright}>
              Copyright © {"{{copyrightYear}}"} profile.rocks
              <br />
              All rights reserved
            </Text>
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
}

/**
 * @type {React.CSSProperties}
 */
const styleLogo = {
  marginLeft: "auto",
  marginRight: "auto",
  marginBottom: "24px",
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
const styleLink = {
  color: "#00af9f"
};

/**
 * @type {React.CSSProperties}
 */
const styleCopyright = {
  color: "#a5a8a9",
  margin: 0
};
