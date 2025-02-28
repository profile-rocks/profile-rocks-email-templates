import {
  Body,
  Container,
  Font,
  Head,
  Hr,
  Html,
  Img,
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
  format: "woff2",
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
      <Preview>Verification code: {"{{code}}"}</Preview>
      <Body style={styleBody}>
        <Container style={styleContainer}>
          <Section>
            <Img
              src={`${baseUrl}/logo-long.png`}
              height="48"
              alt="profile.rocks™"
              draggable={false}
            />
            <Hr />
            <Text>Here is the OTP code to log in to your account:</Text>
            <Text>{"{{code}}"}</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  )

}


const styleBody = {
  backgroundColor: "#080910"
}

const styleContainer = {
  color: "#FFFFFF",
  backgroundColor: "#000000",
  padding: "1em",
  border: "thin solid #505254",
  borderRadius: "1em"
}