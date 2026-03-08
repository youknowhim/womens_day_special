import "../styles/Blog.css";

function Blog(){

const blogs = [

{
title:"Women in Technology",
img:"https://images.unsplash.com/photo-1519389950473-47ba0277781c",
content:"Women are transforming the world of technology. From artificial intelligence to cybersecurity and software development, women engineers and innovators are building the future of the digital world. Historically, the tech industry has been dominated by men, but this is changing rapidly. Organizations around the world are encouraging girls to study STEM subjects and pursue careers in technology. Companies are also recognizing that diverse teams produce better ideas, stronger innovation, and more inclusive products."
},

{
title:"Breaking Social Barriers",
img:"https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b",
content:"Throughout history women have faced many social barriers and restrictions. Despite these challenges, women have continued to fight for their rights, opportunities, and recognition. Today women lead global companies, govern nations, conduct scientific research, and create powerful social movements. Breaking barriers is not just about individual success but about opening doors for future generations of women."
},

{
title:"Importance of Gender Equality",
img:"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
content:"Gender equality is a fundamental human right and a key driver of sustainable development. When women and men have equal access to education, employment, healthcare, and leadership opportunities, societies become more stable and prosperous. Empowering women improves economic growth, strengthens communities, and promotes social justice."
},

{
title:"Women in Leadership",
img:"https://images.unsplash.com/photo-1551836022-d5d88e9218df",
content:"Women leaders are changing the way organizations operate. Research shows that companies with women in leadership roles tend to perform better financially and culturally. Women leaders often emphasize collaboration, empathy, and long-term vision. Increasing representation of women in leadership positions is essential for building balanced and innovative organizations."
},

{
title:"Education for Girls",
img:"https://images.unsplash.com/photo-1588072432836-e10032774350",
content:"Education is one of the most powerful tools for empowering women and girls. When girls receive education they gain knowledge, confidence, and independence. Educated women are more likely to participate in the workforce, make informed decisions, and contribute to their communities. Investing in girls' education helps break the cycle of poverty and inequality."
},

{
title:"Women in Science",
img:"https://images.unsplash.com/photo-1532094349884-543bc11b234d",
content:"Women scientists have played a crucial role in advancing scientific discovery. From Marie Curie's pioneering work in radioactivity to modern innovators in medicine and space exploration, women continue to shape the future of science. Encouraging young girls to pursue careers in science helps expand research and innovation globally."
},

{
title:"Economic Empowerment",
img:"https://images.unsplash.com/photo-1553729459-efe14ef6055d",
content:"Economic empowerment allows women to gain financial independence and control over their lives. When women have access to employment, entrepreneurship opportunities, and financial resources, they are able to support their families and communities. Women's participation in the economy strengthens global development."
},

{
title:"Women in Sports",
img:"https://images.unsplash.com/photo-1546519638-68e109498ffc",
content:"Women athletes have demonstrated incredible determination and resilience across the world. From Olympic champions to grassroots athletes, women in sports inspire millions of people. Their achievements help challenge stereotypes and promote equality in athletics."
},

{
title:"Women as Role Models",
img:"https://images.unsplash.com/photo-1543269865-cbf427effbad",
content:"Role models play an important role in shaping the aspirations of young girls. When girls see women succeeding in different fields such as science, politics, arts, and business, they gain confidence in their own potential. Positive role models help create a generation of empowered and ambitious women."
},

{
title:"Celebrating Women's Day",
img:"https://images.unsplash.com/photo-1529333166437-7750a6dd5a70",
content:"International Women's Day is celebrated across the world to honor the achievements and contributions of women in every field. It also highlights the ongoing challenges women face and encourages society to continue working toward gender equality. Celebrating Women's Day reminds us to support, respect, and empower women everywhere."
}

];

return(

<div className="container">

<h2>🌸 Women's Empowerment Articles</h2>

<div className="blog-container">

{blogs.map((blog,index)=>(
<div className="blog-card-large" key={index}>

<img src={blog.img} alt={blog.title} />

<div className="blog-content">

<h3>{blog.title}</h3>

<p>{blog.content}</p>

</div>

</div>
))}

</div>

</div>

);

}

export default Blog;