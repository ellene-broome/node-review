export function extractDates(text) {
    const dateRegex = /\b(\d{1,2}[-/]\d{1,2}[-/]\d{2,4}|[A-Za-z]{3,9} \d{1,2},? \d{2,4})\b/g;
    return text.match(dateRegex) || [];
}

export function extractTimes(text) {
    const timeRegex = /\b(\d{1,2}:\d{2}(?::\d{2})?\s?[APMapm]{0,2})\b/g;
    return text.match(timeRegex) || [];
}
