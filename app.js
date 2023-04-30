const express = require("express");
const { people } = require("./data/products");
const app = express();
app.use(express.static("./methods-public"));
// In summary, express.json is used when the client submits data in

// JSON format, while express.urlencoded is used when the client submits data

//  in URL-encoded format.

// The extended option in the express.urlencoded() middleware function

//  determines how the values of nested objects in the URL-encoded form

//   data are parsed.

// When extended is set to true, the values of nested objects

// in the form data are parsed as arrays or objects.

//  For example, if the form data contains a nested object like { person: { name: 'John', age: 25 } }, the resulting object would be { person: { name: 'John', age: 25 } }. This is useful when you need to parse complex nested data structures.

// When extended is set to false, the values of nested

// objects in the form data are parsed as strings.

//  For example, if the form data contains a nested object like { person: { name: 'John', age: 25 } }, the resulting object would be { person: '[object Object]' }. This option is useful when you only need to parse simple form data and want to keep the resulting object simple.

// By default, the extended option is set to true,

//  but it is recommended to explicitly set it

//  to either true or false to avoid any unexpected behavior in your application.

app.use(express.urlencoded({ extended: false }));
//another middleware to parse the json from the form
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Home");
});

app.post("/api/employees", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(404)
      .json({ success: false, msg: "Provide the Name value" });
  }
  res.status(201).json({ success: true, people: name });
});
app.put("/api/employees/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  // console.log(id,name);
  // res.send('Person with id = '+ id +' is trying to Access with name = ' + name);
  const empid = people.find((employee) => employee.id === Number(id));
  if (!empid) {
    return res
      .status(404)
      .json({ success: false, msg: `No Employee exist with ID ${id}` });
  }
  const newemp = people.map((emp) => {
    if (emp.id === Number(id)) {
      emp.name = name;
    }
    return emp;
  });

  res.status(201).json({ success: true, data: newemp });
});

app.post("/api/postman/employees", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(404)
      .json({ success: false, msg: "Provide the Name value" });
  }
  res.status(201).json({ success: true, data: [...people, name] });
});

app.get("/api/employees", (req, res) => {
  res.status(201).json({ success: true, data: people });
});
app.post("/login", (req, res) => {
  const { name } = req.body;
  if (name) {
    console.log(req.body);
    res.status(200).json(req.body);
  } else {
    res.status(404).send("Please Enter the form");
  }
});

app.listen(8080, () => {
  console.log("Server is Listening at port 3000");
});
