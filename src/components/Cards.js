import React, { useCallback, useState } from 'react'
import Card from "./Card";

const Cards = ({ courses, category }) => {

    // to keep a track of liked courses - we will not add it in card.js because it is keeping a track of a single course only
    const [likedcourse, setlikedcourse] = useState([]);
    // to store all courses in a single array
    const getcourse = () => {
        if (category === "All") {
            // creating an empty array
            let allcouses = [];
            Object.values(courses).forEach(coursecategory => {
                coursecategory.forEach((courseData) => {
                    allcouses.push(courseData);
                })
            })
            return allcouses;
        }
        else{
            return courses[category];
        }
    }
    return (
        <div className="flex flex-wrap justify-center gap-4 mb-4">
            {

                getcourse().map((course) => {
                    return <Card key={course.id} course={course} likedcourse={likedcourse} setlikedcourse={setlikedcourse}></Card>
                })
            }

        </div>
    )
}

export default Cards
