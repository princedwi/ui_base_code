"use client";

export default function Table() {
  const data: any = [
    { first: "Mark", last: "Otto", handle: "@Lorem ipsum dolor sit amet" },
    { first: "Jacob", last: "Thornton", handle: "@Lorem ipsum dolor sit amet" },
    { first: "Mark", last: "Otto", handle: "@Lorem ipsum dolor sit amet" },
  ];
  return (
    <>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((ele: any, index: number) => {
            return (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{ele.first}</td>
                <td>{ele.last}</td>
                <td>{ele.handle}</td>
                <td>
                  <button className="btn btn-primary">View</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <nav aria-label="...">
        <ul className="pagination float-end">
          <li className="page-item disabled">
            <a className="page-link" href="#" aria-disabled="true">
              Previous
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item active" aria-current="page">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              Next
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
