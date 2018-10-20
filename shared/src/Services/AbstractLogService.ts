/**
 * Log levels
 *  INFO: Debug output for developers
 *  WARNING: Information output for testing systems, e.g. deprecation warnings
 *  ERROR: Error output, e.g. failed api calls
 *  NONE: Do not output log at all
 */
export enum ELogLevel {
    LOG_LEVEL_INFO,
    LOG_LEVEL_WARNING,
    LOG_LEVEL_ERROR,
    LOG_LEVEL_NONE
}

/**
 * Base AbstractLogService shared between frontend and backend
 * This Service is meant to be extended.
 */
abstract class AbstractLogService {
    private readonly logLevel: ELogLevel;

    public constructor(logLevel: ELogLevel) {
        if (logLevel) {
            this.logLevel = logLevel;
        } else {
            this.logLevel = this.generateLogLevel();
        }
    }

    /**
     * Log set message to the console output stream
     *
     * @param message
     * @param logLevel
     */
    public log(message: string, logLevel: ELogLevel = ELogLevel.LOG_LEVEL_INFO): void {
        if (logLevel >= this.logLevel) {
            // tslint:disable:no-console
            console.log(message);
        }
    }

    /**
     * Get a generic catch callback for error logging
     *
     * @param message
     * @param logLevel
     */
    public genericCatch(message: string, logLevel: ELogLevel = ELogLevel.LOG_LEVEL_ERROR): () => void {
        return () => {
            this.log(message, logLevel);
        };
    }

    /**
     * Generates the log level based on the node env
     */
    protected generateLogLevel(): ELogLevel {
        if (process && process.env && process.env.NODE_ENV) {
            if (process.env.NODE_ENV === "production") {
                return ELogLevel.LOG_LEVEL_NONE;
            }
        }

        return ELogLevel.LOG_LEVEL_INFO;
    }
}

export default AbstractLogService;