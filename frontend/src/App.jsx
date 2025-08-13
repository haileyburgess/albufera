import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Events from "./components/Events";
import ContactForm from "./components/Contact";
import HomePage from "./pages/HomePage";
import FaqAccordion from "./components/FAQContainer";
import EventsPage from "./pages/EventsPage";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        {/* <Route path="/register" element={<Register />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/faq" element={<FaqAccordion />} />
        <Route path="/contact" element={<ContactForm />} />
      </Route>
    </Routes>
  );
}
