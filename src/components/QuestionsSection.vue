<template lang="pug">
SectionWrapper#questions
	.flex-1.flex.flex-col.items-center
		.text-6xl.font-bold.text-center.mb-5 Questions
		.flex.flex-col.items-stretch.self-stretch
			QuestionContainer(
				v-for='{ question, answer } in questions',
				:question='question',
				:answer='answer'
			)
</template>

<script lang="ts">
import QuestionContainer from './QuestionContainer.vue';
import SectionWrapper from './SectionWrapper.vue';

const questions = [
	{
		question: 'What is a hackathon?',
		answer:
			'A hackathon is an event where people get together to create a project from scratch in a given amount of time.',
	},
	{
		question: 'Who is allowed to participate?',
		answer:
			'All high school and university students from anywhere in the world are welcome to participate in ULHacks!',
	},
	{
		question: 'How do I register for ULHacks?',
		answer:
			"To register for ULHacks, you'll need to create a Devpost account and register on our Devpost page, as well as fill out the Registration Form (see the Devpost page for more information).",
	},
	{
		question: 'How much coding experience do I need?',
		answer:
			"ULHacks welcomes participants of all skill levels, even those who have no prior coding experience! We'll be providing you with the resources you need to get started with your project at ULHacks with workshops and mentors; you just need to bring your willingness to learn!",
	},
	{
		question: 'What equipment do I need for ULHacks?',
		answer:
			"To create a project, all you'll need is a computer or a laptop with all the programming tools necessary to create your project. To submit your project, you'll also need to create a Devpost account and a way to record a demo video for your project.",
	},
	{
		question: 'Can I participate with a team?',
		answer:
			"Absolutely! While you are allowed to create a project on your own, we encourage you to create a team with friends and/or new connections at ULHacks, and we'll also be hosting team-formation activities for those who are looking to hack with a team! The maximum team size is 4 people.",
	},
	{
		question: 'Can I submit my project to multiple hackathons?',
		answer:
			"Unfortunately, we aren't accepting projects which are submitted to multiple hackathons.",
	},
];

export default {
	name: 'QuestionsSection',
	components: { QuestionContainer, SectionWrapper },
	setup() {
		return {
			questions,
		};
	},
};
</script>

<style scoped></style>
