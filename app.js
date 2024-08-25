import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = process.env.PORT || 3000;

// Get __dirname equivalent
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

// Set the views directory and engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Routes
app.get("/", (req, res) => {
  res.render("pages/index", { title: "Home - My hotel API Website" });
});

app.get("/about", (req, res) => {
  res.render("pages/about", { title: "About Us - My hotel API Website" });
});

app.get("/docs", (req, res) => {
  res.render("pages/docs", { title: "Docs - My hotel API Website" });
});

app.get("/contact", (req, res) => {
  res.render("pages/contact", { title: "Contact Us - My hotel API Website" });
});

app.get("/blog", (req, res) => {
  res.render("pages/blog", { title: "Blog - My hotel API Website" });
});

app.get("/faq", (req, res) => {
  res.render("pages/faqs", { title: "FAQ - My hotel API Website" });
});

app.get("/service", (req, res) => {
  res.render("pages/services", {
    title: "Our Services - My hotel API Website",
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
