import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/emanuellMarinho.png',
      name: 'João Emanuel',
      role: 'Full-Stack Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto pro meu portifólio!! O nome O nome do projeto é brah-brah-brah. Confere lá!'},
      { type: 'link', content: ''},
    ],
    publishedAt: new Date('2023-10-17 14:46:23'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/antoniobiasotti.png',
      name: 'João Emanuel',
      role: 'Full-Stack Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto pro meu portifólio!!'},
      { type: 'link', content: ''},
    ],
    publishedAt: new Date('2022-10-20 14:46:23'),
  },
];

export function App() {
  return (
    <div>
    <Header />
    
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}
