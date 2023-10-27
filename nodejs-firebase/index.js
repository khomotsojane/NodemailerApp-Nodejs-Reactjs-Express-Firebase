const express = require("express");
const cors = require("cors");
const User = require("./config");
const sendemail = require("./email");
const app = express();
app.use(express.json());
app.use(cors());
const port=4000;

app.get("/", async (req, res) => {
  const snapshot = await User.get();
  var list=[];
  list = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  console.log(list);

  res.send(list);
});

app.post("/create", async (req, res) => {
  const data = req.body;
  const {email}=req.body;
  await User.add( data );
  ///send email
  sendemail(email);
  res.send({ msg: "User Added" });
}); 

app.put("/update/:id", async (req, res) => {
  const id = req.params.id;
  delete req.body.id;
  const data = req.body;
  await User.doc(id).update(data);
  res.send({ msg: "Updated" });
});

app.delete('/delete/:id', async(req, res) => {
  console.log(req.params.id);
  let empid=req.params.id;
  const resp = await User.doc(empid).delete();
  console.log(resp)
   res.send({ msg: resp });
});


app.listen(port, () => console.log(`Up & Running ${port}`));
