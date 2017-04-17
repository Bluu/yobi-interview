import React from 'react';
import loadingSvg from '../assets/loading.svg';

const Loading = () => (
    <div className="box">
        <img clasName="box-content" src={loadingSvg} alt="loading" />
    </div>
);

export default Loading;
