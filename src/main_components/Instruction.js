import React from 'react';

const Instruction = () => {
    return (
        <div className='section'>
            <div className='font-bold text-center text-6xl pt-[100px]'>
                MMT <br />
                Advantage
            </div>

            <div className='text-xl pt-12 ml-[3%] mr-[3%] sm:ml-[10%] sm:mr-[10%]'>
                <div className="overflow-x-auto">
                    <table className="table table-zebra table-compact w-full space-y-8">
                        <thead>
                            <tr className='text-center bg-gray-100'>
                                <th>College</th>
                                <th>Overall <br />
                                    Acceptance Rate</th>
                                <th>MMT <br />
                                    Admissions  Rate</th>
                                <th>MMT Advantage</th>

                            </tr>
                        </thead>

                        <tbody>
                            <tr className='text-center'>
                                <td>Cornell University</td>
                                <td>100%</td>
                                <td>100%</td>
                                <td>5x</td>
                            </tr>

                            <tr className='text-center bg-gray-100'>
                                <td>Cornell University</td>
                                <td>100%</td>
                                <td>100%</td>
                                <td>1x</td>
                            </tr>

                            <tr className='text-center'>
                                <td> Colgate University</td>
                                <td>100%</td>
                                <td>100%</td>
                                <td>3x</td>
                            </tr>

                            <tr className='text-center bg-gray-100'>
                                <td> Colgate University</td>
                                <td>100%</td>
                                <td>100%</td>
                                <td>3x</td>
                            </tr>

                            <tr className='text-center'>
                                <td> Colgate University</td>
                                <td>100%</td>
                                <td>100%</td>
                                <td>3x</td>
                            </tr>
                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default Instruction;