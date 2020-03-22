export const breakPoint = '768px';
export const workerID = '7f90df6e-b832-44e2-b624-3143d428001f';

export const formatShiftDates = (startDate, endDate) => {
    const startDay = new Date(startDate);
    const endDay = new Date(endDate);
    return `start date: ${startDay.toLocaleDateString()} ${startDay.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}
    end date: ${endDay.toLocaleDateString()} ${endDay.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}`
}
