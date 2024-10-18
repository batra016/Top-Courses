import React from 'react'
import { FcLike } from 'react-icons/fc'
import { toast } from 'react-toastify';
import { FcLikePlaceholder } from "react-icons/fc";

const Card = ({ course, likedcourse, setlikedcourse }) => {
    function clickhandler() {
        //logic - we are removing the course which is having that particular id from the arry od likedcourses
        if (likedcourse.includes(course.id)) {
            // query - ans in copy 
            setlikedcourse((prev) => {
                return prev.filter((cid) => {
                    return cid !== course.id;  // If curly braces are used, return is necessary here
                });
            });
            // setlikedcourse((prev) => prev.filter((cid) => cid !== course.id));
            toast.warning("Like removed");
        }
        else {
            //mtlb yeh course phele s like nhi hai toh we have to insert it in the liked course
            if (likedcourse.length === 0) {
                //phele empty hai 
                setlikedcourse([course.id]);
            }
            else {
                //when it is non empty
                setlikedcourse((prev) => [...prev, course.id]);
            }
            toast.success("Liked successfully");
        }
    }
    return (
        <div className='bg-bgDark bg-opacity-80 w-[300px] rounded-md overflow-hidden'>
            <div>
                <div className='relative'>
                    <img src={course.image.url} alt="Image"></img>
                    <div className='rounded-full w-[40px] h-[40px] bg-white absolute right-2 bottom-[-12px] grid place-items-center'>
                        <button onClick={clickhandler}>
                            {
                                !likedcourse.includes(course.id) ? <FcLikePlaceholder fontSize="1.75rem" /> : <FcLike fontSize="1.75rem" />
                            }
                        </button>
                    </div>
                </div>

            </div>
            <div className='p-4'>
                <p className='text-white text-lg font-semibold leading-6'>{course.title}</p>
                <p className='mt-2 text-white'>
                    {
                        // we want only first 100 character to be displayed
                        course.description.length>100 ? (course.description.substr(0,100))+ "..." : (course.description)
                    }
                </p>
            </div>
        </div>
    )
}

export default Card
