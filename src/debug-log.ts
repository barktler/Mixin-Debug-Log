/**
 * @author WMXPY
 * @namespace Debug_Log
 * @description Debug log
 */

import { Barktler, BarktlerMixin, IRequestConfig, IResponseConfig } from "@barktler/core";

export type DebugLogMixinOptions = {

    readonly isDevelopment?: () => boolean;
    readonly requestHeader?: string;
    readonly responseHeader?: string;
};

export const createDebugLogMixin: () => BarktlerMixin = (
    options: DebugLogMixinOptions = {
        isDevelopment: () => {
            if (!process.env.NODE_ENV) {
                return false;
            }
            return process.env.NODE_ENV.toString().toUpperCase() === 'DEVELOPMENT';
        },
        requestHeader: "DEBUG REQUEST ➡",
        responseHeader: "DEBUG RESPONSE ☑",
    },
) => {

    return (instance: Barktler) => {

        instance.preHook.sideEffect.add((request: IRequestConfig) => {
            if (options.isDevelopment()) {
                console.log(
                    options.requestHeader,
                    request.url,
                    request.headers,
                    request.body,
                );
            }
        });
        instance.postHook.sideEffect.add((response: IResponseConfig) => {
            if (options.isDevelopment()) {
                console.log(
                    options.responseHeader,
                    response.headers,
                    response.data,
                );
            }
        });
    };
};