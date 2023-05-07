function tag({item}) {
    return (
        <div>
            {item.tags && item.tags.map((tag, index) => (
                <div key={index} >
                    <p>{tag}</p>
                </div>
            ))}
        </div>

    )
}

export default tag