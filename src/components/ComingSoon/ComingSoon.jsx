import React from 'react';
import imageSrc from '../../assets/images/pngwing.com.png'
import { Link } from 'react-router-dom';

const ComingSoon = () => {
    return (
        <div className='flex items-center'>
            <div className="flexcode-container">
                <img src={imageSrc} className="" />
                <Link to='/' className="mt-4 bg-primary-color py-3 px-7 text-center block mx-auto w-28">
                    Home
                </Link>
            </div>
        </div>
    );
};

export default ComingSoon;