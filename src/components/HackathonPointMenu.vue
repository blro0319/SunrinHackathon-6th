<template>
    <div class="hackathon-point-menu">
        <div
            v-for="(key, index) in menuKeys"
            :key="`${index}_${key}`"
            class="item"
        >
            <span class="name">{{ getMenuItem(key).name }}</span>
            <span class="price">{{ numberFormat(getMenuItem(key).price) }}HP</span>
        </div>
    </div>
</template>

<script lang="ts">
import HackathonPointMenu from "@/scripts/components/HackathonPointMenu";
export default HackathonPointMenu;
</script>

<style lang="scss" scoped>
@import "@/styles/components/HackathonPointMenu";
</style>
