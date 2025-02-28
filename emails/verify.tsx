import {
  Body,
  Container,
  Font,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components"

import * as React from "react"



const baseUrl = process.env.URL
  ? `https://${process.env.URL}`
  : "/static"


const fallbackFontFamily: any[] = ["Roboto", "'Google Sans'", "Verdana", "Helvetica", "Georgia", "Arial", "sans-serif"]

const webFont: React.ComponentProps<typeof Font>["webFont"] = {
  url: "https://cdn.jsdelivr.net/fontsource/fonts/inter:vf@latest/latin-wght-normal.woff2",
  format: "woff2"
}

const srcLogo = `${baseUrl}/logo-long.png`

const urlContact = `${baseUrl}/c`
const urlTerms = `${baseUrl}/i/terms`
const urlPrivacy = `${baseUrl}/i/privacy`



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
      <Preview>Verification code: {"{{code}}"}</Preview>
      <Body style={styleBody}>
        <Container>
          <Img
            src={srcLogo}
            width="290"
            height="48"
            alt="profile.rocks™"
            draggable={false}
          />
          <Text>A request has been made to access the platform using an account with this email address. To continue, please enter the following verification code:</Text>
          <Text>{"{{code}}"}</Text>
          <Text>This code will expire in 50 minutes. For security purposes, this code should not be shared with anyone.</Text>
          <Text>If you didn't request this email, no further action is required, you can safely ignore it.</Text>
          <Text>profile.rocks will never email you to ask to disclose or verify your credit card or banking account number.</Text>
          <Text><Link href={urlContact} target="_blank">Contact</Link> • <Link href={urlTerms} target="_blank">Terms</Link> • <Link href={urlPrivacy} target="_blank">Privacy Policy</Link></Text>
          <Text>Copyright © {"{{copyrightYear}}"} profile.rocks</Text>
          <Text>All rights reserved</Text>
        </Container>
      </Body>
    </Html>
  )

}


const styleBody = {
  color: "#FFFFFF",
  backgroundColor: "#000000",
  padding: "1em"
} 