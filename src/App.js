import './App.css';
// haame data.js ka data filter ko pass krna hai 
import { apiUrl, filterData } from "./data";
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import Cards from './components/Cards';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Spinner from './components/Spinner'

function App() {
  // use state variable to store output - empty array intialisation
  const [courses, setcourses] = useState([]);
  const [loading, setloading] = useState(true);
  const [category, setcategory] = useState(filterData[0].title);
  //filterdata[0].title is all value

  // data needs to be fetched with the help of API CALL

  // async function fetchData() {
  //   //jb data aa rha hai
  //   setloading(true);
  //   try {
  //     // API CALL
  //     const res = await fetch(apiUrl);
  //     // convert to json
  //     const output = await res.json();
  //     console.log(output);
  //     setcourses(output.data);
  //   }
  //   catch (error) {
  //     toast.error("Something went wrong");
  //   }

  //   // jb data aagya already
  //   setloading(false);
  // }

  // function has to be called once
  useEffect(() => {
    const fetchData = async () => {
      //jb data aa rha hai
      setloading(true);
      try {
        const res = await fetch(apiUrl);
        const output = await res.json();
        console.log(output);
        // why output.data  - for this refer to json response all data is kept in key named data
        setcourses(output.data);

        setloading(false);
      } catch (error) {
        toast.error("Something went wrong");
      }
    };
    fetchData();
  }, [])

  return (
    <div className="App min-h-screen flex flex-col bg-bgDark2">
      <div>
        <Navbar />
      </div>
      <div>
        <Filter
          //  passing data through props
          filterData={filterData}
          category= {category}
          setcategory = {setcategory} />
      </div>
      <div className="w-11/12 max-w-[1200px] min-h-[50vh] mx-auto flex flex-wrap justify-center items-center">
        {
          // agar loading ho rhi hai toh obv spinner dekhayenge nhi toh card components
          loading ? (<Spinner></Spinner>) : (<Cards courses={courses} category = {category} />)
        }
      </div>
    </div>
  );

}

export default App;
