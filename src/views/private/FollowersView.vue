<template>
    <NavbarComponent :profile="profileData" />
    <ExplanationComponent :title="explanationTitle" />
    <LoaderComponent v-if="loading" />

    <ContentComponent v-else>
        <FollowerComponent :followerUser="imFollowingUsers" :followingUser="myFollowingUsers" />
    </ContentComponent>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import NavbarComponent from '../../components/private/NavbarComponent.vue'
import Profile from '../../composables/user';
import ExplanationComponent from '../../components/private/ExplanationComponent.vue'
import ContentComponent from "../../components/private/ContentComponent.vue"
import FollowerComponent from "../../components/private/FollowerComponent.vue"
import Follower from '../../composables/follower';
import LoaderComponent from '../../components/LoaderComponent.vue';
export default defineComponent({
    name: 'FollowerView',
    components: { NavbarComponent, ExplanationComponent, ContentComponent, FollowerComponent, LoaderComponent },
    setup() {
        const { profileData, me } = Profile()
        const { myFollowing, imFollowing, myFollowingUsers, imFollowingUsers, loading } = Follower()
        const explanationTitle = ref('Seguidores')
        onMounted(me)
        onMounted(imFollowing)
        onMounted(myFollowing)
        return {
            profileData,
            loading,
            explanationTitle,
            myFollowingUsers,
            imFollowingUsers
        }
    }
})
</script>