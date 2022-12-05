export default class StringUtils {
    public isNull = (obj) => {
        return obj === null || obj === undefined || obj === "";
    }

    public isNotNull = (obj) => {
        return obj !== null && obj !== undefined && obj !== "";
    }

    public firstToUpperCase = (str: string): string => {
        return  str[0].toUpperCase() + str.substring(1);
    }

    public capitalizeFirstLetter = (input: string) => {
        return input.charAt(0).toUpperCase() + input.slice(1);
    }

    public toCapital = (str: string): string => {
        return str[0].toUpperCase() + str.slice(1);
    }

    public toTitleCase = (str: string): string => {
        let result: string = "";
        const strToArray: string[] = str.split(" ");
        for (let i = 0; i < strToArray.length; i++) {
            result += " " + this.toCapital(strToArray[i]);
        }
        return result.trimLeft();
    }

    public textToSlug = (str: string): string => {
        return  str.replace(/[\s.]/g, "-");
    }

    public slugToText = (str: string): string => {
        return str.replace(/[-]/g, " ");
    }

    public capitalizeString = (str: string): string => {
        if (str === "") {
            return str
        }

        const firstLetter = str.slice(0, 1)
        return `${firstLetter.toUpperCase()}${str.slice(1, str.length)}`
    }

    public generateUID = (str: string): string => {
        return (
            Math.random().toString(36).substr(2, 9) +
            Math.random().toString(36).substr(2, 9)
        );
    }

    public isEmpty = (input: string = '', removeSpaces: boolean = true): boolean => {
        return (
            removeSpaces
                ? input.replace(/\s/g, '').length === 0
                : input.length === 0
        );
    }

    public normalizeString = (str: string) => {
        return str.toLowerCase().trim()
    }

    public randomString = (length: number) => {
        let charset =
            '0123456789ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvwxyz-._~';
        let result = '';

        while (length > 0) {
            let bytes = new Uint8Array(16);
            let random = window.crypto.getRandomValues(bytes);

            /* eslint-disable-next-line no-loop-func */
            random.forEach(c => {
                if (length === 0) {
                    return;
                }
                if (c < charset.length) {
                    result += charset[c];
                    length--;
                }
            });
        }
        return result;
    }


    public htmlToString = (html: string) => {
        return html?.replace(/(<([^>]+)>)/gi, "");
    }

    public jsonString = (value: any) => {
        return JSON.stringify(Array.from(value.entries()));
    }

    public truncateString = (string: string, length: number, ending: string) => {
        if (length === null) {
            length = 100;
        }
        if (ending === null) {
            ending = ' ...';
        }
        if (string?.length > length) {
            return string.substring(0, length - ending.length) + ending;
        } else {
            return string;
        }
    };

    public stripTags = (input: string, allowed: string) => {
        allowed = (((allowed || '') + '').toLowerCase().match(/<[a-z][a-z0-9]*>/g) || []).join('');
        const tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi;
        return input.replace(tags, ($0, $1) => (allowed.indexOf('<' + $1.toLowerCase() + '>') > -1 ? $0 : ''));
    };
}
