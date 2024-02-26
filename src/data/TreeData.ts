import { TreeNode } from '../models/TreeNode'
import { plainToInstance } from 'class-transformer'

export class TreeData {
    public static getData<TNode extends TreeNode = TreeNode>(): TNode[] {
        const rawData: Partial<TreeNode>[] = [
            {
                id: 1,
                value: 0,
                valueToParent: 10,
                addValueCondition: false,
            },
            {
                id: 2,
                value: 0,
                parentId: 1,
                valueToParent: 10,
                addValueCondition: true,
            },
            {
                id: 3,
                value: 0,
                parentId: 1,
                valueToParent: 10,
                addValueCondition: true,
            },
            {
                id: 4,
                value: 0,
                parentId: 2,
                valueToParent: 10,
                addValueCondition: true,
            },
            {
                id: 5,
                value: 0,
                parentId: 4,
                valueToParent: 10,
                addValueCondition: true,
            },
            {
                id: 6,
                value: 0,
                parentId: 3,
                valueToParent: 10,
                addValueCondition: false,
            },
            {
                id: 7,
                value: 0,
                parentId: 6,
                valueToParent: 10,
                addValueCondition: false,
            },
            {
                id: 8,
                value: 0,
                parentId: 4,
                valueToParent: 10,
                addValueCondition: false,
            },
            {
                id: 9,
                value: 0,
                parentId: 8,
                valueToParent: 10,
                addValueCondition: true,
            },
            {
                id: 10,
                value: 0,
                parentId: 7,
                valueToParent: 10,
                addValueCondition: true,
            },
            {
                id: 11,
                value: 0,
                parentId: 4,
                valueToParent: 10,
                addValueCondition: true,
            },
            {
                id: 12,
                value: 0,
                parentId: 8,
                valueToParent: 10,
                addValueCondition: true,
            },
        ]
        return rawData.map(p => plainToInstance(TreeNode, p) as TNode)
    }
}
