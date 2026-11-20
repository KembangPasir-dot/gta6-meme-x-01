// This entry delivers its prepared X post address through POST.json.
import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

try {
  mkdirSync(OUTPUT_DIR, { recursive: true });
  copyFileSync(join(BOT_DIR, 'POST.json'), join(OUTPUT_DIR, 'POST.json'));
} catch (error) {
  console.error('Failed to copy POST.json:', error);
  process.exit(1);
}
