<template lang="pug">
.max-w-2
	a(:href='websiteUrl')
	img(:src='logoPath')
	.sponsor
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
	props: {
		logoPath: {
			type: String,
			required: true,
		},
		websiteUrl: {
			type: String,
			required: true,
		},
	},
});
</script>
