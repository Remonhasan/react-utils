export default class ValidationUtils {

    public minLength = (min: number) => (value: string) => {
        return value.length < min;
    }

    public maxLength = (max: number) => (value: string) => {
        return value.length > max;
    }

    public validationEmail = (value: string): string => {
        return '';
    }

    public validationPassword = (value: string) => {
        return '';
    }

    public required = (value: string) => {
        return '';
    }

}
