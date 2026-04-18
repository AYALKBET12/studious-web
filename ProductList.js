import React from "react";

function ProductList({ products, deleteProduct }) {

  return (
    <div>

      <h2>Product List</h2>

      <table>

        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>

          {products.map((p, index) => (
            <tr key={index}>
              <td>{p.name}</td>
              <td>{p.price}</td>
              <td>
                <button onClick={() => deleteProduct(index)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}

export default ProductList;