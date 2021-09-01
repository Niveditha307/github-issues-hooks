import useFetch from "./useFetch"
import {Link} from "react-router-dom"
import "./Header.css"


export default function GitHubIssuesList(){
    const data = useFetch("https://api.github.com/repos/octocat/Hello-World/issues")
    

    return(
        <div>
            
            <div className = "title-container">
           {data.map(eachIssue => (    
               <p className = "title" key = {eachIssue.id}>
                    <Link className = "nav-link" to = {`/issues/${eachIssue.number}`}>{eachIssue.title}</Link></p>
           ))}
           </div>
        </div>
    )
}