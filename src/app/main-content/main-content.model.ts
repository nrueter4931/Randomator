interface Ipassword {
    generatedPassword: string;
    edit: boolean;
}

export class PasswordClass {
    public generatedPassword: string;
    public edit: boolean;

    constructor(thePassword: Ipassword) {
        Object.assign(this, thePassword);
    }

}