import React, { Component } from 'react';
import ReleaseForm from '../ui/ReleaseForm';

export default class Releases extends Component {

    constructor() {
        super();
        this.handlerSubmit = this.handlerSubmit.bind(this);
        this.state = {
            releases: [
                {
                    id: 1,
                    releaseName: 'Release 01',
                    releaseDate: '01/01/2020'
                },
                {
                    id: 2,
                    releaseName: 'Release 02',
                    releaseDate: '01/01/2021'
                },
                {
                    id: 3,
                    releaseName: 'Release 03',
                    releaseDate: '01/01/2022'
                },
                {
                    id: 4,
                    releaseName: 'Release 04',
                    releaseDate: '01/01/2023'
                }
            ]
        }
    }

    handlerSubmit(e, {name, date}){
        e.preventDefault();        {/*para previnir o evento padrao do input que é o refresh ao submeter */}
        var state = this.state;
        var myRelease = {
            id: state.releases.length +1,
            releaseName: name,
            releaseDate: date
        }
        this.setState({releases: state.releases.concat(myRelease)});
    }

    render() {
        return (
            <div className="container" style={{paddingTop: '25px'}}>
                <ReleaseForm submitHandler={this.handlerSubmit} />
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Release Name</th>
                            <th scope="col">Release Date</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.releases.map((release, index) => {
                            return (
                                <tr key={release.id}>
                                    <th scope="row">{release.id}</th>
                                    <td>{release.releaseName}</td>
                                    <td>{release.releaseDate}</td>
                                    <td><button type="button" className="btn btn-danger btn-sm">Remover</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        );
    }

}