import { DatePart } from "src/enums/dateParts";

type FormatOptions = | 'MM-dd' | 'yyyy-MM-dd' | 'ddMMyyyy'

export default class DateUtils {

    static GetToday(): Date {
        return new Date();
    }
    
    static GetYesterdayDate(): Date {
        let date = new Date();
        date.setDate(date.getDate() - 1);

        return date;
    }

    static ModifyDate(date: Date, amount: number, datePart: DatePart): Date {
        switch(datePart) {
            case DatePart.Day: {
                date.setDate(date.getDate() + amount);
                break;
            }
            case DatePart.Month: {
                date.setMonth(date.getMonth() + amount);
                break;
            }
            case DatePart.Year: {
                date.setFullYear(date.getFullYear() + amount);
                break;
            }
            default: {
                throw new Error(`Given DatePart: ${datePart} is not valid.`);
            }
        }
        
        return date;
    }

    static ConvertDateToString(date: Date, format: FormatOptions): string {
        let result: string;

        const dateParts: string[] = date.toLocaleString().split(',')[0].split('/');

        const stringDay: string = dateParts[0];
        const stringMonth: string = dateParts[1];
        const stringYear: string = dateParts[2];

        switch(format) {
            case 'MM-dd': {
                result = `${stringMonth}-${stringDay}`;
                break;
            }
            case 'yyyy-MM-dd': {
                result = `${stringYear}-${stringMonth}-${stringDay}`;
                break;
            }
            case 'ddMMyyyy': {
                result = `${stringDay}${stringMonth}${stringYear}`;
                break;
            }
            default: {
                console.info(`Given date format: ${format} is not supported yet. Returning default Date format instead.`);
                result = date.toDateString();
            }
        }

        return result;
    }
}
