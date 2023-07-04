import React from "react";
import "../styles/AboutMe.css";

const AboutMe = () => {


    return (
        <div className="about-outer" >
            <div className="edu" >
                <div className="title" >EDUCATION</div> 
                <div className="certification" >
                
                <table>
                <th colSpan={2} >Full Stack Development Bootcamp - JavaScript</th>
                    <tr>
                        <td className="left" >Organisation :</td>
                        <td className="right" >upGrad</td>
                    </tr>
                    <tr>
                        <td className="left" >Certificate By :</td>
                        <td className="right" >Golden Gate University, California</td>
                    </tr>
                    <tr>
                        <td colSpan={2} className="date" >27th March, 23 - 26th Sept., 23 </td>
                    </tr>
                    
                    
                </table>
                </div>
                <div className="college" >
                <table>
                    <th colSpan={2} >Computer Science</th>
                    <tr>
                        <td className="left" >College :</td>
                        <td className="right" >Sahyadri College of Engineering & Management</td>
                    </tr>
                    <tr>
                        <td className="left" >University :</td>
                        <td className="right" >Visvesvaraya Technological University</td>
                    </tr>
                    
                    
                    <tr>
                        <td className="left" >Course :</td>
                        <td className="right" >B.E. (Computer Science)</td>
                    </tr>
                    <tr>
                        <td colSpan={2}  className="date" >2017 - 2021 </td>
                    </tr>
                </table>
                </div>
            </div>
            <div className="skills" >
            <div className="title" >SKILLS</div> 
                <div className="tech-skills" >
                <table>
                    <tbody>
                    <tr>
                    <th colSpan={2} >Tech - Skills</th>
                    </tr>
                    
                    <tr>
                        <td className="full" >React JS, Firebase</td>
                    </tr>
                    <tr>
                        <td className="full" >Git & GitHub</td>
                    </tr>
                    <tr>
                        <td className="full" >JavaScript, CSS, HTML</td>
                    </tr>
                    <tr>
                        <td className="full" >Python, Java, C++</td>
                    </tr>
                    <tr>
                        <td className="full" >Linux</td>
                    </tr>
                    </tbody>
                </table>
                </div>
                <div className="soft-skills" >
                <table>
                    <tbody>
                    <tr>
                        <th colSpan={2} >Soft - Skills</th>
                    </tr>
                    
                    <tr>
                        <td className="full" >Team Player</td>
                    </tr>
                    <tr>
                        <td className="full" >Time Management, Leadership Quality</td>
                    </tr>
                    <tr>
                        <td className="full" >Adaptability, Communication</td>
                    </tr>
                    <tr>
                        <td className="full" >Creativity</td>
                    </tr>
                    </tbody>
                </table>
                </div>
            </div>    
        </div>
    );
}

export default AboutMe;
