import { WebPlugin } from '@capacitor/core';
import type { FileChunkPlugin, FileChunkServerInfo, FileChunkConfiguration, FileChunkReadChunk, FileChunkReadChunkResponse } from './definitions';
export declare class FileChunkWeb extends WebPlugin implements FileChunkPlugin {
    startServer(_options: FileChunkConfiguration): Promise<FileChunkServerInfo>;
    stopServer(): Promise<void>;
    readFileChunk(_options: FileChunkReadChunk): Promise<FileChunkReadChunkResponse>;
}
