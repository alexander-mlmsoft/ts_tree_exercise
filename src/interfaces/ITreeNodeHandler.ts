import { TreeNode } from '../models/TreeNode'

export interface ITreeNodeHandler<TNode extends TreeNode> {
    handleNode(node: TNode, parent?: TNode): Promise<void>
}
