import { useState } from "react"
import "../styles/Quotes.css"

function Facts(){

const [facts,setFacts] = useState([])
const [loading,setLoading] = useState(false)

async function generateFacts(){

setLoading(true)
setFacts([])

const res = await fetch(
"https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=AIzaSyB4lJOe_XUC8AHhzIK2o8ibvmVTv0gq3wI",
{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
contents:[
{
parts:[
{
text:"Generate 5 interesting and try to give some unknown and unique facts about women's achievements in history, health, sports, and leadership. Each fact should be short and inspiring. Return each fact on a new line and dont include anyline like here are fact and all , just give the 5 facts ."
}
]
}
]
})
}
)

const data = await res.json()

const text = data?.candidates?.[0]?.content?.parts?.[0]?.text || ""

const factList = text.split("\n").filter(f => f.trim() !== "")

setFacts(factList)

setLoading(false)

}

return(

<div className="facts-page">

<h1>🌸 Inspiring Women Facts</h1>

<p className="facts-desc">
Discover powerful and inspiring facts about women's achievements across the world.
</p>

<button className="generate-btn" onClick={generateFacts}>
Generate Inspiring Facts
</button>

{loading && (
<div className="loader"></div>
)}

<div className="facts-grid">

{facts.map((fact,index)=>(
<div className="fact-card" key={index}>

<div className="fact-icon">✨</div>

<p>{fact}</p>

</div>
))}

</div>

</div>

)

}

export default Facts