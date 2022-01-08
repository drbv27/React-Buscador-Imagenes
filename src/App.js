import { Formik, Form, Field } from "formik";
import "./header.css";

const App = () => {
  return (
    <div>
      <h1>Buscador de Imagenes</h1>
      <br />
      <header>
        <Formik
          initialValues={{ search: "" }}
          onSubmit={async (values) => {
            //llamar a unsplash API
            console.log(values);
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
