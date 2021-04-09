import React from 'react';
import { Menu,Icon,Header,Container,Button, Segment, Image } from 'semantic-ui-react';
import { Link } from '../routes';
export default() =>{
	return (
		<Menu text style={{ marginTop: '20px'}}>
		
			<Link route="/">
				<a className="item" >
					{/* <Icon name='home' size='big' />  */}
					<Image src='../static/logo3.jpg' size='tiny'/>
					
					DisReliefFund
				</a>
			</Link>
			<Menu.Menu position="right">
				{/* <Link route="/">
				<a className="item"> 
					<p>Campaigns</p>
				</a>
				</Link> */}
				<Link route="/about">
				<a className="item"> 
					<p style={{color:'teal'}}>About Us</p>
				</a>
				</Link>
			{/* <Link route="/campaigns/new">
				<a className="item"> 
					<p style={{color:'teal'}}>+</p>
				</a>
			</Link> */}
			</Menu.Menu>
		</Menu>
	);
};
