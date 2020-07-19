<template>
    <div :class="`hackathon-calendar-table ${isdummy ? 'dummy' : ''}`">
        <div
            v-for="(date, index) in calendarKeys"
            :key="`${index}_${getDateCalendar(date).title}`"
            class="date"
        >
            <span class="title">{{ getDateCalendar(date).title }}</span>
            <div class="list">
                <div
                    v-for="(event, index) in getDateCalendar(date).events"
                    :key="`${index}_${event.time}_${event.name}`"
                    class="event"
                >
                    <span class="time">{{ event.time }}</span>
                    <div class="contents">
                        <span class="name">{{ event.name }}</span>
                        <span class="desc">{{ event.desc }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import HackathonCalendarTable from "@/scripts/components/HackathonCalendarTable";
export default HackathonCalendarTable;
</script>

<style lang="scss" scoped>
@import "@/styles/components/HackathonCalendarTable";
</style>
