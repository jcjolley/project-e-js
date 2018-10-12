import { performance } from 'perf_hooks';
import { round } from './round';
import { toNumber } from 'lodash/fp';

class Node<T> {
    public value: T;
    public left: any = null;
    public right: any = null;

    constructor(val: T) {
        this.value = val;
    }
    toString() {
        return `${this.value}`;
    }
}


export const doProblem = () => {
    const input = ` 75
                    95 64
                    17 47 82
                    18 35 87 10
                    20 04 82 47 65
                    19 01 23 75 03 34
                    88 02 77 73 07 63 67
                    99 65 04 28 06 16 70 92
                    41 41 26 56 83 40 80 70 33
                    41 48 72 33 47 32 37 16 94 29
                    53 71 44 65 25 43 91 52 97 51 14
                    70 11 33 28 77 73 17 78 39 68 17 57
                    91 71 52 38 17 14 91 43 58 50 27 29 48
                    63 66 04 68 89 53 67 30 73 16 69 87 40 31
                    04 62 98 27 23 09 70 98 73 93 38 53 60 04 23`;

    // TODO Modify this to make inverted trees from a leaf up.
    const getTree = (str) => {
        const nodes = str.split('\n').map(x => x.trim().split(/\s/g).map(x => new Node(toNumber(x))));
        const root = nodes[0][0];
        for (let i = 0; i < nodes.length; i++) {
            for (let j = 0; j < nodes[i].length; j++) {
                if (nodes[i + 1]) {
                    nodes[i][j].left = nodes[i + 1][j];
                    nodes[i][j].right = nodes[i + 1][j + 1]
                }
            }
        }
        return root;
    }

    const findPath = (root: Node<number>) => {
        let sum = 0;
        let node = root;
        let done = false;
        while (!done) {
            sum += node.value;
            if (node.left && node.right) {
                node = node.left.value > node.right.value ? node.left : node.right;
            } else {
                done = true;
            }
        }
        return sum;
    }
    const t0 = performance.now();
    const root = getTree(input);
    const x = findPath(root);
    const t1 = performance.now();

    console.log(`18. Result: ${x} Time: ${round(t1 - t0, 2)}ms`);

}