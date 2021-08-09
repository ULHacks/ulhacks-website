<template lang="pug">
.flex.flex-col.justify-center.items-center.h-screen.w-screen
	.font-bold.text-2xl.mb-2 {{ redirectText }}
	.loader
		.ball-pulse
			div
			div
			div
</template>

<script lang="ts">
import 'loaders.css/loaders.min.css';

import { defineComponent } from 'vue';

export default defineComponent({
	props: {
		redirectText: {
			type: String,
			required: true,
		},
	},
});
</script>

<style scoped lang="postcss">
.ball-pulse > div {
	@apply bg-ul-blue;
}
</style>
