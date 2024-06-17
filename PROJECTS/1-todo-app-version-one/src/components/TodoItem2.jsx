function TodoItem2() {
    let TodoName = 'Go to College';
    let TodoDate = '4/10/2024'


  return <div class="container">
      <div class="row kg-row">
        <div class="col-4">{TodoName}</div>
        <div class="col-4">{TodoDate}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger kg-btn">
            Delete
          </button>
        </div>
      </div>
    </div>
}

export default TodoItem2;
