# deno_helia
a repository to test running helia in deno

## how to use

```bash
> deno install --allow-scripts=npm:@ipshipyard/node-datachannel@0.26.6,npm:node-datachannel@0.11.0
> deno run test_helia.ts
```

## It works!

```bash
> deno run --allow-sys --allow-env --allow-ffi --allow-net --unstable-broadcast-channel test_helia.ts

Helia is running
PeerId: 12D3KooWPbiZejGSXHqcsEcrLKhZMFjBUs9W2mFwZCNDnWmW4MH6
```

## Old issues

What's weird is that this was failing but https://github.com/SgtPooki/helia-deno worked. I'm guessing it's a difference between how deno treats pure deno projects vs npm projects..

```bash
> deno run test_helia.ts
✅ Granted all env access.
✅ Granted all sys access.
┏ ⚠️  Deno requests ffi access to "/Users/sgtpooki/code/work/ipshipyard/yeus/deno_helia/node_modules/.deno/node-datachannel@0.11.0/node_module✅ Granted all ffi access.
✅ Granted all net access.
Helia is running
PeerId: 12D3KooWNvMwoytMEwDpXrFex2USiYKzyJdSHYiP9dhdaqvaGZWH
error: Uncaught (in promise) Error: Adding membership 239.255.255.250 failed - addMembership EINVAL
    at __node_internal_captureLargerStackTrace (ext:deno_node/internal/errors.ts:91:3)
    at __node_internal_errnoException (ext:deno_node/internal/errors.ts:139:10)
    at Socket.addMembership (node:dgram:145:13)
    at Socket.<anonymous> (file:///Users/sgtpooki/code/work/ipshipyard/yeus/deno_helia/node_modules/.deno/@achingbrain+ssdp@4.1.0/node_modules/@achingbrain/ssdp/dist/src/create-sockets.js:20:28)
    at Socket.emit (ext:deno_node/_events.mjs:394:28)
    at startListening (node:dgram:709:10)
    at node:dgram:279:7
    at Array.processTicksAndRejections (ext:deno_node/_next_tick.ts:39:15)
    at eventLoopTick (ext:core/01_core.js:175:29)
```

However, this was resolved by forcing Deno to use the latest `@achingbrain/ssdp` package, instead of using whichever one it was incorrectly resolving to. (Deno did not resolve to the incorrect/older version when using package.json)
