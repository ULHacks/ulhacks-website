<template lang="pug">
.m-6
	img.h-52.w-52.object-cover.rounded-lg(:src='photoUrl')
	.text-xl.text-center.my-4 {{ name }}
</template>

<script>
export default {
	name: 'TeamMember.vue',
	props: {
		name: String,
		photoUrl: String,
	},
};
</script>

<style scoped></style>
