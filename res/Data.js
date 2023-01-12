 const homes = [
	{
		id: 1,
		image: require('./Images/flickerRent.png'),
		name: 'Music player',
		about: 'Working in the mungo, I help my clients find apartments, studios in and around Mungo',
        type: 'non_animated',
		key: 'musicplayer',
		rating: 5,
		color: 'lightblue',
	},
	{
		id: 2,
		image: require('./Images/socialApp.png'),
		name: 'Social App',
		about: 'I am specialized agent with over 5 years experience working with clients all over Douala. I will be glad to be of service',
		type: 'animated',
		rating: 1,
		color: '#44bd32',
	},
	{
		id: 3,
		image: require('./Images/back.jpeg'),
		name: 'Designed home',
	    about: 'Jakata Real estate consultancy is a registered real estate firm providing property listing service to clients across Africa.',
		type: 'animated',
		rating: 4,
		color: 'brown',
	},
	{
		id: 4,
		image: require('./Images/back.jpeg'),
		name: 'Classic home',
		about: 'I am specialized agent with over 5 years experience working with clients all over Douala. I will be glad to be of service',
		type: 'animated',
		rating: 3,
		color: 'purple',
	},
	{
		id: 5,
		image: require('./Images/back.jpeg'),
		name: 'Classic home',
		about: 'I am specialized agent with over 5 years experience working with clients all over Douala. I will be glad to be of service',
		type: 'animated',
		rating: 3,
		color: 'purple',
	},
	{
		id: 6,
		image: require('./Images/back.jpeg'),
		name: 'Classic home',
		about: 'I am specialized agent with over 5 years experience working with clients all over Douala. I will be glad to be of service',
		type: 'animated',
		rating: 3,
		color: 'purple',
	},
	{
		id: 7,
		image: require('./Images/back.jpeg'),
		name: 'Classic home',
		about: 'I am specialized agent with over 5 years experience working with clients all over Douala. I will be glad to be of service',
		type: 'animated',
		rating: 3,
		color: 'purple',
	},
];  

const profiles = [
	{
		id: 1,
		image: require('./Images/plain.jpeg'),
		name: 'Plain profile',
		about: 'Working in the mungo, I help my clients find apartments, studios in and around Mungo',
		type: 'non_animated',
	},
	{
		id: 2,
		image: require('./Images/purple.png'),
		name: 'Purple profile',
		about: 'I am specialized agent with over 5 years experience working with clients all over Douala. I will be glad to be of service',
		type: 'animated',
		color: 'purple'
	},
	{
		id: 3,
		image: require('./Images/back.jpeg'),
		name: 'Designed profile',
	    about: 'Jakata Real estate consultancy is a registered real estate firm providing property listing service to clients across Africa.',
		type: 'animated'
	},
	{
		id: 4,
		image: require('./Images/back.jpeg'),
		name: 'Music profile',
		about: 'Working in the mungo, I help my clients find apartments, studios in and around Mungo',
		type: 'non_animated'
	},
	{
		id: 5,
		image: require('./Images/back.jpeg'),
		name: 'Classic profile',
		about: 'I am specialized agent with over 5 years experience working with clients all over Douala. I will be glad to be of service',
		type: 'animated'
	},
	{
		id: 6,
		image: require('./Images/back.jpeg'),
		name: 'Designed profile',
	    about: 'Jakata Real estate consultancy is a registered real estate firm providing property listing service to clients across Africa.',
		type: 'animated'
	},
]; 

const logins = [
	{
		id: 1,
		image: require('./Images/mini.png'),
		name: 'Mini Login',
		about: 'Working in the mungo, I help my clients find apartments, studios in and around Mungo',
		type: 'non_animated',
		color: 'brown'
	},
	{
		id: 2,
		image: require('./Images/rounded.png'),
		name: 'Round Login',
		about: 'I am specialized agent with over 5 years experience working with clients all over Douala. I will be glad to be of service',
		type: 'animated',
		color: 'purple'
	},
	{
		id: 3,
		image: require('./Images/smartLogin.jpg'),
		name: 'Smart Login',
	    about: 'Jakata Real estate consultancy is a registered real estate firm providing property listing service to clients across Africa.',
		type: 'animated',
		color: '#1934e6'
	},
	{
		id: 4,
		image: require('./Images/BlackLogin.png'),
		name: 'Black Login',
		about: 'I am specialized agent with over 5 years experience working with clients all over Douala. I will be glad to be of service',
		type: 'animated',
		color: '#14a9ba'
	},
	{
		id: 5,
		image: require('./Images/tabLogin.png'),
		name: 'Tab Login',
	    about: 'Jakata Real estate consultancy is a registered real estate firm providing property listing service to clients across Africa.',
		type: 'animated',
		color: '#8378ed'
	},
	{
		id: 6,
		image: require('./Images/DesignedLogin.jpg'),
		name: 'Designed Login',
		about: 'I am specialized agent with over 5 years experience working with clients all over Douala. I will be glad to be of service',
		type: 'animated',
		color: '#605C3C'
	},
	{
		id: 7,
		image: require('./Images/back.jpeg'),
		name: 'Designed home',
	    about: 'Jakata Real estate consultancy is a registered real estate firm providing property listing service to clients across Africa.',
		type: 'animated',
		color: 'red'
	},
	{
		id: 8,
		image: require('./Images/back.jpeg'),
		name: 'Classic home',
		about: 'I am specialized agent with over 5 years experience working with clients all over Douala. I will be glad to be of service',
		type: 'animated',
		color: 'brown'
	},
	{
		id: 9,
		image: require('./Images/back.jpeg'),
		name: 'Designed home',
	    about: 'Jakata Real estate consultancy is a registered real estate firm providing property listing service to clients across Africa.',
		type: 'animated',
		color: 'red'
	},
]; 

const settings = [
	{
		id: 1,
		image: require('./Images/cardsSetting.png'),
		name: 'Cards Setting',
		color: 'white'
	},
	{
		id: 2,
		image: require('./Images/WhiteSetting.jpeg'),
		name: 'White Setting',
		color: 'grey'
	},
	{
		id: 3,
		image: require('./Images/back.jpeg'),
		name: 'Designed home',
		color: '#36c93f'
	},
	{
		id: 4,
		image: require('./Images/back.jpeg'),
		name: 'Music player',
		color: '#36c93f'
	},
	{
		id: 5,
		image: require('./Images/back.jpeg'),
		name: 'Classic home',
		color: '#36c93f'
	},
	{
		id: 6,
		image: require('./Images/back.jpeg'),
		name: 'Designed home',
		color: '#36c93f'
	},
	{
		id: 7,
		image: require('./Images/back.jpeg'),
		name: 'Music player',
		color: '#36c93f'
	},
	{
		id: 8,
		image: require('./Images/back.jpeg'),
		name: 'Classic home',
		color: '#36c93f'
	},
	{
		id: 9,
		image: require('./Images/back.jpeg'),
		name: 'Designed home',
		color: '#36c93f'
	},
]; 




export {
    homes,
    profiles,
    logins,
    settings,
}