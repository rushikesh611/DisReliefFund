import React, { Component } from 'react';
import { Form, Button, Input, Message } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import factory from '../../Ethereum/factory';
import web3 from '../../Ethereum/web3';
import { Router } from '../../routes';

export default class CampaignNew extends Component {
    state = {
        minimumContribution: '',
        errorMessage: '',
        loading: false
    };

    onSubmit = async (event) => {
        event.preventDefault();

        this.setState({ loading: true, errorMessage: '' });

        try {
            const accounts = await web3.eth.getAccounts();
            await factory.methods.createCampaign(this.state.minimumContribution,this.state.campaignName,this.state.campaignDescription)
                .send({
                    from: accounts[0]
                });
            Router.pushRoute('/');
        } catch (err) {
            this.setState({ errorMessage: err.message });
        } finally {
            this.setState({ loading: false });
        }
    };

    render() {
        return (
            <Layout>
                <h3>Create a Campaign</h3>

                <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
                    <Form.Field>
                        <label>Campaign Name</label>
                        <Input
                        
                            value={this.state.campaignName}
                            onChange={event => {
                                this.setState({ campaignName: event.target.value })
                            }}
                        />
                        <label>Campaign Description</label>
                        <Input
            
                            value={this.state.campaignDescription}
                            onChange={event => {
                                this.setState({ campaignDescription: event.target.value })
                            }}
                        />
                        <label>Minimum Contribution</label>
                        <Input
                            label="wei"
                            labelPosition="right"
                            value={this.state.minimumContribution}
                            onChange={event => {
                                this.setState({ minimumContribution: event.target.value })
                            }}
                        />
                        {/* <label>Campaign Image</label>
                        <input type="file" onChange={event => {
                                this.setState({ campaignImage: event.target.value })
                            }}/> */}
                    </Form.Field>

                    <Message error header="Oops!" content={this.state.errorMessage} />
                    <Button loading={this.state.loading} type="submit" primary>Create</Button>
                </Form>
            </Layout>
        );
    }
}