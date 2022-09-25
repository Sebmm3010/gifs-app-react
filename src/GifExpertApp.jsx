import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['Meme' /* , 'Dragon ball', 'Gru' */]);

  const onAddCategoria = (newCategory) => {

    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);

    // const cat= 'Valorant';
    // setCategories([ cat, ...categories ]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory onNewCategory={onAddCategoria} />
      {categories.map((category) => (
        <GifGrid
          key={category}
          category={category}
        />
      ))}
    </>
  );
}
