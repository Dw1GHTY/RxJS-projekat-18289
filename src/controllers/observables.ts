import { Observable, map } from "rxjs";


export function getYesterdayObservable() {
    return new Observable<Date>(observer => {
        const intervalId = setInterval(() => {
            const today = new Date();
            const yesterday = new Date(today);
            yesterday.setDate(today.getDate() - 1);

            observer.next(yesterday);
        }, 5000);
        return () => {
            clearInterval(intervalId);
        };
    }).pipe(
        map((yesterdayDate: Date) => {
            // Pretvorite jučerašnji datum u format "YYYY-MM-DD"
            const year = yesterdayDate.getFullYear();
            const month = String(yesterdayDate.getMonth() + 1).padStart(2, '0');
            const day = String(yesterdayDate.getDate()).padStart(2, '0');
            return `${year}-${month}-${day}`;
        })
    )
}

