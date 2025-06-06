function TodoItem2() {
  let todoName = "Go to college";
  let todoDate = "4/10/2023";

  return (
    <>
      <div class="container">
        <div class="row kg-row">
          <div class="col-sm-6">{todoName}</div>
          <div class="col-sm-4">{todoDate}</div>
          <div class="col-sm-2">
            <button type="button" class="btn btn-danger kg-button">
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default TodoItem2;
