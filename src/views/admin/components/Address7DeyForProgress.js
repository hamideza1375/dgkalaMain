import { memo } from "react";
import { Column, ProgressChart } from "../../../other/Components/Html";

function Address7DeyForProgress(p) {
  return (
    <Column w='100%' fd='row'>
      <Column w={280} h={200} fg={1} m={4}>
        <ProgressChart data={p.address7DeyForChart} />
      </Column>
    </Column>
  )
}

export default memo(Address7DeyForProgress)