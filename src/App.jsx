import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Components from "./components/Components";
import Layout from "./Layout";
import LoginForm from "./components/LoginForm";
import Page from "./components/Page";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Layout Route */}
          <Route path="/" element={<Layout />}>
            {/* Home Route with Nested Child */}
            <Route path="/" element={<Home />}>
              <Route path="login" element={<LoginForm />} />
            </Route>
            {/* Other Routes */}
            <Route path="components" element={<Components />} />
          </Route>
          <Route path="*" element={<Page />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
