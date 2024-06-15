import React from 'react';
import qzone1 from "../../../assets/qZone1.png"
import qzone2 from "../../../assets/qZone2.png"
import qzone3 from "../../../assets/qZone3.png"

const QZone = () => {
    return (
        <div className='my-5 rounded border py-3 bg-custom-gray'>
            <h4 className='ps-3 text-secondary'>Q-Zone</h4>
            <div className='text-center'>
            <img src={qzone1} alt="" />
            <img src={qzone2} alt="" />
            <img src={qzone3} alt="" />
            </div>
        </div>
    );
};

export default QZone;