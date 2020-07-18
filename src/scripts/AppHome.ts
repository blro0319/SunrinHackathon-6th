import { Vue, Component } from "vue-property-decorator";

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
export default class AppHome extends Vue { }
