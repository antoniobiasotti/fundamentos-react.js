import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment() {
     return (
          <div className={styles.comment}>
               <img src="https://github.com/antoniobiasotti.png" alt="" />

               <div className={styles.commentBox}>
                    <div className={styles.commentContent}>
                         <header>
                              <div className={styles.authorAndTime}>
                                   <strong>Antonio Biasotti</strong>
                                   <time title="8 de Outubro às 20:37" dateTime="2023-08-10 20:36">Cerca de há 1h atrás</time>
                              </div>

                              <button title="Deletar comentário">
                                   <Trash size={24} />
                              </button>
                         </header>

                         <p>Muito bom João, parabéns!! 👏👏</p>
                    </div>

                    <footer>
                         <button>
                              <ThumbsUp />
                              Aplaudir <span>20</span>
                         </button>
                    </footer>
               </div>
          </div>
     )    
}