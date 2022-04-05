import React from 'react';
import ChartLine from '../ChartLine/ChartLine';

const Profile = ({ crypto }) => {

    return (
        <div className='flex justify-center'>
            <ChartLine crypto={crypto}></ChartLine>
        </div>
    );
};

export default Profile;