'use client'

import React, { Fragment } from 'react'
import { Button } from '@/components/ui/button'
import { RiBookFill } from 'react-icons/ri'
import { Timeline } from '@/components/timeLine'
export default function Resume() {
    return (
        <Fragment>
            <div className='mt-4'>
                <div>
                    <p className='text-4xl font-bold'>My Professional Experience</p>
                    <p className='text-gray-500'>A summary of my professional experience as a programmer</p>
                </div>
                <div className="mt-40  z-999">
                    <div>
                        <div className="-mt-32  z-999">
                            <Button
                                onClick={() => alert('berhasil')}
                                className="flex items-center gap-2 px-7 py-5 border font-bold border-black dark:border-white rounded-md bg-transparent text-black dark:text-white hover:bg-blue-200 dark:hover:text-blue-600 hover:text-black transition-colors duration-200 "
                            >
                                <RiBookFill size={22} />
                                Download CV
                            </Button>

                        </div>
                        <Timeline />
                    </div>
                </div>
            </div>

        </Fragment>
    )
}