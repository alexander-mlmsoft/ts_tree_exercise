import { ITreeNodeHandler } from './ITreeNodeHandler'
import { TreeNode } from '../models/TreeNode'

export interface ITreeWalker<THandler extends ITreeNodeHandler<TreeNode>, TNode extends TreeNode> {
    init(nodes: TNode[]): Promise<void>

    reverseWalk(handler: THandler): Promise<void>
}
