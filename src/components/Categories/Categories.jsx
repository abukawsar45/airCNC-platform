import Container from "../../shared/Container"
import {categoriesData} from "./categoriesData";
import CategoryBox from "./CategoryBox";


const Categories = () => {
  return (
    <Container>
      <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto">
        {categoriesData?.map((item)=>(<CategoryBox key={item.label} label={item.label} icon={item.icon} />))}
      </div>
    </Container>
  )
}

export default Categories