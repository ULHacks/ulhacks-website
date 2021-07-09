<template lang="pug">
SectionWrapper#team(data-aos='fade-up')
	.flex-1.flex.flex-col.items-center.w-full
		.text-6xl.font-bold.text-center.mb-5 Our Team
	.flex.flex-row.flex-wrap.justify-evenly.m-12
		TeamMember(
			v-for='{ name, description, photoUrl } in teamMembers',
			:name='name',
			:description='description',
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
		description:
			"I'm Leon, an aspiring ultralearner whose love for learning propelled me into the world of programming. I love leveraging incredible technologies to create projects that empower others.",
	},
	{
		name: 'Avaneesh Kulkarni',
		photoUrl: '/images/avaneesh_kulkarni.jpg',
		description:
			'I enjoy solving contest math problems and programming useful applications. I also like to play basketball and run 5k.',
	},
	{
		name: 'George Zhang',
		photoUrl: '/images/george_zhang.jpg',
		description:
			'Hey all. I enjoy programming and creating random projects. I also like doing competitive programming and code golfing. In my free time I play games and make music.',
	},
	{
		name: 'David Dragon He',
		photoUrl: '/images/david_dragon_he.jpg',
		description:
			'Hi, I like to learn, and I like to program. I like to create projects that benefit society.',
	},
	{
		name: 'Kevin Wang',
		photoUrl: '/images/kevin_wang.jpg',
		description:
			"Hi, I'm Kevin, and I'm passionate about coding and mathematics. I mainly program in Python and also experiment with graphic design on the side.",
	},
	{
		name: 'Kevin Xu',
		photoUrl: '/images/kevin_xu.jpg',
		description:
			"Hi, I'm Kevin, and I like coding, business and mathematics. I love to learn new languages with new projects and think up new ideas.",
	},
	{
		name: 'Shari Sun',
		photoUrl: '/images/shari_sun.jpg',
		description:
			'I learned things such as coding, art (I have a secret art account that I challenge everyone to find), and have been attempting to learn piano for a while.',
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
