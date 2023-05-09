export function validatePassword(newPwd: string, confirmPwd: string): boolean {
    if (newPwd !== confirmPwd) {
        return false;
    } else {
        return true;
    }
}
