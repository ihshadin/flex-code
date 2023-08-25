import React, { useEffect, useState } from 'react';
import NodeBtn from '../NodeBtn/NodeBtn';
import { Link } from 'react-router-dom';

const NodeBook = () => {
    const [nodes, setNodes] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/nodebook')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setNodes(data?.result)
            })
    }, [])
    return (
        <div className='flexcode-container'>
            <section>
                <div>
                    <div className="max-w-[600px] mx-auto mb-6 md:mb-12 ">
                        <h2 className="text-center font-bold text-2xl md:text-4xl text-white">
                            NodeBook
                        </h2>
                        <p className="text-white text-center mt-2 md:mt-4">
                            A notebook is a blank book that you can write in and save it.
                        </p>
                    </div>
                    <div className='my-10 mx-40'>
                        <NodeBtn></NodeBtn>
                    </div>
                    {/* New Blog Articles */}
                    <div className='grid grid-cols-3 gap-5 my-10'>
                        {nodes?.map(node => <div key={node._id} >
                            <div className="flex flex-col justify-between border gap-3 p-5 rounded-xl border-gray-500 hover:border-[#0fcda1] transition-all bg-[#1e2d40] cursor-pointer h-64">
                                <h1 className="text-xl text-white font-semibold tracking-wider flex gap-2 items-center">
                                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                    {node.name}
                                </h1>
                                <p className="text-[0.9rem] text-gray-400 mt-1 tracking-wider">
                                    {node.details}
                                </p>
                                <Link className="text-[0.9rem] mt-6 hover:underline text-gray-400 tracking-wider">
                                    Edit node
                                </Link>
                            </div>
                        </div>)}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default NodeBook;