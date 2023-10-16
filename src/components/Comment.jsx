import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';

import styles from './Comment.module.css';

export function Comment({ content, onDeleteComment }) {

     function handleDeleteComment() {
          console.log('deletar')

          onDeleteComment(content)
     }

     return (
          <div className={styles.comment}>
               <Avatar hasBorder={false} src="https://github.com/antoniobiasotti.png" alt="" />

               <div className={styles.commentBox}>
                    <div className={styles.commentContent}>
                         <header>
                              <div className={styles.authorAndTime}>
                                   <strong>Antonio Biasotti</strong>
                                   <time title="8 de Outubro às 20:37" dateTime="2023-08-10 20:36">Cerca de há 1h atrás</time>
                              </div>

                              <button onClick={handleDeleteComment} title="Deletar comentário">
                                   <Trash size={24} />
                              </button>
                         </header>

                         <p>{content}</p>
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