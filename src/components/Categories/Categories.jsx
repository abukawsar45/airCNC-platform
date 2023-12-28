import { useSearchParams } from "react-router-dom";
import Container from "../../shared/Container"
import {categoriesData} from "./categoriesData";
import CategoryBox from "./CategoryBox";


const Categories = () => {
  const [params, setParams] = useSearchParams();
  const category = params.get('category');
  return (
    <Container>
      <div className='pt-4 flex flex-row items-center justify-between overflow-x-auto'>
        {categoriesData?.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            icon={item.icon}
            selected={category === item.label}
          />
        ))}
      </div>
    </Container>
  );
}

export default Categories