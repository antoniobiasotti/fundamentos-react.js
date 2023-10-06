import { Post } from './Post';
import { Header } from './components/Header';

import styles from './App.module.css';

import './global.css';
import { Sidebar } from './components/Sidebar';

export function App() {
  return (
    <div>
    <Header />
    
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
            <Post 
              author="Antonio Biasotti" 
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aliquam impedit tenetur vero rerum, corrupti nihil repellendus sunt eos ex necessitatibus dolorum cupiditate rem totam laboriosam, hic nesciunt minus unde."
            />
            <Post
              author="Gabriel Caruzo"
              content="Um novo post muito legal"
            />
        </main>
      </div>
    </div>
  )
}
