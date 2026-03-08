import { Link } from "react-router-dom"
import "../styles/Home.css"

function Home(){

return(

<div className="home">

{/* HERO SECTION */}

<div className="hero">

<div className="hero-text">

<h1>🌸 Celebrating Women Power</h1>

<p>
Honoring the strength, achievements, and voices of women around the world.
Explore inspiring stories, empowering quotes, and awareness about gender equality.
</p>

</div>

<img 
src="https://images.unsplash.com/photo-1543269865-cbf427effbad"
alt="Women Empowerment"
/>

</div>


{/* FEATURES SECTION */}

<div className="container">

<h2>Explore Women's Day Features</h2>

<div className="grid">

<Link to="/quotes" className="card">
✨ AI Inspiring facts Generator
</Link>

<Link to="/achievers" className="card">
👩 Inspiring Women Achievers Finder
</Link>

<Link to="/blog" className="card">
📚 Women Empowerment Blogs
</Link>

<Link to="/bias" className="card">
⚖ Gender Bias Detector
</Link>

</div>

</div>


{/* MOTIVATION SECTION */}

<div className="motivation">



<div>

<h2>Empowered Women Empower the World</h2>

<p>
Women across the globe continue to lead innovation, build communities,
and inspire future generations. Supporting women's growth creates a
stronger and more balanced world.
</p>

</div>

</div>

</div>

)

}

export default Home