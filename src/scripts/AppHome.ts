import { Vue, Component } from "vue-property-decorator";
import HackathonTimer from "@/components/HackathonTimer.vue";

@Component({
    components: {
        "hackathon-timer": HackathonTimer
    }
})
export default class AppHome extends Vue { }
