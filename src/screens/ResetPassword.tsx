import { Screen } from "../components/layout";
import { Heading, Paragraph } from "../components/typography";
import { Button, Form, PasswordField } from "../components/form";
import { PasswordRequirements } from "./components/PasswordRequirements";
import { useState } from "react";

export const ResetPassword = () => {
    const [password, setPassword] = useState<string>();
    const [confirmedPassword, setConfirmedPassword] = useState<string>();

    return (
        <Screen>
            <Form>
                <Heading type="page">Reset your password</Heading>
                <Paragraph>
                    Set a new password by filling out the form.
                </Paragraph>
                <PasswordField
                    label="New password"
                    value={password}
                    onChange={setPassword}
                />
                <PasswordField
                    label="Confirm password"
                    value={confirmedPassword}
                    onChange={setConfirmedPassword}
                />
                <PasswordRequirements />
                <Button type="primary">Set password</Button>
            </Form>
        </Screen>
    );
};
