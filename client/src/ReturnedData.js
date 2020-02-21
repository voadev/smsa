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
        const { error, isLoaded, data } = this.state;
        console.log(data);
        if(error) {
            return <div>Error: { error.message }</div>
        } else if(!isLoaded) {
            return <div>Loading...</div>
        } else {
            return (
                <tbody>
                    { data.map(data => (
                        <tr key={data.id}>
                            <td>{data.username}</td><td>{data.tweet}</td>
                        </tr>
                    ))}
                </tbody>
            );
        }
        
    }

}

export default ReturnedData;