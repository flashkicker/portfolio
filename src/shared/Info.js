import Ace from '../icons/ace.png';
import Conduct from '../icons/letter-c.png';
import Monster from '../icons/monster.png';
import Shuttle from '../icons/shuttle.png';

export const personalInfo = {
	name: 'Timothy Wiliusa',
	email: 'wiliusat@oregonstate.edu',
	title: 'Full Stack, UI/UX',
	location: 'Corvallis, OR',
	weatherEmoji: '☀️',
	emojiDescription: 'sun-emoji',
	bio: 'Senior at Oregon State University',
	githubUrl: 'https://github.com/timothywilliusa',
	linkedInUrl: 'https://www.linkedin.com/in/timothy-wiliusa-13317418b/',
	instagramUrl: 'https://www.instagram.com/ti.m.o.th.y/'
};

export const experienceInfo = [
	{
		title: 'Student Associate / Tester',
		meta: 'HazAdapt, INC., Corvallis OR, April 2020 - August 2020',
		description:
			'A startup company based in Corvallis OSU developing an emergency reponse application for Oregon State students. Our team did a bi weeklly GenderMag. I was in the group that focused in the HCI research and inclusivity of the product. I created user personas that represent users with gender fluid preferences, disabilities, and other rare cases that requred special attention.'

			// location
			// a little description of company 
			// description of what i did techni
			// migration of data that was previously in cabinet
	
			//what is does (using node js and gendermag)
	},
	{
		title: 'Part-time / Intern Junior Developer',
		meta: 'Golden Eagle, INC., April 2021 - December 2021',
		description:
			'A Human Resource outsorcing company based in Philadelphia PA. I had 2 main jobs, first was the migration of physical records into digital. Second is IT support where I would help out whoever is having trouble with their computer or spreadsheet. Most of the problems were instalations, software updates, spreadsheet formula problems, or involved other basic office tools. I was working as an intern so I did all the intern-work which involved reinstalling software, and application.'
	},
	{
		title: 'Part-time / Junior Developer',
		meta: 'Pt. Trisakti Mustika Graphika, December 2021 - March 2022',
		description:
			'A security printing company based in Indonesia. I was in a team that was implementing and maintaining a custom company tool that keeps track of orders, purchase requests, and material spending within the company. My work mostly involved designing modals and improving the existing UI. I was also documenting ATR responses whenever the company is using a new chip.'
	}
];

export const projectInfo = [
	{
		title: 'Conduct',
		icon: Conduct,
		iconAlt: 'conduct',
		description:
			'On-going task management application for companies. Assigning tasks, keeping track of work, and sending messages between users.',
		github: 'https://github.com/timothywiliusa/conduct'
	},
	{
		title: 'Monsters Rolodex',
		icon: Monster,
		iconAlt: 'monster',
		description: 'Simple React application where I learn to filter and map state objects.',
		github: 'https://github.com/timothywiliusa/monsters-rolodex'
	},
	{
		title: 'Space Shop',
		icon: Shuttle,
		iconAlt: 'spaceship',
		description:
			'With my CS 340 group, we built an e-comerce online applicaiton for virtual users to buy and sell merchendises. Using SQL tables and mariaDB.',
		github: 'https://github.com/timothywiliusa/cs340-group19-new'
	},
	{
		title: 'Aces Up Game',
		icon: Ace,
		iconAlt: 'cards',
		description: 'Aces Up game from the CS 361 class.',
		github: 'https://github.com/cs361f2019-osu/Fall2019_project-twosums'
	}
];

export const skillsInfo = [
	'MIFARE',
	'Agile',
	'SCRUM',
	'NODE',
	'JavaScript',
	'React',
	'Redux',
	'REST APIs',
	'SQL',
	'Responsive Design',
	'Git',
	'GenderMag',
	'Python'
];

export const educationInfo = [
	{
		title: 'Computer Science Major, with focus on Human-Computer Interactions',
		description: 'Oregon State University, Corvallis, OR'
	}
];
