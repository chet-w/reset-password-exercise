import { Screen } from "../components/layout";
import { Heading, Paragraph } from "../components/typography";
import { Button, Form, PasswordField } from "../components/form";
import { PasswordRequirements } from "./components/PasswordRequirements";

export const ResetPassword = () => (
    <Screen>
        <Form>
            <Heading type="page">Reset your password</Heading>
            <Paragraph>Set a new password by filling out the form.</Paragraph>
            <PasswordField label="New password" />
            <PasswordField label="Confirm password" />
            <PasswordRequirements />
            <Button type="primary">Set password</Button>
        </Form>
    </Screen>
);
