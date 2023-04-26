import { useSelector } from "react-redux";

const Loader = () => {

  const { visible } = useSelector(state => state.loaderStore)

  return (
    <>
        {visible && 
          <div className="loader">
            <h3 className="loader__title">Loading...</h3>
            <div className="loader__spinner"></div>
          </div>
          }
    </>
  )
}

export default Loader