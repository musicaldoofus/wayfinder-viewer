import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import Loading from '../../atoms/Loading';
import ConfigNotFound from '../../atoms/ConfigNotFound';
import Player from '../../organisms/Player';
const axios = require('axios');

const View = ({match}) => {
    const hashKey = match.params.id;

    const [ dataResp, setDataResp ] = useState();

    useEffect(() => {
        const reqUrl = `https://6bku93esbb.execute-api.us-west-2.amazonaws.com/prod/getWayfinderConfig?hashKey=${hashKey}`;
        axios.get(reqUrl)
            .then(({data}) => setDataResp(data))
            .catch(err => console.error('err', err));
    }, [hashKey]);

    if (!hashKey) return <Redirect to="/"/>;
    if (dataResp) return dataResp.config ? <Player config={dataResp.config}/> : <ConfigNotFound/>;
    else return <Loading/>;
}

export default View;