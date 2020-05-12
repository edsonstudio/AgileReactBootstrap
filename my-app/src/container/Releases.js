import React, { Component } from 'react';

export default class Releases extends Component {

    constructor() {
        super();
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

    render() {
        return (
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
        );
    }

}