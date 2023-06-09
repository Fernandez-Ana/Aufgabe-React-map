const Section = (props) => {
    return (
        <div>
            <p>{props.title}</p>
            <p>{props.year}</p>
            <p>{props.director}</p>
            <p>{props.duration}</p>
            <p>{props.rate}</p>
            {props.genre.map((element) => <p>{element}</p>)}
        </div>
    );
}

export default Section;