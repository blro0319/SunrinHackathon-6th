import { Vue, Component } from "vue-property-decorator";
import HackathonEvents from '@/lib/HackathonEvents';
// Components //
import HackathonTimer from "@/components/HackathonTimer.vue";
import HackathonCalendarTable from "@/components/HackathonCalendarTable.vue";
import HackathonTitle from "@/components/HackathonTitle.vue";

@Component({
    components: {
        "hackathon-title": HackathonTitle,
        "hackathon-timer": HackathonTimer,
        "hackathon-calendar-table": HackathonCalendarTable
    }
})
export default class AppHome extends Vue {
    showCalendar: boolean = false;
    showApply: boolean = false;

    created() {
        setInterval(() => {
            this.showCalendar = Date.now() >= HackathonEvents["hackathon-start"].date.getTime();
            this.showApply = Date.now() >= HackathonEvents["apply-start"].date.getTime();
        }, 10);
    }
}
