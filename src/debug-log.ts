/**
 * @author WMXPY
 * @namespace Debug_Log
 * @description Debug log
 */

import { Barktler, BarktlerMixin, IRequestConfig, IResponseConfig } from "@barktler/core";

export type DebugLogMixinOptions = {

    readonly isDevelopment: () => boolean;
    readonly logFunction: (...args: any[]) => void;

    readonly requestHeader: string;
    readonly responseHeader: string;
};

export const createDebugLogMixin = (options: Partial<DebugLogMixinOptions> = {}): BarktlerMixin => {

    const mergedOptions: DebugLogMixinOptions = {

        isDevelopment: () => {
            if (!process.env.NODE_ENV) {
                return false;
            }
            return process.env.NODE_ENV.toString().toUpperCase() === 'DEVELOPMENT';
        },
        logFunction: console.log.bind(console),
        requestHeader: 'DEBUG REQUEST',
        responseHeader: 'DEBUG RESPONSE',
        ...options,
    };

    return (instance: Barktler) => {

        instance.preHook.sideEffect.add((request: IRequestConfig) => {

            if (mergedOptions.isDevelopment()) {
                mergedOptions.logFunction(
                    mergedOptions.requestHeader,
                    {
                        url: request.url,
                        headers: request.headers,
                        body: request.body,
                    },
                );
            }
        });
        instance.postHook.sideEffect.add((response: IResponseConfig) => {

            if (mergedOptions.isDevelopment()) {
                mergedOptions.logFunction(
                    mergedOptions.responseHeader,
                    {
                        headers: response.headers,
                        data: response.data,
                    },
                );
            }
        });
    };
};
