/**
 * @author WMXPY
 * @namespace Debug_Log
 * @description Debug Log
 * @override Unit
 */

import { expect } from "chai";
import * as Chance from "chance";

describe('Given [createDebugLogMixin] function', (): void => {

    const chance: Chance.Chance = new Chance('debug-log-debug-log');

    it('should be able to execute side effect', (): void => {

        expect(chance.string()).to.be.not.equal(chance.string());
    });
});
