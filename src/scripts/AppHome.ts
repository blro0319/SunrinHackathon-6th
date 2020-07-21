import { Vue, Component } from "vue-property-decorator";
import HackathonEvents from '@/lib/HackathonEvents';
// Components //
import HackathonTimer from "@/components/HackathonTimer.vue";
import HackathonCalendarTable from "@/components/HackathonCalendarTable.vue";
import HackathonTitle from "@/components/HackathonTitle.vue";
import HackathonPointMenu from "@/components/HackathonPointMenu.vue";

@Component({
    components: {
        "hackathon-title": HackathonTitle,
        "hackathon-timer": HackathonTimer,
        "hackathon-calendar-table": HackathonCalendarTable,
        "hackathon-point-menu": HackathonPointMenu
    }
})
export default class AppHome extends Vue {
    showApply: boolean = false;
    showCalendar: boolean = false;
    showPointMenu: boolean = false;

    created() {
        setInterval(() => {
            this.showApply = Date.now() >= HackathonEvents["apply-start"].date.getTime();
            this.showCalendar = Date.now() >= HackathonEvents["orientation"].date.getTime();
            this.showPointMenu = Date.now() >= HackathonEvents["hackathon-start"].date.getTime();
        }, 10);
    }
}
