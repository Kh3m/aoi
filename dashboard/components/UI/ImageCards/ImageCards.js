
import classes from "./ImageCards.module.css";

const imageCards = ( { image_urls } ) => {
    return (
        <section className={classes.ProductImageContainer}>
            {
                image_urls.map(image_url => {
                    return <div className={classes.ProductImage}>
                        <img src={image_url} alt="product" />
                    </div>
                })
            }
        </section>
    )
}

export default imageCards;