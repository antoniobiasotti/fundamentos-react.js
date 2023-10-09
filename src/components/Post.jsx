import styles from './Post.module.css';

export function Post() {
     return (
          <article className={styles.post}>
               <header>
                    <div className={styles.author}>
                         <img className={styles.avatar} src="https://github.com/antoniobiasotti.png"/>
                         <div className={styles.authorInfo}>
                              <strong>Antônio Biasotti</strong>
                              <span>Web Developer</span>
                         </div>
                    </div>

                    <time title="8 de Outubro às 20:37" dateTime="2023-08-10 20:36">Publicado há 1h</time>
               </header>

               <div className={styles.content}>
                    <p>Fala galeraa 👋</p>
                    <p>Acabei de subir mais um projeto pro meu portifólio!!</p>
                    <p>Confere lá 🚀</p>
                    <p>👉{'   '}<a href="#">antoniobiasotti.dev</a></p>
                    <p>
                         <a href="#">#novoprojeto</a>{' '}
                         <a href="#">#opentowork</a>{' '}
                         <a href="#">#projetosdeti</a>
                    </p>
               </div>

               <form className={styles.commentForm}>
                    <strong>Deixe seu feedbak</strong>

                    <textarea placeholder="Deixe um comentário" />

                    <footer>
                         <button type="submit">Publicar</button>
                    </footer>
               </form>

          </article>
     )
}