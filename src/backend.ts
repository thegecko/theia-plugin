import * as theia from '@theia/plugin';
import { FileUri } from '@theia/core/lib/node';     // doesn't work
// import { FileUri } from '@theia/core/lib/node/file-uri';     // works

export const start = async () => {
    const path = FileUri.fsPath(__dirname);
    theia.window.showInformationMessage(path);
};
