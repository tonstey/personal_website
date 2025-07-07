import React from "react";

export default function ResumePage() {
    return (
        <>
            <section id="resumepage" className="flex flex-col justify-center items-center min-h-screen w-full mx-auto py-14 font-mono z-20 bg-lightGreen relative" >
                
                <h1 className="text-4xl font-bold text-lightBrown font-serif mt-20">Resume</h1>
                <div className="m-auto w-[70%]">
                    {/* EXPERIENCE SECTION */}
                    <div className="flex flex-col justify-center items-center w-[95%] mt-8" id="experience">
                        <h1 className="self-start text-xl font-bold">Experience</h1>
                        <hr className="w-full h-[2px] bg-slate-300"></hr>
                        <div className="flex flex-col justify-center w-[92%] mt-6">
                            <div className="flex justify-between mt-1">
                                <h1 className="font-bold" id="experienceName">No Formal Experience</h1>
                                <h1 id="date"></h1>
                            </div>
                            <ul className="flex flex-wrap ml-12 mt-2 text-sm list-disc">
                            </ul>
                        </div>
                    </div>

                    {/*SKILLS SECTION*/}
                    <div className="flex flex-col justify-center items-center w-[95%] mt-10" id="skills">
                        <h1 className="self-start text-xl font-bold">Skills</h1>
                        <hr className="w-full h-[2px] bg-slate-300"></hr>

                        <div className="flex flex-col justify-center w-[92%] mt-6">
                            <div className="flex justify-between mt-1">
                                <h1 className="font-bold">Languages:</h1>
                            </div>
                            <ul className="flex flex-wrap ml-12 mt-2 text-sm list-disc">
                                <li>English (Fluent Proficiency)</li>
                                <li>Vietnamese (Professional Proficiency)</li>
                                <li>Spanish (Elementary Proficiency)</li>
                                <li>Korean (Elementary Proficiency)</li>
                            </ul>
                        </div>

                        <div className="flex flex-col justify-center w-[92%] mt-8">
                            <div className="flex justify-between mt-1">
                                <h1 className="font-bold">Programming Languages:</h1>
                            </div>
                            <ul className="flex flex-wrap ml-12 mt-2 text-sm list-disc">
                                <li>C++</li>
                                <li>Java</li>
                                <li>Python</li>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                                <li>TypeScript</li>
                                <li>R</li>
                                <li>SQL</li>
                                <li>MATLAB</li>
                            </ul>
                        </div>

                        <div className="flex flex-col justify-center w-[92%] mt-8">
                            <div className="flex justify-between mt-1">
                                <h1 className="font-bold">Frameworks:</h1>
                            </div>
                            <ul className="flex flex-wrap ml-12 mt-2 text-sm list-disc">
                                <li>ReactJS</li>
                                <li>Tailwind</li>
                                <li>Node.js</li>
                                <li>Next.js</li>
                                <li>Express</li>
                            </ul>
                        </div>

                        <div className="flex flex-col justify-center w-[92%] mt-8">
                            <div className="flex justify-between mt-1">
                                <h1 className="font-bold">Tools:</h1>
                            </div>
                            <ul className="flex flex-wrap ml-12 mt-2 text-sm list-disc">
                                <li>VIM</li>
                                <li>Git</li>
                                <li>VS Code</li>
                                <li>Visual Studio Code</li>
                                <li>Eclipse</li>
                                <li>Jupyter Notebook</li>
                                <li>Firebase</li>
                                <li>MongoDB</li>
                            </ul>
                        </div>

                        <div className="flex flex-col justify-center w-[92%] mt-8">
                            <div className="flex justify-between mt-1">
                                <h1 className="font-bold">Interests:</h1>
                            </div>
                            <ul className="flex flex-wrap ml-12 mt-2 text-sm list-disc">
                                <li>Full-Stack Engineering</li>
                                <li>Front-End Engineering</li>
                                <li>Back-End Engineering</li>
                                <li>Data Science</li>
                                <li>Data Analysis</li>
                                <li>Data Engineering</li>
                                <li>Artificial Intelligence (AI) Engineering</li>
                                <li>Machine Learning (ML) Engineering</li>
                            </ul>
                        </div>


                    </div>

                    {/* EDUCATION SECTION */}
                    <div className="flex flex-col justify-center items-center w-[95%] mt-10" id="education">
                        <h1 className="self-start text-xl font-bold">Education</h1>
                        <hr className="w-full h-[2px] bg-slate-300"></hr>

                        <div className="flex flex-col justify-center w-[92%] mt-6">
                            <h1 className="font-black text-lg">University of California, San Diego</h1>
                            <div className="flex justify-between mt-1">
                                <h1><em>Bachelors of Science in Mathematics - Computer Science</em></h1>
                                <h1>Sept 2023 - Jun 2025</h1>
                            </div>
                            <h1><em>GPA</em>: 3.54</h1>
                            <h1><em>Awards</em>: Provost Honors (Fall 2023 - Present)</h1>
                            <p><em>Coursework Taken</em>:</p>
                            <ul className="flex flex-wrap ml-12 mt-2 text-sm list-disc">
                                <li>Object-Oriented Programming</li>
                                <li>Data Structures</li>
                                <li>Design & Analysis of Algorithms</li>
                                <li>Software Tools</li>
                                <li>Discrete Mathematics & Graph Theory</li>
                                <li>Data Science in Practice</li>
                                <li>Optimizations in Data Science</li>
                                <li>Statistical Methods</li>    
                                <li>Web Mining & Recommender Systems</li>
                                <li>Theory in Computation</li>
                                <li>Introduction to Cryptography</li>
                                <li>Mathematical Reasoning</li>
                                <li>Numerical Analysis in Linear Algebra</li>
                                <li>Teaching Computational Thinking</li>
                                <li>Modern Algebra</li>
                            </ul>
                        </div>

                        <div className="flex flex-col justify-center w-[92%] mt-6">
                            <h1 className="font-black text-lg">Yonsei University</h1>
                            <div className="flex justify-between mt-1">
                                <h1><em>Study Abroad Program</em></h1>
                                <h1>Mar 2025 - Jun 2025</h1>
                            </div>

                            <p><em>Coursework Taken</em>:</p>
                            <ul className="flex flex-wrap ml-12 mt-2 text-sm list-disc">
                                <li>Understanding K-Pop</li>
                                <li>Literature & Gaming</li>
                                <li>Basic Korean I (KLI)</li>
                            </ul>
                        </div>

                        <div className="flex flex-col justify-center w-[92%] mt-8">
                            <h1 className="font-black text-lg">Irvine Valley College</h1>
                            <div className="flex justify-between mt-1">
                                <h1><em>Bachelors of Science in Mathematics - Computer Science</em></h1>
                                <h1>Aug 2021 - May 2023</h1>
                            </div>
                            <h1><em>GPA</em>: 3.86</h1>
                            <h1><em>Awards</em>: Dean's List (Fall 2021 - Spring 2023)</h1>
                            <p><em>Coursework Taken</em>:</p>
                            <ul className="flex flex-wrap ml-12 mt-2 text-sm list-disc">
                                <li>C++ Programming</li>
                                <li>Java Programming</li>
                                <li>Python Programming</li>
                                <li>Assembly Language Programming</li>
                                <li>Design Systems</li>
                                <li>Calculus II</li>
                                <li>Calculus III</li>
                                <li>Linear Algebra</li>
                                <li>Differential Equations</li>
                                <li>Physics: Mechanics</li>
                                <li>Physics: Electromagnetism</li>
                                <li>Physics: Thermodynamics, Optics, & Relativity</li>
                            </ul>
                        </div>

                        <div className="flex flex-col justify-center w-[92%] mt-8">
                            <h1 className="font-black text-lg">Bolsa Grande High School</h1>
                            <div className="flex justify-between mt-1">
                                <h1><em>High School Diploma</em></h1>
                                <h1>Aug 2017 - Jun 2021</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <a className="mt-16" href="TonyVuong_Resume.pdf" download="TonyVuong_Resume">
                    <button className="font-bold bg-darkenLightGreen text-green-50 w-64 h-16 text-xl rounded-2xl">Download Resume</button>
                </a>
               
            </section>
        </>
    )
}