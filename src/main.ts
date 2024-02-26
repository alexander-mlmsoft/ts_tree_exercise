import { TreeData } from './data/TreeData'
import { ITreeWalker } from './interfaces/ITreeWalker'
import { ITreeNodeHandler } from './interfaces/ITreeNodeHandler'

async function run(): Promise<void> {
    const data = TreeData.getData()

    const walker: ITreeWalker // TODO ITreeWalker Implementation
    await walker.init(data)
    const nodeHandler: ITreeNodeHandler // TODO ITreeNodeHandler Implementation
    await walker.reverseWalk(nodeHandler)
}

run().catch(err => {
    console.log(err)
})
