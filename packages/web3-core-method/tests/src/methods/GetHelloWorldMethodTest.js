import * as Utils from 'web3-utils';
import AbstractMethod from '../../../../lib/methods/AbstractMethod';
import GetHelloWorldMethod from '../../../../src/methods/GetHellowWorldMethod';

// Mocks
jest.mock('web3-utils');

/**
 * GetHelloWorldMethod test
 */
describe('GetHelloWorldMethodTest', () => {
    let method;

    beforeEach(() => {
        method = new GetHelloWorldMethod(Utils, null, {});
    });

    it('afterExecution should just return the response', () => {
        Utils.toChecksumAddress.mockReturnValueOnce('0x0');

        expect(method.afterExecution([{}])[0]).toEqual('0x0');

        expect(Utils.toChecksumAddress).toHaveBeenCalledWith({});
    });
});
