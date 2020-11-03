/**
 * @author WMXPY
 * @namespace Debug_Log
 * @description Debug Log
 * @override Unit
 */

import { expect } from "chai";
import * as Chance from "chance";
import { createDebugLogMixin } from "../../src/debug-log";
import { ExampleAPI, ExampleAPIResponse } from "../mock/example";

describe('Given [createDebugLogMixin] function', (): void => {

    const chance: Chance.Chance = new Chance('debug-log-debug-log');

    it('should be able to execute side effect', async (): Promise<void> => {

        const requestHeader: string = chance.string();
        const responseHeader: string = chance.string();

        const logs: any[] = [];

        const api: ExampleAPI = new ExampleAPI();
        api.useMixin(createDebugLogMixin({
            isDevelopment: () => true,
            logFunction: (...args: any[]) => logs.push(...args),

            requestHeader,
            responseHeader,
        }));

        const response: ExampleAPIResponse = await api.fetch();

        expect(typeof response.hello).to.be.equal('string');
        expect(logs).to.be.lengthOf(4);
        expect(logs[0]).to.be.equal(requestHeader);
        expect(logs[2]).to.be.equal(responseHeader);
    });
});
