import { WebPlugin } from '@capacitor/core';
export class FileChunkWeb extends WebPlugin {
    ////////////////////////////////////////////////////////////////
    // START SERVER
    async startServer(_options) {
        console.warn('FileChunk does not work on the browser!');
        return {
            version: 2,
            platform: 'web',
            baseUrl: 'not-needed',
            authToken: 'not-needed',
            chunkSize: 0,
            encryptionType: 'none',
            ready: false
        };
    }
    ////////////////////////////////////////////////////////////////
    // STOP SERVER
    async stopServer() {
        console.warn('FileChunk does not work on the browser!');
        // DO NOTHING
    }
    ////////////////////////////////////////////////////////////////
    // READ FILE CHUNK
    async readFileChunk(_options) {
        console.warn('FileChunk does not work on the browser!');
        return { data: '' };
    }
}
//# sourceMappingURL=web.js.map