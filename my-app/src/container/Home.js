import React, { Component } from 'react';
import HomerCard from '../ui/HomeCard';



{/*Componente de container - serve para utilizar estado dentro do componente*/ }
export default class Home extends Component {

    homeCardReleases = {
        title: 'Releases',
        text: 'Manage Releases',
        action: () => alert('Releases Clicked')
    }

    homeCardBacklog = {
        title: 'Backlog',
        text: 'Manage Backlog',
        action: () => alert('Backlog Clicked')
    }

    homeCardSprints = {
        title: 'Sprints',
        text: 'Manage Sprints',
        action: () => alert('Sprints Clicked')
    }

    render() {
        return (
            <div className="container text-center">
                <div className="row">
                    <HomerCard title={this.homeCardReleases.title}
                        text={this.homeCardReleases.text}
                        action={this.homeCardReleases.action} />
                        {/* Com Desconstrutor do objeto JSON - Funcionalidade do ES6 */}
                    <HomerCard {...this.homeCardBacklog} />
                    <HomerCard {...this.homeCardSprints} />
                </div>
            </div>
        );
    }
}