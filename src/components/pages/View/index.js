import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import Loading from '../../atoms/Loading';
import Player from '../../organisms/Player';
import getConfig from '../../../helpers/getConfig';

const View = ({match}) => {
    const id = match.params.id;

    const [ config, setConfig ] = useState();

    useEffect(() => {
        getConfig(id)
            .then((d) => {
                setConfig(JSON.parse(JSON.parse(d))); //only parse twice for S3 - shouldn't be an issue w/ Lambda callback
            })
            .catch((err) => {
                console.log('error returned from lambda or APIG or browser fetch API', err);
            });
    }, []);

    if (!id) return <Redirect to="/"/>;
    return config ? <Player config={config}/> : <Loading/>;
}

export default View;