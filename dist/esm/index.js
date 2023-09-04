import { registerPlugin } from '@capacitor/core';
const FileChunk = registerPlugin('FileChunk', {
    web: () => import('./web').then(m => new m.FileChunkWeb()),
});
export * from './definitions';
export { FileChunk };
//# sourceMappingURL=index.js.map