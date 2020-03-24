import React from 'react';


class ReturnedData extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            error: null,
            isLoaded: false,
            data: []
        }
    }

    componentDidMount() {
        const api = 'http://localhost:8000';
        
        fetch(api).then(response => {
            console.log(response);
            return response.json()
        })
        .then(result => {
            console.log("result: " + JSON.stringify(result));
            this.setState({isLoaded: true, data: result});
        }).catch(error => {
            this.setState({
                isLoaded: true,
                error
            })
        });
    }

    render() {
        const { error, sentimentValue, isLoaded, data } = this.state;
        //console.log(data);
        console.log('sentiment value = ' + sentimentValue);
        console.log('props = ' + this.props.sentimentValue);
        if(error) {
            return <tbody><tr><td>Error: { error.message }</td></tr></tbody>
        } else if(!isLoaded) {
            return <tbody><tr><td>Loading...</td></tr></tbody>
        } else {
            if(this.props.sentimentValue === 'all') {
                return (
                    <tbody>
                    { data.map(data => (
                        <tr key={data.id}>
                            <td>{data.username}</td><td>{data.tweet}</td>
                        </tr>
                    ))}
                    </tbody>
                );
            } else {
                return (
                    <tbody>
                    { data.map(data => (
                        data.sentiment === this.props.sentimentValue ?
                            <tr key={data.id}>
                                <td>{data.username}</td><td>{data.tweet}</td>
                            </tr> : ''
                    ))}
                    </tbody>
                );
            }
        }
    }
}

export default ReturnedData;