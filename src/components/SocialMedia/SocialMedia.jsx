import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { SiGitlab } from 'react-icons/si';
import { FaGithub } from 'react-icons/fa';

function SocialMedia() {
	return (
		<div className="app__social">
			<div>
				<a href="https://www.linkedin.com/in/bogdan-copocean/" target="_blank" rel="noopener noreferrer">
					<FaLinkedin />
				</a>
			</div>
			<div>
				<a href="https://gitlab.com/bogdan.copocean" target="_blank" rel="noopener noreferrer">
					<SiGitlab />
				</a>
			</div>
			<div>
				<a href="https://github.com/bogdan-copocean" target="_blank" rel="noopener noreferrer">
					<FaGithub />
				</a>
			</div>
		</div>
	);
}

export default SocialMedia;
