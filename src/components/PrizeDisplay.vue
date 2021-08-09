<template lang="pug">
.flex.flex-col
	.font-bold.mb-2 ⭐ {{ name }}
	div(v-html='prizeDescription(description)')
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	props: {
		name: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
	},
	setup() {
		function prizeDescription(desc: string) {
			return desc.replace(/\n/g, '<div class="mt-2">');
		}

		return {
			prizeDescription,
		};
	},
});
</script>
