import { useEffect, useState } from "react"





export default function GitHubIssuesListItem (props){
    const [data,setData] = useState([])
  
    const ID =props.match.params.id

    useEffect(() => {
        fetch(`https://api.github.com/repos/octocat/Hello-World/issues/ ${ID}`).then((res => res.json())).then(
            data => {
                setData(data)
            }
        )
    },[ID])

   
    console.log(data)

    return(
        <div>
           <p>title : {data.title}</p>
           <p>comments : {data.comments}</p>
           <p>createdAt : {data.created_at}</p>
           <p>State : {data.state}</p>
           <p>UpdatedAt : {data.updated_at}</p>
           
           <p>id : {data.id}</p>
           <p>nodeId : {data.node_id}</p>
        </div>
    )
}