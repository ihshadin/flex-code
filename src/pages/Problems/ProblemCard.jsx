import React from 'react';
import { Link } from 'react-router-dom';

const ProblemCard = ({ problem }) => {
    return (
        <div className="flexcode-banner-bg flex flex-col md:flex-row md:items-center justify-between border border-slate-500 hover:border-[#0fcda18c] px-5 py-6 rounded-xl">
            <div>
                <h1 className="text-base mb-2 md:mb-5 text-white font-semibold">
                    {problem.title}
                </h1>
                <div className="flex items-center gap-5">
                    <p className="text-xs text-gray-400 tracking-wider">
                        Type: {" "}
                        <span
                            className={`capitalize ${problem.level === "easy"
                                ? "text-green-500"
                                : problem.level === "difficult"
                                    ? "text-red-500"
                                    : "text-yellow-500"
                                }`}
                        >
                            {problem.level}
                        </span>
                    </p>
                    <p className="text-xs text-gray-400 tracking-wider">
                        Language:{" "}<span className="text-white">{problem.language}</span>.
                    </p>

                </div>
            </div>
            <div className="mt-3 md:mt-0 text-center shrink-0">
                <Link
                    to={`/problem/${problem._id}`}
                    className="flexcode-button text-xs py-2 px-3"
                >
                    Solve Problem
                </Link>
            </div>
        </div>
    );
};

export default ProblemCard;