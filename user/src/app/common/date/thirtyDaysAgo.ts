export default function ThirtyDaysAgo() {
    const daysAgo = new Date();
    daysAgo.setDate(daysAgo.getDate() - 30);
    const yyyy = daysAgo.getFullYear();
    const MM = String(daysAgo.getMonth() + 1).padStart(2, '0');
    const dd = String(daysAgo.getDate()).padStart(2, '0');

    return `${yyyy}${MM}${dd}`
}