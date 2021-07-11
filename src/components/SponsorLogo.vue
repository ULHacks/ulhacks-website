<template lang="pug">
.m-6.w-80.h-40.transform.transition-transform(class='hover:scale-105')
	a(:href='websiteUrl')
		img.h-full.w-full(:src='logoPath', :alt='name' class='object-contain')
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
