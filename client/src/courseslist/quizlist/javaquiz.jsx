import { useState,useEffect } from "react";
import {useNavigate} from 'react-router-dom'
import axios from "axios"


function javaquiz()
{
    const [onescore,setonescore]=useState(0);
    const [twoscore,settwoscore]=useState(0);
    const [threescore,setthreescore]=useState(0);
    const [fourscore,setfourscore]=useState(0);
    const [fivescore,setfivescore]=useState(0);
    
    const[finalscore,setfinalscore]=useState(0);

    const [one,setone]=useState();
    const [two,settwo]=useState();
    const [three,setthree]=useState();
    const [four,setfour]=useState();
    const [five,setfive]=useState();

    const [submit,setsubmit]=useState(0);

    const [data,setdata]=useState([]);
    useEffect(() => {
        try {
          axios.get('http://localhost:8000/courses/java/quiz')
            .then((response) => {
              setdata(response.data);
              console.log(response.data);
            })
            .catch((error) => {
              console.error('Error fetching address data:', error);
            });
        } catch (error) {
          console.error('An error occurred:', error);
        }
      }, []);
   
    function check()
    {
        if(one =='b')
        {
            setonescore(1);
        }
        if(two =='a')
        {
            settwoscore(1);
        }
        if(three =='c')
        {
            setthreescore(1);
        }
        if(four =='a')
        {
            setfourscore(1);
        }
        if(five =='b')
        {
            setfivescore(1);
        }
        calc();
        
    
    }
    
    function calc()
    {
        setfinalscore(onescore+twoscore+threescore+fourscore+fivescore);
    }

    const navigate=useNavigate();
    const back=()=>
    {
        navigate('/courses')
    };

    return (
        <>
       
        {
            submit<=1 ?
            (

            
        <div className="disp">
            <div className="disphead">JAVA QUIZ</div>
            <div className="dispquiz">
                
            <div >
                    <div >1) {data.map((item, index) => (
                    item.one
                    ))}</div>
                    <div>
                        <input type="radio" name="one" value="a" onChange={e=>setone(e.target.value)}></input><label>{data.map((item, index) => (item.one_a ))}</label><br></br>
                        <input type="radio" name="one" value="b" onChange={e=>setone(e.target.value)}></input><label>{data.map((item, index) => (item.one_b ))}</label><br></br>
                        <input type="radio" name="one" value="c" onChange={e=>setone(e.target.value)}></input><label>{data.map((item, index) => (item.one_c ))}</label>
                    </div>
                    <br></br>

                    <div >
                    <div >2) {data.map((item, index) => (
                    item.two
                    ))}</div>
                    <div>
                        <input type="radio" name="two" value="a" onChange={e=>settwo(e.target.value)}></input><label>{data.map((item, index) => (item.two_a ))}</label><br></br>
                        <input type="radio" name="two" value="b" onChange={e=>settwo(e.target.value)}></input><label>{data.map((item, index) => (item.two_b ))}</label><br></br>
                        <input type="radio" name="two" value="c" onChange={e=>settwo(e.target.value)}></input><label>{data.map((item, index) => (item.two_c ))}</label>
                    </div>
                    <br></br>

                    <div >3){data.map((item, index) => (
                    item.three
                    ))}</div>
                    <div>
                        <input type="radio" name="three" value="a" onChange={e=>setthree(e.target.value)}></input><label>{data.map((item, index) => (item.three_a ))}</label><br></br>
                        <input type="radio" name="three" value="b" onChange={e=>setthree(e.target.value)}></input><label>{data.map((item, index) => (item.three_b ))}</label><br></br>
                        <input type="radio" name="three" value="c" onChange={e=>setthree(e.target.value)}></input><label>{data.map((item, index) => (item.three_c ))}</label>
                    </div>
                    <br></br>

                    <div >4) {data.map((item, index) => (
                    item.four
                    ))} </div>
                    <div>
                        <input type="radio" name="four" value="a" onChange={e=>setfour(e.target.value)}></input><label>{data.map((item, index) => (item.four_a ))}</label><br></br>
                        <input type="radio" name="four" value="b" onChange={e=>setfour(e.target.value)}></input><label>{data.map((item, index) => (item.four_b ))}</label><br></br>
                        <input type="radio" name="four" value="c" onChange={e=>setfour(e.target.value)}></input><label>{data.map((item, index) => (item.four_c ))}</label>
                    </div>
                    <br></br>

                    <div >5) {data.map((item, index) => (
                    item.five
                    ))}</div>
                    <div>
                        <input type="radio" name="five" value="a" onChange={e=>setfive(e.target.value)}></input><label>{data.map((item, index) => (item.five_a ))}</label><br></br>
                        <input type="radio" name="five" value="b" onChange={e=>setfive(e.target.value)}></input><label>{data.map((item, index) => (item.five_b ))}</label><br></br>
                        <input type="radio" name="five" value="c" onChange={e=>setfive(e.target.value)}></input><label>{data.map((item, index) => (item.five_c ))}</label>
                    </div>
                    <br></br>
                </div>
                </div>
                
            </div>
            <div className="disphead">
                <button className="btn" onClick={sub}>Submit</button>
            </div>
         
        </div>
            ):
            (
                <div className="res hm2">
                    <div className="txt">
                        Result
                        <center>
                        <div className="res1">
                            <div className="pt-4">Your Score</div>
                        <div className="res1txt">{finalscore} / 5</div>
                        </div>
                        </center>
                        <center>
                        <div className="res2 ">
                        <div className="pt-4 text-cyan-500">Correct Answer</div>
                        <div>
                            <p>1)Use of pointers</p>
                            <p>2)An object that has no reference.</p>
                            <p>3)Applet class</p>
                            <p>4)Multiple threads</p>
                            <p>5)Throwable</p>
                        </div>

                        </div>
                        </center>
                        <div>
                            <button className="btn" onClick={back}>Back</button>
                        </div>
                        
                    </div>
                </div>
            )
        }
        </>

    );

    function sub()
    {
        setsubmit(submit+1);
        check();
    }

}

export default javaquiz;