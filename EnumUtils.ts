export default class EnumUtils {

    public getEnumKeys<T>(enumObject: T): string[] {
        const retArray = new Array<string>();
        Object.keys(enumObject as any).filter(key => isNaN(Number(key))).forEach(
            key => {
                retArray.push(key);
            });
        return retArray;
    }

    public getEnumValues<T>(enumObject: T): (T[keyof T] )[] {
        const retArray = this.getEnumKeys(enumObject).map((key: string) => enumObject[key]);
        return retArray;
    }

    public convertEnumToList<T>(enumObject: T): { key: any, value: string }[] {
        return Object.keys(enumObject as any).map(key => ({
            key,
            value: enumObject[key]
        }));
    }

}