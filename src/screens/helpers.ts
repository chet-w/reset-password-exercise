const SPECIAL_CHARACTERS = /[!@#\$%\^\&*\)\(+=._-]/g;

const NUMBERS = /[0-9]/g;

export const validatePassword = (password?: string) => {
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
};
