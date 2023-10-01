import { Post } from './Post';
import { Header } from './components/Header';

import './styles.css';

export function App() {
  return (
    <div>
    <Header />
    
    <Post 
      author="Antonio Biasotti" 
      content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aliquam impedit tenetur vero rerum, corrupti nihil repellendus sunt eos ex necessitatibus dolorum cupiditate rem totam laboriosam, hic nesciunt minus unde."
    />
    <Post
      author="Gabriel Caruzo"
      content="Um novo post muito legal"
    />
    </div>
  )
}
