import { existsSync } from 'node:fs';
import { join } from 'node:path';

/** El CV solo se enlaza si el PDF real existe en public/. No se genera ningún CV ficticio. */
export const hasCv = () => existsSync(join(process.cwd(), 'public', 'cv.pdf'));
