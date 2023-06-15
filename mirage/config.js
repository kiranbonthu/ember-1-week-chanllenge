export default function () {
  this.get("/products", (schema, request) => {
    return { data: schema.db.data };
  });
  this.get("/product/:id", (schema, request) => {
    console.log(schema.db.data, request.params.id);
    let data = schema.db.data.find(request.params.id);
    console.log(data);
    return { data: data };
  });
}
