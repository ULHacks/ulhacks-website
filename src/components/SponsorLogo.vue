<template lang="pug">
.max-w-2
	a(:href='websiteUrl')
	img(:src='logoPath', :alt='name')
	.sponsor
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
	props: {
		name: {
			type: String,
			required: true,
		},
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
