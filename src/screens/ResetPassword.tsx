import { Screen } from "../components/layout";
import { Heading, Paragraph } from "../components/typography";
import { Button, Form, PasswordField } from "../components/form";
import { PasswordRequirements } from "./components/PasswordRequirements";
import { useEffect, useMemo, useState } from "react";

const SPECIAL_CHARACTERS = /[!@#\$%\^\&*\)\(+=._-]/g;

const NUMBERS = /[0-9]/g;

export const ResetPassword = () => {
    const [password, setPassword] = useState<string>();
    const [confirmedPassword, setConfirmedPassword] = useState<string>();

    const isPasswordValid = useMemo(() => {
        // Do not allow blank passwords
        if (!password) return false;

        // Allow Passwords with no special characters if the length is greater than 15
        if (password.length > 15) return true;

        // Allow Password with length greater than 8 with at least one number, and 2 special chars
        if (
            password.length > 8 &&
            password.match(NUMBERS)?.length &&
            (password.match(SPECIAL_CHARACTERS)?.length ?? 0) > 1
        )
            return true;

        return false;
    }, [password]);

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
