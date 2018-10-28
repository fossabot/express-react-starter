interface IConfig  {
    [key: string]: any;
}

abstract class AbstractConfigService {
    protected config: IConfig;

    /**
     * Returns a value inside the config if existent
     *
     * @param {string} key
     */
    public get(key: string) {
        if (!(key in this.config)) {
            return null;
        }

        return this.config[key];
    }

    /**
     *
     * @param {string} key
     * @param {*} value
     */
    public set(key: string, value: any) {
        this.config[key] = value;
    }
}

export default AbstractConfigService;