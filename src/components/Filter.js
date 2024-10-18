import React from 'react'
//filterdata is being passed with the help of props and it is the form of array so we will use map function to create button for each data

const Filter = ({ filterData, category, setcategory }) => {
    function filterhandler(title) {
        setcategory(title);
    }
    return (
        // hamne {} because we want to insert js code and then we used map function
        <div className="w-11/12 flex flex-wrap max-w-max space-x-4 mx-auto gap-y-4 py-4 justify-center">
            {
                filterData.map((data) => {
                    return (
                        // it is necessary to pass key in map function
                        <button
                            className={`text-lg px-2 py-1 rounded-md font-medium text-white bg-black border-2 hover:bg-opacity-50 transition-all duration-200
                                ${category === data.title
                                    ? "bg-opacity-60 border-white"
                                    : "bg-opacity-40 border-transparent"
                                }`}
                            key={data.id}
                            onClick={() => filterhandler(data.title)}>
                            {data.title}
                        </button>
                    )
                })
            }

        </div>
    )
}

export default Filter
