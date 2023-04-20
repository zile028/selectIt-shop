import { useSelector } from "@reduxjs/toolkit";

const Loader = () => {

    const { visible } = useSelector(state => state.loaderStore)

  return (
    <>
        {visible && <div>Loader</div>}
    </>
  )
}

export default Loader