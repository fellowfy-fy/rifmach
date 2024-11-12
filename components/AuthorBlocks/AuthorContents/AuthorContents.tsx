import AuthorVideos from "./AuthorVideos/AuthorVideos"
import styles from "../Author.module.css"

export default function AuthorContents() {
    return(
        <section className={styles.customContainer}>
            <div>
                <AuthorVideos/>
            </div>
        </section>
    )
}