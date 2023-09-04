'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');

const FileChunk = core.registerPlugin('FileChunk', {
    web: () => Promise.resolve().then(function () { return web; }).then(m => new m.FileChunkWeb()),
});

class FileChunkWeb extends core.WebPlugin {
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

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    FileChunkWeb: FileChunkWeb
});

exports.FileChunk = FileChunk;
//# sourceMappingURL=plugin.cjs.js.map
