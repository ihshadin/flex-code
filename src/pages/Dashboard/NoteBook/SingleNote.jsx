import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import PageBannerTitle from '../../../components/BannerTitle/PageBannerTitle';
import useAuth from '../../../Hooks/useAuth';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const SingleNote = () => {
    const { id } = useParams();
    const { user } = useAuth();
    const [notes, setNotes] = useState([]);
    const [note, setNote] = useState([]);
    const [axiosSecure] = useAxiosSecure();

    useEffect(() => {
        axiosSecure.get(`/notebooks/${id}`)
            .then(data => {
                setNote(data?.data)
            })
    }, [id])

    useEffect(() => {
        axiosSecure.get(`/notebooks?email=${user?.email}`)
            .then(data => {
                console.log(data.data);
                setNotes(data?.data)
            })
    }, [user?.email])

    return (
        <section>
            <div className="flexcode-container">
                <PageBannerTitle
                    title={note.title}
                    shortDesc='A notebook is a blank book that you can write in and save it.'
                    btnLink='/notebooks'
                    btnText1='My NoteBooks'
                    btnText2='View All NoteBooks'
                />
                <div className="flex flex-col md:flex-row gap-5 mt-16">
                    {/* Single NoteBook details side */}
                    <div className="w-full lg:w-[70%] bg-secondary-color py-5 md:py-10 px-3 md:px-5 lg:px-10 rounded-xl">
                        <h1 className="text-xl md:text-2xl font-semibold leading-tight primary-color">
                            {note?.title}
                        </h1>
                        <p className="text-white mt-5 text-justify">
                            {note?.details}
                        </p>
                    </div>
                    {/* List of Blog Side side */}
                    <div className="w-full lg:w-[30%] flex flex-col bg-secondary-color py-5 px-3 md:px-5 rounded-xl divide-y-2 divide-[#0fcda156]">
                        <h2 className='text-xl font-semibold mb-2'>Recent Notes</h2>
                        {
                            notes?.slice(0, 5).map((note) => (
                                <Link to={`/notebook/${note._id}`} key={note._id} className='py-4'>
                                    <h2 className='text-md primary-color font-medium mb-1'>{note.title}</h2>
                                    <p className="text-xs text-slate-400">
                                        {
                                            note?.details?.length > 100 ? note?.details.slice(0, 50) + "..." : note?.details
                                        }
                                    </p>
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SingleNote;