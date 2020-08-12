
import classes from "./ImageCards.module.css";
import { BASE_URL } from "../../../lib/requests";

const imageCards = ( { image_urls } ) => {
    return (
        <section className={classes.ProductImageContainer}>
            {
                image_urls.map(image_url => {
                    return <div 
                            key={image_url}
                            className={classes.ProductImage}>
                        <img src={BASE_URL + image_url} alt="product" />
                    </div>
                })
            }
        </section>
    )
}

export default imageCards;