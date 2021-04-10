import React, { Component } from 'react';
import Layout from '../../components/Layout';
import Campaign from '../../Ethereum/campaign';
import { Card, Grid, Button, Image, Progress } from 'semantic-ui-react'
import web3 from '../../Ethereum/web3';
import ContributeForm from '../../components/ContributeForm';
import { Link } from '../../routes';
import Breadcrumb from '../../components/Breadcrumb';

export default class CampaignShow extends Component {

    static async getInitialProps(props) {
        const campaign = Campaign(props.query.address);

        const summary = await campaign.methods.getSummary().call();
        return {
            address: props.query.address,
            minimumContribution: summary[0],
            campaignBalance: summary[1],
            noOfReq: summary[2],
            noOfContributor: summary[3],
            manager: summary[4],
            campName: summary[5],
            campDesc: summary[6],
        };
    }

    renderCard() {
        const {
            minimumContribution,
            campaignBalance,
            noOfReq,
            noOfContributor,
            manager,
            campName,
            campDesc,
            
        } = this.props;
        
        const items = [
            {
                header: campName,
                description: campDesc,
                meta: 'Campaign Name',
                // extra:<Image src={`campImg`} wrapped ui={true} />,
            },
            {
                header: manager,
                description: 'Manager who created this Campaign and can create requests to withdraw money.',
                meta: 'Address of Manager',
                style: { overflowWrap: 'break-word' }
            },
            {
                header: minimumContribution,
                description: 'You must contribute atleast this much wei to become a approver.',
                meta: 'Minimum Contribution (wei)',
            },
            {
                header: noOfReq,
                description: 'A request for withdrawing money from the available funds. This request must be approved by approvers.',
                meta: 'Number of Requests',
            },
            {
                header: noOfContributor,
                description: 'No of people who have already donated to the campaign.',
                meta: 'No of Approvers',
            },
            {
                header: web3.utils.fromWei(campaignBalance, 'ether'),
                description: 'The amount of money campaign has left to spend.',
                meta: 'Campaign Balance (Ether)',
            }
        ];

        return <Card.Group items={items} itemsPerRow='2'/>;
    }

    render() {
        return (
            <Layout>
                <Breadcrumb/>
                <h1 style={{textAlign:'right'}}>Campaign Details</h1>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={6}>
                            <ContributeForm address={this.props.address} />
                            <img src='../static/img1.png' style={{width:400, height:330}}/>

                        </Grid.Column>

                        <Grid.Column width={10}>
                            
                            {this.renderCard()}
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>

                        <Grid.Column>
                            <Link route={`/campaigns/${this.props.address}/requests`}>
                                <a>
                                    <Button primary floated='right'>View Requests</Button>
                                </a>
                            </Link>
                        </Grid.Column>

                    </Grid.Row>
                </Grid>
            </Layout>
        );
    }
}