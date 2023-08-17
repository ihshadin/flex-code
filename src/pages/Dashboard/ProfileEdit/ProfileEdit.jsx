import React from 'react';
import ProfileRow from './ProfileRow';

const ProfileEdit = () => {

    return (
        <div>
            <div className="profile-app__KJyN">
                <div className="header__NyBc">
                    {/* ... Header content ... */}
                    <div className="header__NyBc bg-[#0E141E] px-8 py-16">
                        <div className="bg-wrapper__teZt">
                            <div className="background__26YF"></div>
                        </div>
                        <div className="container__28Ei container flex items-center ml-5">
                            <div className="avatar-base__19M6">
                                <a href="#">
                                    <img
                                        className="avatar__2sMj rounded-full w-32"
                                        src="https://assets.leetcode.com/users/avatars/avatar_1644345767.png"
                                        alt="Sayeed_Abu's avatar"
                                    />
                                </a>
                            </div>
                            <div className="user-info__2aLr ml-4">
                                <div className="name__3EWH flex items-center">
                                    <div className="left-side__1lmO"></div>
                                    <div className="container__1Mii">
                                        <span className="text-white name-text__1-NA font-bold text-lg">Md Sayeed</span>
                                    </div>
                                    <div className="right-side__3zuc ml-2">
                                        <a className="public__2p3C" href="/Sayeed_Abu/">
                                            <i className="fa fa-external-link"></i>
                                        </a>
                                    </div>
                                </div>
                                <div className="leetcodeId__13b9 text-slate-300">FlexCode ID: Sayeed_Abu</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-lg -mt-16 mb-10 flex justify-center'>
                <table className="table w-[80%] md:w-[60%] bg-secondary-color">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className='font-semibold pl-8 text-lg text-white'>
                                Basic Info
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <ProfileRow title="Name" description="Abu Sayeed"></ProfileRow>
                        <ProfileRow title="Gender" description="Male"></ProfileRow>
                        <ProfileRow title="Location" description="Chittagong, Bangladesh"></ProfileRow>
                        <ProfileRow title="Website" description="https://sayeedh.com"></ProfileRow>
                        <ProfileRow title="Education" description="HSC"></ProfileRow>
                        <ProfileRow title="Github" description="https://github.com"></ProfileRow>
                        <ProfileRow title="LinkedIn" description="https://linkedin.com"></ProfileRow>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProfileEdit;