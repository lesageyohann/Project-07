function tag({item}) {
    return (
        <div className='base_identity_item-tag'>
            {item.tags && item.tags.map((tag, index) => (
                <div className='base_identity_item-tag_item' key={index} >
                    <p>{tag}</p>
                </div>
            ))}
        </div>

    )
}

export default tag