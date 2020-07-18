import { Vue, Component } from "vue-property-decorator";
import HackathonCalendar, { DateCalendar } from "@/lib/HackathonCalendar";

@Component
export default class HackathonCalendarTable extends Vue {
    calendarKeys: Array<string> = Object.keys(HackathonCalendar);

    getDateCalendar(date: string): DateCalendar {
        if (!this.calendarKeys.includes(date)) {
            console.log(`${date} are not on calendar`);
            return new DateCalendar("", []);
        }
        return HackathonCalendar[date];
    }
}
