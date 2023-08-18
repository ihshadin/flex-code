import React from 'react';
import imageSrc from '../../assets/images/pngwing.com.png'
import { Link } from 'react-router-dom';

const ComingSoon = () => {
    return (
        <div className='flexcode-container '>
            <div className="flex items-center flex-col">
                <img src={imageSrc} className="w-[500px]" />
                <Link to='/' className="mt-4 flexcode-button py-3 px-16">
                    Home
                </Link>
            </div>
        </div>
    );
};

export default ComingSoon;