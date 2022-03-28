import CategoryItem from "../category-item/category-item.component"

import './directory-container.styles.scss';

const Directory = ({categories})=>{
  return(
    <div  className="directory-container">
  {categories.map( category => 
    <CategoryItem categories={category} key={category.id}
     />
    
     )}
</div>
)
}

export default Directory