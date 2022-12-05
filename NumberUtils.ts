export default class NumberUtils {
    public formatMoney = (value: any) => {
        const options = {
            style: 'currency',
            currency: 'BDT',
            minimumFractionDigits: 2,
        }

       /* if (Number(value) % 100 === 0) {
            options.minimumFractionDigits = 0
        }*/

        const formatter = new Intl.NumberFormat('en-IN', options)
        return formatter.format(this.round(this.toNumber(value), 2))
    }

    public formatNumber = (value: any, trimTrailingZeroes:boolean = true, digitCount: number = 2) => {
        if(value === null || value === undefined || value === '') return 0;

        const options = {
            style: 'decimal',
            minimumFractionDigits: digitCount,
        }

        if (trimTrailingZeroes) {
            options.minimumFractionDigits = 0
        }

        /*if (Number(value) % 100 === 0) {
            options.minimumFractionDigits = 0
        }*/

        const formatter = new Intl.NumberFormat('en-IN', options)
        return formatter.format(this.round(this.toNumber(value), digitCount))
    }

    public formatNumberInteger = (value: any) => {
        const options = {
            style: 'decimal',
            minimumFractionDigits: 0,
        }

        /*if (Number(value) % 100 === 0) {
            options.minimumFractionDigits = 0
        }*/

        const formatter = new Intl.NumberFormat('en-IN', options)
        return formatter.format(this.round(this.toNumber(value), 0))
    }

    public formatPercentage = (value: number): string => {
        const options = {
            style: 'percent',
            minimumFractionDigits: 1,
        }

        const formatter = new Intl.NumberFormat('en-IN', options)
        return formatter.format(this.round(this.toNumber(value), 2))
    }

    public toNumber = (value: any): number => {
        if(value === null || value === undefined || value === '') return 0;
        else if (typeof value === 'string') {
            value = value.replace(',', '');
        }
        return Number(value);
    }

    public round = (amount: number, digitCount: number): number => {
        let precision = Math.pow(10, digitCount);
        return Math.round(amount * precision) / precision;
    }

    public roundUp = (amount: number, digitCount: number): number => {
        let precision = Math.pow(10, digitCount);
        return Math.ceil(amount * precision) / precision;
    }

    public roundDown = (amount: number, digitCount: number): number => {
        let precision = Math.pow(10, digitCount);
        return Math.floor(amount * precision) / precision;
    }

    public roundTruncate = (amount: number, digitCount: number): number => {
        let precision = Math.pow(10, digitCount);
        return Math.trunc(amount * precision) / precision;
    }

    public toFixed = (number: any): string => {
        if (number === null || number === undefined || number === "") { return ''}
        return Number(number).toFixed(2);
    }

}
