import AbstractConfigService from "Services/AbstractConfigService";

class ConfigService extends AbstractConfigService {
    /**
     * Initialise config
     */
    constructor() {
        super();
        this.config = {
            name: "hallo"
        };
    }
}

export default ConfigService;