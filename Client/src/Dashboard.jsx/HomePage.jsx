import React, { useEffect, useState } from 'react';
import PrintStories from '../utils/PrintStories';
import { stories, feedbacks } from '../tempData';
import { Link } from 'react-router-dom';
import DashboardStats from './DashboardStats';
import FeedbackSlider from './Feedback';

export default function HomePage() {
    const [selectedTag, setSelectedTag] = useState("tag-all");
    const [storyDisplayCount, setStoryDisplayCount] = useState(12);
    const [totalStories, setTotalStories] = useState(stories);

    useEffect(() => {
        document.getElementById(selectedTag).classList.add('text-orange-500');
    }, []);

    const handleSelectedTag = (e) => {
        const _id = e.target.id;
        document.getElementById(selectedTag).classList.remove("text-orange-500");
        document.getElementById(_id).classList.add('text-orange-500');
        setSelectedTag(_id);

        const tagName = _id.replace('tag-', '').toLowerCase();

        const filterStory = tagName === "all"
            ? stories
            : stories.filter((story) => story.tags.some((tag) => tag.toLowerCase() === tagName));
        setTotalStories(filterStory);
    }

    return (
        <>
            <div className='relative'>
                <img src="https://s3-alpha-sig.figma.com/img/8bab/c6de/10e133c6518d8edcb5ca2d5585b71204?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MM~5sR~MtRxzolLEbgNcQPg2boJJbk1DuvyXs5d4-xUPEKjoBXCFDHJqkfBCfy58FbuSOOfAknvLYflAaafFMWPh4Qj4nIltWEBb6kQTCKODs9wStsuuwWJzlPYq0nI3J~XSrTlLC6r9t--ewDTG5FQma2-G~JNsnhcyj7OnE3XFkiQcRYzmzmGoNFCXpTl3aCCAkPccSaK09RY99brwKeYiAM0SsMMmi69Ap5Qd2lU~toTqd4Ahi3WcqRCEizwjxpqMN2Nk8tR-kpearT4bysM6btMbWu5~D0grM7mLgfy7J2SeBjm8~lLJ9NjkQkr-riwAPZ~s3Ds5uX4rlsr6XA__" alt="" />

                <div className='absolute bottom-1/4 md:bottom-1/6 lg:bottom-1/3 md:text-4xl lg:text-6xl text-white px-5 md:px-10 font-bold'>
                    <p className='font-thin hidden md:flex text-sm lg:text-2xl pb-5 w-2/3'>Narrative imagining — story — is the fundamental instrument of thought. Rational capacities depend upon it. It is our chief means of looking into the future, or predicting, of planning, and of explaining</p>

                    <h1 className='md:pb-5'>Every Story Matters. Share</h1>
                    <h1>Yours Today</h1>
                    <button className='font-thin text-xs md:text-2xl'>
                        <a href="#stories">Read Stories</a>
                    </button>
                </div>
            </div>
            <div id='stories' className='py-14 px-3' >
                <h1 className='text-4xl pt-5 font-bold text-sky-900' >Stories</h1>

                <div className="relative w-full">
                    <ul className="story-tag-list w-full flex space-x-7 py-3 overflow-x-auto px-2 pe-14">
                        {[
                            "All",
                            "Inspirational",
                            "Friends",
                            "Education",
                            "Love",
                            "Career",
                            "Success",
                            "Mindfulness",
                            "Self-Improvement",
                            "Leadership",
                            "Growth",
                            "Adventure",
                            "Empowerment",
                            "Nature",
                        ].map((tag, idx) => (
                            <li key={idx}>
                                <a
                                    href={`#${tag}`}
                                    onClick={handleSelectedTag}
                                    id={`tag-${tag.toLowerCase()}`}
                                    className="whitespace-nowrap"
                                >
                                    {tag}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className="absolute right-0 top-3 ">
                        <Link
                            to="/stories/view-all"
                            className="whitespace-nowrap hover:text-blue-500 bg-white py-2 ps-3"
                        >
                            View All
                        </Link>
                    </div>
                </div>

                <div className='py-7 grid md:grid-cols-3 lg:grid-cols-4 gap-4'>
                    <PrintStories stories={totalStories.slice(0, storyDisplayCount)} />
                </div>
                <div className='w-full flex justify-center'>
                    {
                        (storyDisplayCount < totalStories?.length + 11)
                            ? <button onClick={() => setStoryDisplayCount(storyDisplayCount + 12)} className='text-gray-400 hover:text-gray-800'>Show More</button>
                            : <p className='text-xl text-gray-300'>You've reached the end of the stories!</p>

                    }
                </div>
            </div>
            <DashboardStats />

            <div className='py-14 px-3'>
                <h1 className='text-4xl pt-5 font-bold text-sky-900' >Most Popular Stories</h1>
                
                <div className='grid md:grid-cols-4 gap-4 py-5'>
                    <PrintStories stories={stories.slice(0, 10)} />
                </div>
            </div>

            <div className='w-11/12 mx-auto px-3 pb-10'>
                <h1 className='text-3xl pt-5 font-bold text-gray-400 text-center py-6' >User Feedback</h1>
                
                <FeedbackSlider feedbacks={feedbacks} />
            </div>
        </>
    )
}