

import NavigationBar from "../NavigationBar/navigationBar";
import Footer from "../NavigationBar/footer";
import { useMediaQuery } from "react-responsive";
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';



function ShowAllPost() {


    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/getAll')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);





    return (


        <div className="App">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Subtitle</th>
                        <th>change</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(item => (
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>{item.subtitle}</td>
                            <td>    <Link
                                to={`/N9-fashionProject/FixAdmin?id=${item.id}`}
                                style={{
                                    color: "#E74C8E"
                                }}
                            >
                               change
                            </Link></td>
                        </tr>
                    ))}



                </tbody>
            </table>

        </div >
    );
}

export default ShowAllPost;
