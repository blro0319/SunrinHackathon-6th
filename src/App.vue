<template>
    <div id="app">
        <router-view />
        <footer>
            <div class="contents">
                <div class="author">
                    <span class="team">선린인터넷고등학교 제6회 선린해커톤</span>
                    <span class="copyright">© 2020. Blro all rights reserved.</span>
                    <a
                        href="https://github.com/GyeongTae0319/SunrinHackathon-6th"
                        target="_blank"
                        rel="noopener"
                        class="github"
                    >
                        <img src="@/assets/images/github_icon.svg" alt="깃허브 로고">
                    </a>
                </div>
            </div>
        </footer>
    </div>
</template>

<script lang="ts">
import App from "@/scripts/App";
export default App;
</script>

<style lang="scss">
@import "@/styles/App";
</style>
