import { useState } from "react"
import "../styles/Achievers.css"

function Achievers(){

const [country,setCountry] = useState("")
const [state,setState] = useState("")
const [women,setWomen] = useState([])
const [loading,setLoading] = useState(false)

async function generateWomen(){

setLoading(true)
setWomen([])

const prompt = `
Give exactly 5 inspiring women achievers from ${state} in ${country}.

Format strictly like this:

Name -
Field -
Achievement -
`

try{

const res = await fetch(
`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=AIzaSyB4lJOe_XUC8AHhzIK2o8ibvmVTv0gq3wI`,
{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
contents:[
{
parts:[{text:prompt}]
}
]
})
}
)

const data = await res.json()

const text = data?.candidates?.[0]?.content?.parts?.[0]?.text || ""

const people = text.split("Name -").slice(1).map(p => {

const lines = p.split("\n")

return{
name: lines[0]?.trim(),
field: lines[1]?.replace("Field -","").trim(),
desc: lines[2]?.replace("Achievement -","").trim()
}

})

setWomen(people)

}catch{
setWomen([])
}

setLoading(false)

}

return(

<div className="container">

<h2>🌸 Discover Inspiring Women Around You</h2>

<h3 className="subtitle">
Get to know the inspiring women heroes from your region and learn about their achievements.
</h3>

<div className="search-box">

<input
placeholder="Enter Country"
value={country}
onChange={(e)=>setCountry(e.target.value)}
/>

<input
placeholder="Enter State"
value={state}
onChange={(e)=>setState(e.target.value)}
/>



<button onClick={generateWomen}>
Find Achievers
</button>

{loading && (
<div className="loader-container">

<div className="loader"></div>

<p>Finding inspiring women heroes in your region...</p>

</div>
)}

</div>

<div className="achiever-grid">

{women.map((w,i)=>(
<div className="achiever-card" key={i}>

<h3>{w.name}</h3>

<p className="field">{w.field}</p>

<p className="desc">{w.description}</p>

</div>
))}

</div>

</div>

)

}

export default Achievers