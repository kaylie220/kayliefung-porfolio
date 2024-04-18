import React from "react";
import {
  Html,
  Body,
  Head,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type ContactformEmailProps = {
  senderEmail: string;
  message: string;
};

export default function ContactFormEmail({
  senderEmail,
  message,
}: ContactformEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New Message from your Portfolio site</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
              <Text className="leading-tight text-2xl font-bold">
                You received the following message from the contact form
              </Text>

              <Text>{message}</Text>
              <Hr />
              <Text>The sender email is: {senderEmail}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
