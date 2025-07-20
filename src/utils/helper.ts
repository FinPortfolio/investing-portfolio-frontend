/**
 * Преобразует объект Date в строку формата 'YYYY-MM-DD',
 * подходящую для <input type="date" />
 */
export function formatDateToInput(date: Date): string {
    return date.toISOString().split('T')[0]
}
