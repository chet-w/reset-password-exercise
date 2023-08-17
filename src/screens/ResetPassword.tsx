import { Screen } from "../components/layout";
import { Heading, Paragraph } from "../components/typography";
import { Button, Form, PasswordField } from "../components/form";
import { PasswordRequirements } from "./components/PasswordRequirements";
import { useMemo, useState } from "react";
import { validatePassword } from "./helpers";

export const ResetPassword = () => {
    const [password, setPassword] = useState<string>();
    const [confirmedPassword, setConfirmedPassword] = useState<string>();

    const isPasswordValid = useMemo(
        () => validatePassword(password),
        [password]
    );

    const doPasswordsMatch = useMemo(
        () => password && password === confirmedPassword,
        [confirmedPassword, password]
    );

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
                <Button
                    id="SetPasswordBtn"
                    type="primary"
                    disabled={!doPasswordsMatch || !isPasswordValid}
                >
                    Set password
                </Button>
            </Form>
        </Screen>
    );
};
