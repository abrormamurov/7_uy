import { useDispatch } from "react-redux";
import { addItem } from "./features/counter/counterSlice";
import { useRef } from "react";
import List from "./components/List";
function App() {
  const dispatch = useDispatch();
  const inputRef1 = useRef();
  const inputRef2 = useRef();
  const inputRef3 = useRef();
  const inputRef4 = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newObj = {
      item1: inputRef1.current.value,
      item2: inputRef2.current.value,
      item3: inputRef3.current.value,
      item4: inputRef4.current.value,
    };

    dispatch(addItem(newObj));
  };
  return (
    <div className="flex-col	flex">
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
        open modal
      </button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit} className="flex-col	flex mb-3">
            <label
              ref={inputRef1}
              className="input mb-3 input-bordered flex items-center gap-2"
            >
              Yosh
              <input type="text" className="grow" placeholder="Yosh" />
            </label>{" "}
            <label
              ref={inputRef2}
              className="input mb-3 input-bordered flex items-center gap-2"
            >
              Familiya
              <input type="text" className="grow" placeholder="Familya" />
            </label>{" "}
            <label
              ref={inputRef3}
              className="input mb-3 input-bordered flex items-center gap-2"
            >
              Ism
              <input type="text" className="grow" placeholder="Ism" />
            </label>{" "}
            <label
              ref={inputRef4}
              className="input mb-3 input-bordered flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow" placeholder="Email" />
            </label>
            <button className="btn btn-neutral">Submit</button>
          </form>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>

      <List />
    </div>
  );
}

export default App;
