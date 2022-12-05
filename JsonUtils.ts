export default class JsonUtils {
    public jsonString = (value: any) => {
        return JSON.stringify(Array.from(value.entries()));
    }

    public jsonObj = (parameters: any): any => {
        if (!parameters || typeof (parameters) === 'object') {
            try {
                return JSON.parse(parameters || '{}')
            } catch (err) {
            }
        }
        return JSON.stringify(parameters)
    }

    public encodeJson = (param: {}) => {
        return encodeURIComponent(JSON.stringify(param));
    }

    public decodeJson = (param: any) => {
        return JSON.parse(decodeURIComponent(param));
    }
}
