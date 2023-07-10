import hotjarImage from '../../assets/work/hotjar.png';
import finnImage from '../../assets/work/finn.png';
import epamImage from '../../assets/work/epam.jpg';
import cyberghostImage from '../../assets/work/cyberghost.png';

import CV from '../../assets/cv/Bogdan_Copocean_Senior_Software_Engineer.pdf';

export const worksData = [
	{
		title: 'Hotjar',
		description: 'Senior Software Engineer',
		tags: [ 'Hotjar' ],
		imgUrl: hotjarImage,
		projectLink: 'https://www.hotjar.com/'
	},

	{
		title: 'FINN',
		description: 'Senior Software Engineer',
		tags: [ 'FINN' ],
		imgUrl: finnImage,
		projectLink: 'https://www.finn.com/de-DE'
	},
	{
		title: 'Epam Systems',
		description: 'Software Engineer',
		tags: [ 'EPAM' ],
		imgUrl: epamImage,
		projectLink: 'https://www.epam.com/'
	},
	{
		title: 'CyberGhost',
		description: 'Software Engineer',
		tags: [ 'CyberGhost' ],
		imgUrl: cyberghostImage,
		projectLink: 'https://www.cyberghostvpn.com/en_US/'
	}
];

export const cvUrl = CV;
