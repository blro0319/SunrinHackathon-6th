<template>
    <div class="home">
        <div class="banner">
            <h1>
                Sunrin<br>
                Hackathon 6th
            </h1>
            <hackathon-timer eventname="apply-start" class="timer" />
        </div>

        <div class="calander">
            <table>
                <tr>
                    <th colspan="2">8월 7일</th>
                </tr>
                <tr>
                    <th>시간</th>
                    <th>일정</th>
                </tr>
                <tr>
                    <td>13:00</td>
                    <td>시작</td>
                </tr>
            </table>
            <table>
                <tr>
                    <th colspan="2">8월 8일</th>
                </tr>
                <tr>
                    <th>시간</th>
                    <th>일정</th>
                </tr>
                <tr>
                    <td>13:00</td>
                    <td>시작</td>
                </tr>
            </table>
        </div>

        <div class="menu">
            <span class="title">선린 메뉴판</span>
            <div class="contents">
                <div class="left">
                    <div class="item">
                        <span class="name">코카콜라</span>
                        <span class="price">1,000P</span>
                    </div>
                    <div class="item">
                        <span class="name">몬스터</span>
                        <span class="price">2,000P</span>
                    </div>
                </div>
                <div class="right">
                    <div class="item">
                        <span class="name">펩시</span>
                        <span class="price">10,000P</span>
                    </div>
                    <div class="item">
                        <span class="name">100P</span>
                        <span class="price">1,000P</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import AppHome from "@/scripts/AppHome";
export default AppHome;
</script>

<style lang="scss" scoped>
@import "@/styles/AppHome";
</style>
