import { FaCrown } from 'react-icons/fa6';
import React from 'react';
import { Link } from 'react-router-dom';
import '../Subscribe/Subscribe.css'
import useFlexUser from '../../Hooks/useFlexUser';

const ProblemCard = ({ problem }) => {
  const [flexUser] = useFlexUser()
  const isPremium = flexUser?.isPremium;

  return (
    <div className="flexcode-banner-bg flex flex-col md:flex-row md:items-center justify-between border border-slate-500 hover:border-[#0fcda18c] px-5 py-6 rounded-xl">
      <div>
        <span className="flex items-center mb-2 md:mb-5 gap-2"><h1 className="text-base text-white font-semibold">
          {problem.title}
        </h1> {problem?.isPremium && <FaCrown className='text-amber-400' />}</span>
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
        {problem?.isPremium === true && isPremium !== true &&
          <a href="#subscribeFirst" className="flexcode-button text-xs py-2 px-3" >Solve Problem</a>
        }
        {problem?.isPremium === true && isPremium === true &&
          <Link to={`/problem/${problem._id}`} className="flexcode-button text-xs py-2 px-3" >Solve Problem</Link>
        }
        {problem?.isPremium !== true &&
          <Link to={`/problem/${problem._id}`} className="flexcode-button text-xs py-2 px-3" >Solve Problem</Link>
        }

      </div>
      {/* The button to open modal */}

      {/* Put this part before </body> tag */}
      <div className="modal" id="subscribeFirst">
        <div className="modal-box bg-black flexcode-banner-bg min-h-64 flex flex-col justify-center items-center border border-slate-600 hover:border-[#0fcda156]">
          <a href='#' className='ml-auto hover:text-[#0fcda1] text-[#0fcda1] mb-8 border-[#0fcda18c] bg-transparent'>
            X
          </a>
          <div>
            <h3 className='text-xl text-center mb-10'>You have to <span className='text-amber-400'>Subscribe</span> first to <br /> solve our <span className='text-[#0fcda1]'>premium</span> problems.</h3>
          </div>
          <Link to="/checkout">
            <button className="p-container">
              <div className="left-side">
                <div className="card">
                  <div className="card-line"></div>
                  <div className="buttons"></div>
                </div>
                <div className="post">
                  <div className="post-line"></div>
                  <div className="screen">
                    <div className="dollar">$</div>
                  </div>
                  <div className="numbers"></div>
                  <div className="numbers-line2"></div>
                </div>
              </div>
              <div className="right-side">
                <div className="new text-black">Subscribe Now</div>
                <svg
                  className="arrow"
                  xmlns="http://www.w3.org/2000/svg"
                  width="512"
                  height="512"
                  viewBox="0 0 451.846 451.847"
                >
                  <path
                    d="M345.441 248.292L151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z"
                    data-original="#000000"
                    className="active-path"
                    data-old_color="#000000"
                    fill="#00000"
                  />
                </svg>
              </div>
            </button>
          </Link>
        </div>
      </div>
    </div>

  );
};

export default ProblemCard;