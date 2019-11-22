import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import Loading from '../../atoms/Loading';
import Player from '../../organisms/Player';
import getConfig from '../../../helpers/getConfig';

const View = ({match}) => {
    const id = match.params.id;

    const [ config, setConfig ] = useState();

    useEffect(() => {
        getConfig(id, (resp) => {
            //console.log('got it!!', typeof d, d);
            setConfig(resp.data.config); //only parse twice for S3 - shouldn't be an issue w/ Lambda callback
        });
    }, []);

    if (!id) return <Redirect to="/"/>;
    return config ? <Player config={config}/> : <Loading/>;
}

export default View;