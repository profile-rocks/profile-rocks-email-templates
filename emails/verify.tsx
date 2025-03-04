import {
  Body,
  Container,
  Font,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components"

import * as React from "react"


let baseUrl: string, urlContact: string, urlTerms: string, urlPrivacy: string

if (process.env.NODE_ENV === "development") {
  baseUrl = "/static"
  urlContact = "#/c"
  urlTerms = "#/i/terms"
  urlPrivacy = "#/i/privacy"
} else {
  baseUrl = "https://profile.rocks"
  urlContact = `${baseUrl}/i/contact`
  urlTerms = `${baseUrl}/i/terms`
  urlPrivacy = `${baseUrl}/i/privacy`
}

const srcLogo = `${baseUrl}/logo-long.png`


const fallbackFontFamily: any[] = ["Roboto", "'Google Sans'", "Verdana", "Helvetica", "Georgia", "Arial", "sans-serif", "monospace"]

const webFont: React.ComponentProps<typeof Font>["webFont"] = {
  url: "https://cdn.jsdelivr.net/fontsource/fonts/inter:vf@latest/latin-wght-normal.woff2",
  format: "woff2"
}



export default function EmailVerify() {

  return (
    <Html lang="en">
      <Head>
        <Font
          fontFamily="Inter"
          fallbackFontFamily={fallbackFontFamily}
          webFont={webFont}
          fontWeight={400}
          fontStyle="normal"
        />
        <title>Verify - profile.rocks</title>
      </Head>
      <Body style={styleBody}>
        <Preview>Verification code: {"{{code}}"}</Preview>
        <Container style={styleContainer}>
          <Img
            src={srcLogo}
            width="290"
            height="48"
            alt="profile.rocks™"
            draggable={false}
            style={styleLogo}
          />
          <Text>A request has been made to access the platform using this email address. If you didn't request this email, no further action is required, you can safely ignore it. To continue, please enter the following verification code:</Text>
          <Section style={styleSectionCode}>
            <Text style={styleCode}>{"{{code}}"}</Text>
            <Text style={styleCodeExpiration}>Valid for 50 minutes</Text>
            <Text style={styleCodeNotShare}>Don't share it with anyone</Text>
            <Text style={styleLocation}>{"{{location}}"}</Text>
          </Section>
          <Text>profile.rocks will never email you to ask to disclose or verify your credit card or banking account number.</Text>
          <Hr style={styleLine} />
          <Section style={styleFooter}>
            <Text><Link href={urlContact} target="_blank" style={styleLink}>Contact</Link> • <Link href={urlTerms} target="_blank" style={styleLink}>Terms</Link> • <Link href={urlPrivacy} target="_blank" style={styleLink}>Privacy Policy</Link></Text>
            <Text style={styleCopyright}>Copyright © {"{{copyrightYear}}"} profile.rocks<br />All rights reserved</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  )

}



const color3 = "#777B7F"
const colorBorder = "#303336"


const styleBody: React.CSSProperties = {
  color: "#C4C8CC",
  backgroundColor: "#000000"
}

const styleContainer: React.CSSProperties = {
  padding: "1em"
}

const styleLogo: React.CSSProperties = {
  margin: "auto"
}

const styleSectionCode: React.CSSProperties = {
  textAlign: "center",
  marginTop: "2em"
}

const styleCode: React.CSSProperties = {
  fontSize: "2.5em",
  color: "#11DD88",
  letterSpacing: ".125em",
  fontVariantNumeric: "tabular-nums",
  margin: "0",
  marginLeft: ".125em"
}

const styleCodeExpiration: React.CSSProperties = {
  fontSize: ".75em",
  color: "#FFFFFF",
  marginTop: "20px",
  marginBottom: 0
}

const styleCodeNotShare: React.CSSProperties = {
  fontSize: ".75em",
  color: "#FFFFFF",
  margin: 0
}

const styleLocation: React.CSSProperties = {
  fontSize: ".75em",
  marginTop: "10px",
  marginBottom: 0
}

const styleLine: React.CSSProperties = {
  color: colorBorder,
  background: colorBorder,
  borderColor: colorBorder,
  marginTop: "2em"
}

const styleFooter: React.CSSProperties = {
  textAlign: "center"
}

const styleLink: React.CSSProperties = {
  color: "#00AF9F"
}

const styleCopyright: React.CSSProperties = {
  color: color3,
  margin: 0
}