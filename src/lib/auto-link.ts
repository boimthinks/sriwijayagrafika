import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

type KeywordEntry = { keyword: string; url: string };

let _cache: KeywordEntry[] | null = null;

function loadKeywords(): KeywordEntry[] {
  if (_cache) return _cache;

  const filePath = resolve(process.cwd(), 'src', 'data', 'auto-link.md');
  const content = readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');

  const entries: KeywordEntry[] = [];
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;

    const colonIndex = trimmed.indexOf(':');
    if (colonIndex === -1) continue;

    const keyword = trimmed.slice(0, colonIndex).trim();
    const url = trimmed.slice(colonIndex + 1).trim();

    if (keyword && url) {
      entries.push({ keyword, url });
    }
  }

  entries.sort((a, b) => b.keyword.length - a.keyword.length);

  _cache = entries;
  return entries;
}

export function applyAutoLinks(html: string): string {
  const entries = loadKeywords();
  if (!entries.length) return html;

  const paragraphRegex = /<p[^>]*>[\s\S]*?<\/p>/gi;

  return html.replace(paragraphRegex, (paragraph) => {
    let result = paragraph;
    for (const { keyword, url } of entries) {
      const regex = new RegExp(`\\b${escapeRegex(keyword)}\\b`, 'i');
      const match = result.match(regex);
      if (match && match.index !== undefined) {
        const before = result.slice(0, match.index);
        const after = result.slice(match.index + match[0].length);
        result = `${before}<a href="${url}" class="text-[#224da8] hover:text-[#ff6634] underline underline-offset-2 transition-colors">${match[0]}</a>${after}`;
      }
    }
    return result;
  });
}

export function applyToPlainText(text: string): string {
  const entries = loadKeywords();
  if (!entries.length) return text;

  let result = text;
  for (const { keyword, url } of entries) {
    const regex = new RegExp(`\\b${escapeRegex(keyword)}\\b`, 'i');
    const match = result.match(regex);
    if (match && match.index !== undefined) {
      const before = result.slice(0, match.index);
      const after = result.slice(match.index + match[0].length);
      result = `${before}<a href="${url}" class="text-[#224da8] hover:text-[#ff6634] underline underline-offset-2 transition-colors">${match[0]}</a>${after}`;
    }
  }
  return result;
}

export function getKeywordEntries(): KeywordEntry[] {
  return loadKeywords();
}

function escapeRegex(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
