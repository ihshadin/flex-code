import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';

// Css file connect
import './IconBox.css'

const IconBox = () => {
    return (
        <div class="feature-icon-base no-badge">
            <div class="icon teal develop-icon">
                <div class="w-[53px] h-[53px] absolute top-0 bottom-0 left-0 right-0 text-center z-10 rounded-[50%] m-auto bg-white">
                    <FaGraduationCap className='w-7 h-7 inline-block mt-3' />
                </div>
            </div>
        </div>
    );
};

export default IconBox;