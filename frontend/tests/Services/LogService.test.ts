import LogService from "Services/LogService";
import {ELogLevel} from "Services/AbstractLogService";

describe("Test App Component", () => {
    const log = LogService.prototype.log = jest.fn();
    const logger = new LogService(ELogLevel.LOG_LEVEL_INFO);

    it("Logs correctly", () => {
        logger.log("Test", ELogLevel.LOG_LEVEL_ERROR);
        expect(log).toHaveBeenCalledTimes(1);
    });
});