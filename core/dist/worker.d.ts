import { Chain } from './chain';
import { Block } from './block';
declare class Worker {
    readonly chain: Chain;
    findBlock: (data: string) => Promise<Block>;
    constructor(chain: Chain);
}
export { Worker };
