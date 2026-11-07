import React, {useContext, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import {AppContext} from "../context/appcontaxt/AppContext.jsx";

const Mentor = () => {

    const {speciality}= useParams()
    const navigate = useNavigate();

    const {mentors} = useContext(AppContext)

    const [filterDoc, setFilterDoc] = useState([])

    const applyFilter = ()=>{
        if(speciality){
            setFilterDoc(mentors.filter(m=>m.category===speciality))
        }
        else {
            setFilterDoc(mentors)
        }
    }

    useEffect(() => {

        applyFilter()

    }, [mentors,speciality]);

    return (
        <div>
            <p className='text-gray-600'>
                Explore mentors across different fields and find the right expert to guide your learning journey

            </p>
            <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
                <div className='flex flex-col gap-4 text-sm text-gray-600'>
                    <p onClick={()=> speciality ==='Java Programming' ? navigate('/mentors') : navigate('/mentors/Java Programming')} className={'w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer'}>Java Programming</p>
                    <p onClick={()=> speciality ==='Web Development' ? navigate('/mentors') : navigate('/mentors/Web Development')} className={'w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer'} >Web Development</p>
                    <p onClick={()=> speciality ==='Interview & Placement' ? navigate('/mentors') : navigate('/mentors/Interview & Placement')}  className={'w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer'} >Interview & Placement</p>
                    <p onClick={()=> speciality ==='Python & AI' ? navigate('/mentors') : navigate('/mentors/Python & AI')}  className={'w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer'} >Python & AI</p>
                    <p onClick={()=> speciality ==='DSA & Problem Solving' ? navigate('/mentors') : navigate('/mentors/DSA & Problem Solving')}  className={'w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer'} >DSA & Problem Solving</p>
                    <p onClick={()=> speciality ==='Database & SQL' ? navigate('/mentors') : navigate('/mentors/Database & SQL')}  className={'w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer'} >Database & SQL</p>
                </div>
                <div className='w-full grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4 gap-y-6'>
                    {
                        filterDoc.map((item,index )=>(
                            <div onClick={()=>navigate(`/app/${item.id}`)} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
                                <img className='bg-blue-50' src={item.image} alt=""/>
                                <div className='p-4'>
                                    <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                                        <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Avaiable</p>
                                    </div>
                                    <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                                    <p className='text-gray-600 text-sm'>{item.category}</p>
                                </div>

                            </div>
                        ))
                    }

                </div>
            </div>



        </div>
    );
};

export default Mentor;