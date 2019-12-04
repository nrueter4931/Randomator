interface Ipassword {
    generatedPassword: string;
}

export class PasswordClass {
    public generatedPassword: string;

    constructor(thePassword: Ipassword) {
        Object.assign(this, thePassword);
    }

}