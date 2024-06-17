function AddTodo() {
  return <div class="container">
      <div class="row kg-row">
        <div class="col-4">
          <input type="text" placeholder="Enter your TODO here.." />
        </div>
        <div class="col-4">
          <input type="date" />
        </div>
        <div class="col-2">
          <button type="button " class="btn btn-success kg-btn">
            Add
          </button>
        </div>
      </div>
    </div>
}

export default AddTodo;
