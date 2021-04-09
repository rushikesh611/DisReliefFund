import React from 'react';
import { Container,Icon,Grid,Rail,Segment,Menu } from 'semantic-ui-react';
import { Link } from '../routes';
export default() =>{
	return (
		<Container fluid style={{marginTop:50,paddingTop:100}}>
			<Menu text>
				<Menu.Item header>Team TetraByte <Icon name='copyright' /> 2021</Menu.Item>
				<Menu.Menu position='right'>
					<Link route="https://github.com/">
						<a className="item" >
							<Icon name='github' size='big'/> 
						</a>
					</Link>
				</Menu.Menu>
			</Menu>
		</Container>
	);
};
