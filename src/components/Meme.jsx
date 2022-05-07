const Meme = ({ childMeme }) => {
    console.log({ childMeme });
    return (
        <div>
            <h1>Name is:{childMeme.name}</h1>
            <img src={childMeme.url} alt="Meme"></img>
        </div>
    );
}
export default Meme;