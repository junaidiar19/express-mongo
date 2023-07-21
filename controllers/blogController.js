const Blog = require("./../models/blogs");

const blogIndex = (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then(result => {
      res.render("blogs/index", {
        title: "All Blogs",
        blogs: result,
      });
    })
    .catch(err => {
      console.log(err);
    });
};

const blogDetail = (req, res) => {
  const id = req.params.id;
  Blog.findById(id)
    .then(result => {
      res.render("blogs/details", {
        blog: result,
        title: "Blog Detail",
      });
    })
    .catch(err => {
      res.render("404", {
        title: "Blog not found",
      });
    });
};

const blogCreate = (req, res) => {
  res.render("blogs/create", { title: "Create a new blog" });
};

const blogStore = (req, res) => {
  const blog = new Blog(req.body);

  blog
    .save()
    .then(result => {
      res.redirect("/");
    })
    .catch(err => {
      console.log(err);
    });
};

const blogDelete = (req, res) => {
  const id = req.params.id;

  Blog.findByIdAndDelete(id)
    .then(result => {
      res.json({
        redirect: "/blogs",
      });
    })
    .catch(err => {
      console.log(err);
    });
};

module.exports = {
  blogIndex,
  blogDetail,
  blogCreate,
  blogStore,
  blogDelete,
};
