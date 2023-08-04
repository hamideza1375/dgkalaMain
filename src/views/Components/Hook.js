import { Column } from "../../other/Components/Html";

const Hook = (Component) => (
  (props) => {

    return (
      <Column f={1}>
        <Component {...props} />
      </Column>
    )
  })

export default Hook;
