import { createHelia } from 'npm:helia'

const node = await createHelia()

console.info('Helia is running')
console.info('PeerId:', node.libp2p.peerId.toString())