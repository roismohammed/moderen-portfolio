'use client'

import { Card } from '@/components/ui/card'
import React, { Fragment, useEffect, useState } from 'react'
import { RiGithubFill, RiTimeFill } from 'react-icons/ri'
import { motion } from "framer-motion"
import { NumberTicker } from '@/components/magicui/number-ticker'
import Image from 'next/image'
export default function Dashboard() {

    const [followers, setFollowers] = useState('...');
    const [repos, setRepos] = useState(0);
    // const username = "roismohammed";
    const skills = [
        { name: "React.js", percentage: 60 },
        { name: "JavaScript", percentage: 31 },
        { name: "TypeScript", percentage: 19 },
    ];

    const editors = [
        { name: "VS Code", percentage: 100 },
    ];



    useEffect(() => {
        fetch('https://api.github.com/users/roismohammed')
            .then(response => response.json())
            .then(data => setFollowers(data.followers))
            .catch(console.error);
    }, []);

    useEffect(() => {
        fetch('https://api.github.com/users/roismohammed')
            .then(response => response.json())
            .then(data => setRepos(data.public_repos))
            .catch(error => console.error('Error:', error));
    }, []);
    return (
        <Fragment>
            {/* <Head title='Dashboard' /> */}
            <div>
                <p className='text-4xl font-bold mb-4'>Dashboard</p>
                <p className='text-lg text-muted-foreground max-w-2xl '>
                    Discover a comprehensive overview of my coding insights, key metrics, and more all conveniently in one place.
                </p>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01],
                    }}
                >


                    <div>
                        {/* <div className='mt-34'>
                            <span className='flex items-center gap-1'>
                                <RiBarChartFill size={24} />
                                <p className='font-bold text-xl'>Engagements</p>
                            </span>
                            <p className='font-semibold mt-1 text-gray-600 dark:text-gray-300'>Discover the numbers behind views, reactions, and endorsements.</p>
                            <div className='md:flex lg:flex  mt-4 gap-4'>
                                <div className='lg:w-4/12 md:w-4/12'>
                                    <Card className='bg-gray-100 dark:bg-zinc-900 rounded-xl py-3 px-4 border-0 shadow-none'>
                                        <p className=' text-gray-600 dark:text-gray-300'>All-Time Views</p>
                                        <p className='font-bold -mt-4 text-2xl'>  <NumberTicker value={0} />0</p>
                                    </Card>
                                </div>

                                <div className='lg:w-4/12 md:w-4/12 mt-2 md:mt-0 lg:mt-0'>
                                    <Card className='bg-gray-100 dark:bg-zinc-900 rounded-xl py-3 px-4 border-0 shadow-none'>
                                        <p className=' text-gray-600 dark:text-gray-300'>All Artikel</p>
                                        <p className='font-bold -mt-4  text-2xl'>  <NumberTicker value={0} /></p>
                                    </Card>
                                </div>

                                <div className='lg:w-4/12 md:w-4/12 mt-2 md:mt-0 lg:mt-0'>
                                    <Card className='bg-gray-100 dark:bg-zinc-900  rounded-xl py-3 px-4 border-0 shadow-none'>
                                        <p className=' text-gray-600 dark:text-gray-300'>All Project</p>
                                        <p className='font-bold -mt-4  text-2xl'>  <NumberTicker value={0} /></p>
                                    </Card>
                                </div>
                            </div>
                        </div> */}

                        <div className='mt-10'>
                            <span className='flex items-center gap-1'>
                                <RiTimeFill size={24} />
                                <p className='font-extrabold text-xl'>Weekly Coding Activities</p>
                            </span>
                            <div className='flex justify-between items-center'>
                                <p className='font-semibold mt-1  text-gray-600 dark:text-gray-300'>A quick look at followers, stars, and contributions activity from last year.</p>
                                <a className='font-bold text-gray-400 hover:text-gray-200 hover:underline transition-all duration-150' href="https://wakatime.com/@RoisDev" target="_blank" rel="noopener noreferrer">Last modified: <span>19 days ago</span></a>
                            </div>
                            <div className='md:flex lg:flex mt-4 gap-4'>
                                <div className='md:w-6/12 lg:w-6/12'>
                                    <Card className='bg-gray-100 dark:bg-zinc-900  rounded-xl py-3 px-4 border-0 shadow-none'>
                                        <p className=' text-gray-600 text-lg dark:text-gray-300'>Daily Coding Average</p>
                                        <p className='font-bold -mt-6 text-xl'>
                                            <NumberTicker value={2}/> hrs <NumberTicker value={52}/> mins
                                        </p>
                                    </Card>
                                </div>

                                <div className='md:w-6/12 lg:w-6/12 mt-2 md:mt-0 lg:mt-0'>
                                    <Card className='bg-gray-100 dark:bg-zinc-900  rounded-xl py-3 px-4 border-0 shadow-none'>
                                        <p className=' text-gray-600 text-lg dark:text-gray-300'>This Week Coding Time</p>
                                        <p className='font-bold -mt-6 text-xl'>5 hrs 45 mins</p>
                                    </Card>
                                </div>

                                <div className='md:w-6/12 lg:w-6/12 mt-2 md:mt-0 lg:mt-0'>
                                    <Card className='bg-gray-100 dark:bg-zinc-900  rounded-xl py-3 px-4 border-0 shadow-none'>
                                        <p className=' text-gray-600 text-lg dark:text-gray-300'>
                                            Coding at night</p>
                                        <p className='font-bold -mt-6 text-xl'>3 hrs 45 mins</p>
                                    </Card>
                                </div>



                            </div>

                            <div className="mt-4">

                                <div className="flex flex-col md:flex-row gap-4">
                                    <div className="flex-1">
                                        <p className="font-bold text-lg mb-1">Languages </p>
                                        <div className="border-2 p-3 rounded-xl border-gray-200 dark:border-gray-700 h-[115px]">
                                            <ul className="flex flex-col gap-2">
                                                {skills.map((skill, index) => (
                                                    <li key={index} className="flex items-center justify-between gap-3">
                                                        <div className="w-24">{skill.name}</div>
                                                        <div className="relative flex h-3 flex-1 justify-center rounded-full bg-muted">
                                                            <span
                                                                className="absolute left-0 top-0 h-3 rounded-full px-3 bg-gradient-to-r from-pink-400 via-blue-500 to-purple-600"
                                                                style={{ width: `${skill.percentage}%` }}
                                                            ></span>
                                                        </div>
                                                        <div className="w-8 text-right">{skill.percentage}%</div>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="flex-1">
                                        <p className="font-bold text-lg mb-1">Editors </p>
                                        <div className="border-2 p-3 rounded-xl border-gray-200 dark:border-gray-700 h-[115px]">
                                            <ul className="flex flex-col gap-2">
                                                {editors.map((editors, index) => (
                                                    <li key={index} className="flex items-center justify-between gap-3">
                                                        <div className="w-24">{editors.name}</div>

                                                        <div className="relative flex h-3 flex-1 justify-center rounded-full bg-muted">
                                                            <span
                                                                className="absolute left-0 top-0 h-3 rounded-full px-3 bg-gradient-to-r from-pink-400 via-blue-500 to-purple-600"
                                                                style={{ width: `${editors.percentage}%` }}
                                                            ></span>
                                                        </div>

                                                        {/* Persentase */}
                                                        <div className="w-8 text-right">{editors.percentage}%</div>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>


                        <div className='mt-10'>
                            <span className='flex items-center gap-1'>
                                <RiGithubFill size={24} />
                                <p className='font-bold text-xl'>Github Insights</p>
                            </span>
                            <div className='flex justify-between items-center'>
                                <p className='font-semibold mt-1  text-gray-600 dark:text-gray-300'>A quick look at followers, stars, and contributions activity from last year.</p>
                                <a href='' className='font-bold text-gray-400 hover:text-gray-100'>@roismohammed</a>
                            </div>
                            <div className='md:flex lg:flex mt-4 gap-4'>
                                <div className='md:w-6/12 lg:w-6/12'>
                                    <Card className='bg-gray-100 dark:bg-zinc-900 rounded-xl py-3 px-4 border-0 shadow-none'>
                                        <div className='flex flex-col'>
                                            <div className='flex justify-between items-center'>
                                                <p className='text-gray-600 dark:text-gray-300'>GitHub Followers</p>
                                            </div>
                                            <p className='font-bold text-2xl mt-1'>{followers}</p>
                                        </div>
                                    </Card>
                                </div>

                                <div className='md:w-6/12 lg:w-6/12 mt-2 md:mt-0 lg:mt-0'>
                                    <Card className='bg-gray-100 dark:bg-zinc-900  rounded-xl py-3 px-4 border-0 shadow-none'>
                                        <p className=' text-gray-600 dark:text-gray-300'>Repositoris public</p>
                                        <p className='font-bold text-2xl -mt-4'>{repos}</p>
                                    </Card>
                                </div>

                            </div>
                            <div className='mt-4'>
                                <p className="font-bold text-lg mb-1">Contribution</p>
                                <div className='border-2 p-3 rounded-lg border-gray-200 dark:border-zinc-800'>
                                    <Image
                                        className="w-full rounded-xl"
                                        src="https://ghchart.rshah.org/roismohammed"
                                        alt="roismohammed's Github chart"
                                        width={800}
                                        height={200}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </Fragment>
    )
}