interface Ipassword {
    ID: number;
    generatedPassword: string;
}

export class PasswordClass {
    public ID: number;
    public generatedPassword: string;

    constructor(thePassword: Ipassword) {
        Object.assign(this, thePassword);
    }

}