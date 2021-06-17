<template lang="pug">
SectionWrapper#team
	.flex-1.flex.flex-col.items-center.w-full
		.text-6xl.font-bold.text-center.mb-5 Our Team
	.flex.flex-row.flex-wrap.justify-evenly.m-12
		team-member(
			v-for='{ name, photoUrl } in teamMembers',
			:name='name',
			:photoUrl='photoUrl'
		)
</template>

<script lang="ts">
import SectionWrapper from '~/components/SectionWrapper.vue';
import TeamMember from '~/components/TeamMember.vue';

const teamMembers = [
	{
		name: 'Leon Si',
		photoUrl: '/images/leon_si.jpg',
	},
	{
		name: 'Avaneesh Kulkarni',
		photoUrl: '/images/avaneesh_kulkarni.jpg',
	},
	{
		name: 'George Zhang',
		photoUrl: '/images/george_zhang.jpg',
	},
	{
		name: 'David Dragon He',
		photoUrl: '/images/david_dragon_he.jpg',
	},
	{
		name: 'Kevin Wang',
		photoUrl: '/images/kevin_wang.jpg',
	},
	{
		name: 'Kevin Xu',
		photoUrl: '/images/kevin_xu.jpg',
	},
	{
		name: 'Shari Sun',
		photoUrl: '/images/shari_sun.jpg',
	},
];

export default {
	name: 'OurTeamSection',
	components: { TeamMember, SectionWrapper },
	setup() {
		return { teamMembers };
	},
};
</script>

<style scoped></style>
