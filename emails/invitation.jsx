import { Button, Text } from "@react-email/components";
import EmailLayout from "../layouts/base";

export default function EmailVerify() {
  return (
    <EmailLayout title="Invitation">
      <Text>You have been invited to join {"{{profileName}}"} profile.</Text>
      <Text>To accept the invitation, please click on the button below:</Text>
      <Button href="{{link}}">Accept</Button>
    </EmailLayout>
  );
}