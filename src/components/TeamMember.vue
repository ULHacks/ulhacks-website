<template lang="pug">
.m-6.w-80
	.aspect-w-1.aspect-h-1
		img.border-2.w-full.object-cover.rounded-lg(:src='photoUrl')
	.text-xl.text-center.mt-4.font-bold {{ name }}
	.text-sm.text-center.text-gray-500.mb-4 {{ role }}
	.text-gray-500 {{ description }}
</template>

<script>
export default {
	name: 'TeamMember',
	props: {
		name: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		role: {
			type: String,
			required: true,
		},
		photoUrl: {
			type: String,
			required: true,
		},
	},
};
</script>

<style scoped></style>
