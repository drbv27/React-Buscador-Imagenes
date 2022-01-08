import { useState } from "react";
import { Formik, Form, Field } from "formik";
import "./header.css";

const App = () => {
  const [photos, setPhotos] = useState([]);
  console.log({ photos });
  return (
    <div>
      <h1>Buscador de Imagenes</h1>
      <br />
      <header>
        <Formik
          initialValues={{ search: "" }}
          onSubmit={async (values) => {
            const response = await fetch(
              `https://api.unsplash.com/search/photos?per_page=20&query=${values.search}`,
              {
                headers: {
                  Authorization:
                    "Client-ID CakBJwp4WePDOuz-lhIo7DGybpDaikA9sUewrtAkIvg",
                },
              }
            );
            const data = await response.json();
            //llamar a unsplash API
            /* console.log(data); */
            setPhotos(data.results);
          }}
        >
          <Form>
            <Field name="search" />
          </Form>
        </Formik>
      </header>
    </div>
  );
};

export default App;
