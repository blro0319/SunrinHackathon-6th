import { Vue, Component, Prop } from "vue-property-decorator";
import HackathonCalendar, { DateCalendar, HackathonCalendarDummy } from "@/lib/HackathonCalendar";

@Component
export default class HackathonCalendarTable extends Vue {
    @Prop({
        type: Boolean,
        default: false,
    }) private isdummy!: boolean;

    calendar!: { [key: string]: DateCalendar };
    calendarKeys!: Array<string>;

    created() {
        if (!this.isdummy) {
            this.calendar = HackathonCalendar;
        } else {
            this.calendar = HackathonCalendarDummy;
        }
        this.calendarKeys = Object.keys(this.calendar);
    }

    getDateCalendar(date: string): DateCalendar {
        if (!this.calendarKeys.includes(date)) {
            console.log(`${date} are not on calendar`);
            return new DateCalendar("", []);
        }
        return this.calendar[date];
    }
}
