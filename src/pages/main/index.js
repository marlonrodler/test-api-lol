import React, { Component } from 'react';
import api from "../../services/api";




export default class Main extends Component {
    state = {
        summer: [],
    };

    componentDidMount() {
        this.loadSummers();
    }
    nome = "Wilma FIintstone";
    loadSummers = async () => {
        const response = await api.get(`/by-name/${this.nome}?api_key=RGAPI-3b95fd6c-41f1-4dc0-80a9-7763e644a447`);
    
        console.log(response);
        this.setState({ summer: response.data });
    };

    render() {
        return (
            <div className="summer-list">
                <strong>{this.state.summer.name}</strong>
                <p>Level: {this.state.summer.summonerLevel}</p>
            </div>
        );
    }
}