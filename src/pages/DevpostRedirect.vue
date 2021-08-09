<template lang="pug">
RedirectScreen(redirectText='Redirecting you to our Devpost page...')
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import RedirectScreen from '~/components/RedirectScreen.vue';

export default defineComponent({
	components: { RedirectScreen },
});
</script>
