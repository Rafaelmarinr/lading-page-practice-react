const About = (props) => {
    return (
    <div id="about">
        <div className="about-image">
            <img src={props.image}/>
        </div>
        <div className="about-text">
            <h2>{props.title}</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, corrupti debitis maxime 
                eius iure neque, quo ipsa quia culpa amet optio exercitationem. 
                Odio quos laboriosam blanditiis nam qui officiis eum, ipsum deleniti quod, iusto aspernatur.</p>
            <button>{props.button}</button>
        </div>
    </div> );
}
 
export default About;