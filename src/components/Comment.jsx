import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';
import { useState } from 'react';

import styles from './Comment.module.css';

export function Comment({ content, onDeleteComment }) {

     const [likeCount, setLikeCount] = useState(0);

     function handleDeleteComment() {
          onDeleteComment(content)
     }

     function handleLikeComment() {
          setLikeCount((state) => {
               return state + 1
          });
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
                         <button onClick={handleLikeComment}>
                              <ThumbsUp />
                              Aplaudir <span>{likeCount}</span>
                         </button>
                    </footer>
               </div>
          </div>
     )    
}