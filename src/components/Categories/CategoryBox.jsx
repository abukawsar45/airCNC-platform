import React from 'react';
import { useSearchParams } from 'react-router-dom';

const CategoryBox = ({ label, icon: Icon }) => {
  const [params, setParams] = useSearchParams();
  const ab = params.get('category');
  console.log(ab)
  return (
    <div className='flex flex-col justify-center items-center gap-2 p-3 border-b-2 hover:text-neutral-800 border-transparent text-neutral-500'>
      <Icon size={ 26 } />
      <div className="text-sm font-medium">{label}</div>
    </div>
  )
}

export default CategoryBox