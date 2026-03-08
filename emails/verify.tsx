import { Body, Container, Font, Head, Hr, Html, Img, Link, Preview, Section, Text } from "@react-email/components";

let baseUrl: string, urlContact: string, urlTerms: string, urlPrivacy: string;

if (process.env.NODE_ENV === "development") {
  baseUrl = "/static";
  urlContact = "#/i/contact";
  urlTerms = "#/i/terms";
  urlPrivacy = "#/i/privacy";
} else {
  baseUrl = "https://www.profile.rocks";
  urlContact = `${baseUrl}/i/contact`;
  urlTerms = `${baseUrl}/i/terms`;
  urlPrivacy = `${baseUrl}/i/privacy`;
}

export default function EmailVerify() {
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
        <title>Verify - profile.rocks</title>
      </Head>
      <Body style={styleBody}>
        <Preview>Verification code: {"{{code}}"}</Preview>
        <Container style={styleContainer}>
          <Img alt="profile.rocks™" draggable={false} height="48" src={`${baseUrl}/logo-long.png`} style={styleLogo} width="290" />
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
          <Text>profile.rocks will never email you to ask to disclose or verify your credit card or banking account number.</Text>
          <Hr style={styleLine} />
          <Section style={styleFooter}>
            <Text>
              <Link href={urlContact} style={styleLink} target="_blank">
                Contact
              </Link>{" "}
              •{" "}
              <Link href={urlTerms} style={styleLink} target="_blank">
                Terms
              </Link>{" "}
              •{" "}
              <Link href={urlPrivacy} style={styleLink} target="_blank">
                Privacy Policy
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

const styleHtml: React.CSSProperties = {
  colorScheme: "dark light"
};

const styleBody: React.CSSProperties = {
  backgroundColor: "#000",
  color: "#c5c8c9",
  lineHeight: "1.5"
};

const styleContainer: React.CSSProperties = {
  padding: "16px"
};

const styleLogo: React.CSSProperties = {
  margin: "auto"
};

const styleSectionCode: React.CSSProperties = {
  marginTop: "22px",
  textAlign: "center"
};

const styleCode: React.CSSProperties = {
  color: "#1d8",
  fontSize: "28px",
  fontVariantNumeric: "tabular-nums",
  letterSpacing: "2px",
  margin: "0",
  marginLeft: "2px"
};

const styleCodeExpiration: React.CSSProperties = {
  color: "#ddd",
  fontSize: "14px",
  marginBottom: 0,
  marginTop: "20px"
};

const styleCodeNotShare: React.CSSProperties = {
  color: "#ddd",
  fontSize: "14px",
  margin: 0
};

const styleLocation: React.CSSProperties = {
  color: "#a5a8a9",
  fontSize: "14px",
  marginBottom: 0,
  marginTop: "10px"
};

const styleLine: React.CSSProperties = {
  borderColor: "#303335",
  marginTop: "28px"
};

const styleFooter: React.CSSProperties = {
  textAlign: "center"
};

const styleLink: React.CSSProperties = {
  color: "#00af9f"
};

const styleCopyright: React.CSSProperties = {
  color: "#a5a8a9",
  margin: 0
};
