import { useState } from "react";

const Admin_Home_Yangilik = () => {
const handleSubmit = async (event) => {
event.preventDefault();
const fileInput = document.querySelector("#fileInput");
const formData = new FormData();
formData.append("image", fileInput.files[0]);
formData.append("title", values.title);
formData.append("description", values.description);

try {
  const response = await fetch("https://azizjon003.jprq.live/api/v1/news", {
    method: "POST",
    body: formData,
  });

  const data = await response.json();
  console.log(data);
} catch (error) {
  console.log(error);
}
};

const [values, setValues] = useState({
title: "",
description: "",
});

const handleInputChange = (event) => {
const { name, value } = event.target;
setValues((prevValues) => ({ ...prevValues, [name]: value }));
};

return (
<form onSubmit={handleSubmit} className="container text-center mt-5">
<input
     type="text"
     name="title"
     id="title"
     value={values.title}
     onChange={handleInputChange}
     required
     className="d-block w-50 form-control container"
     placeholder="Yangilik sarlovhasi"
   />
<textarea
     name="description"
     id="description"
     cols="30"
     rows="5"
     value={values.description}
     onChange={handleInputChange}
     required
     className="container w-50 form-control mt-3"
     placeholder="Yangilik matni"
   ></textarea>
<label htmlFor="fileInput" className="text-start mt-3">
Rasmni tanlang:
<input
       type="file"
       id="fileInput"
       className="form-control text-start "
       accept=".jpg, .jpeg, .png"
       required
     />
</label>

<br />
<button type="submit" className="btn btn-success form-control w-25 mt-5 mb-3">
Yuborish
</button>
</form>
);
};

export default Admin_Home_Yangilik;