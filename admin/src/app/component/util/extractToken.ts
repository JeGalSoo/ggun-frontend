
export function extractCookie(input: string, key: string): string {
    const pairs = input.split(';').map(pair => pair.trim().split('='));
    const obj = Object.fromEntries(pairs);
    return obj[key] || '';
}