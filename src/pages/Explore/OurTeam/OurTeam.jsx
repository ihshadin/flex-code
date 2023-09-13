import React from 'react';
import './OurTeam.css'
import TeamCard from './TeamCard';
import PageBannerTitle from '../../../components/BannerTitle/PageBannerTitle';

const OurTeam = () => {
    return (
        <div className="my-8 md:my-16">
            <PageBannerTitle
                title="Our Team"
                shortDesc="Explore our genius team members"
            />
            <div className='grid md:grid-cols-2 lg:grid-cols-3 justify-between items-center gap-x-10 gap-y-16 my-10 md:my-12'>
                <TeamCard
                    imgLink="https://i.ibb.co/0CJygjy/Profile-2.png"
                    name="Imam Hossain"
                    title="Full Stack Developer"
                    index={1}
                />
                <TeamCard
                    imgLink="https://i.ibb.co/c6ZMcmW/okay.jpg"
                    name="Mehedi Hasan Foysal"
                    title="Full Stack Developer"
                    index={2}
                />
                <TeamCard
                    imgLink="https://i.ibb.co/jGJvXRG/3658610f-7ab6-4fd5-9736-1ed68872ca25.jpg"
                    name="Abu Sayeed"
                    title="Full Stack Developer"
                    index={1}
                />
                <TeamCard
                    imgLink="https://i.ibb.co/RypYBwM/faruq.jpg"
                    name="Md. Omar Faruq"
                    title="Full Stack Developer"
                    index={2}
                />
                <TeamCard
                    imgLink="https://i.ibb.co/dKZBwws/IMG-20230913-113345.jpg"
                    name="Md. Jahid Hasan"
                    title="Full Stack Developer"
                    index={1}
                />
                <TeamCard
                    imgLink="https://i.ibb.co/tYjyjd3/sakib.jpg"
                    name="Nur Mohammad Sakib"
                    title="Full Stack Developer"
                    index={2}
                />
            </div>


        </div>
    );
};

export default OurTeam;