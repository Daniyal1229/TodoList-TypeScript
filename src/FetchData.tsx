import { useState, useEffect } from "react"

const FetchData = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response:Response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await response.json();
            setData(data);
        }
        fetchData();
    }, []);

    console.log(data);

  return (

    <div>
        {
            data.map((item: any) => {
                return (
                    <div>
                        <p>{item.title}</p>
                    </div>
                )
            })
        }
    </div>


  )
}

export default FetchData