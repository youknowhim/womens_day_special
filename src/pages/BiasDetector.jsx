import { useState } from "react"
import "../styles/BiasDetector.css"

function BiasDetector(){

const [text,setText] = useState("")
const [result,setResult] = useState("")
const [loading,setLoading] = useState(false)

async function detectBias(){

setLoading(true)
setResult("")

const prompt =
`Check whether the following sentence contains gender bias.
Explain briefly and suggest a neutral alternative sentence.

Sentence: ${text}`

const res = await fetch(
`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=AIzaSyB4lJOe_XUC8AHhzIK2o8ibvmVTv0gq3wI`,
{
method:"POST",
headers:{ "Content-Type":"application/json" },

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

setResult(data?.candidates?.[0]?.content?.parts?.[0]?.text || "No response generated")

setLoading(false)

}

return(

<div className="bias-container">

<h2>⚖ Gender Bias Detector</h2>

<p className="bias-desc">
Enter a sentence and let AI analyze whether it contains gender bias
and suggest a more inclusive alternative.
</p>

<div className="bias-box">

<input
value={text}
onChange={(e)=>setText(e.target.value)}
placeholder="Example: Women are not good leaders"
/>

<button onClick={detectBias}>
Analyze Sentence
</button>

</div>

{loading && <p className="loading">Analyzing sentence...</p>}

{result && (

<div className="result-card">

<h3>Analysis Result</h3>

<p>{result}</p>

</div>

)}

</div>

)

}

export default BiasDetector