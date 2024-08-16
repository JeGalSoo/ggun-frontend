export default function Yesterday(today: Date): string{
    
    const previousDate = new Date(today);
    previousDate.setDate(previousDate.getDate() - 1);

    const yyyy = previousDate.getFullYear();
    const MM = String(previousDate.getMonth() + 1).padStart(2, '0');
    const dd = String(previousDate.getDate()).padStart(2, '0');

    return `${yyyy}${MM}${dd}`;
}