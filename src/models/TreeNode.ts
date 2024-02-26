export class TreeNode<TContext = unknown> {
    public id: number
    public parentId?: number
    public value?: number
    public valueToParent?: number
    public addValueCondition?: boolean
    public context?: TContext

    public children?: TreeNode<TContext>[]
}
