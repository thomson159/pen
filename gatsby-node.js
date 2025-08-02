const path = require("path");
const fs = require("fs");

function getSlugPath(slug) {
  return slug.slice(1, slug.length - 1).split("/");
}

exports.onCreatePage = async ({ page, actions }) => {
  const { deletePage, createPage } = actions;

  if (page.path === "/dev-404-page/") {
    deletePage(page);
  }
};

exports.onPreInit = () => {
  if (process.argv[2] === "build") {
    const buildPath = path.join(__dirname, "build");
    if (fs.existsSync(buildPath)) {
      fs.rmSync(buildPath, { recursive: true, force: true });
    }

    const publicDevPath = path.join(__dirname, "public_dev");
    if (fs.existsSync(publicDevPath)) {
      fs.rmdirSync(publicDevPath, { recursive: true });
    }

    fs.renameSync(path.join(__dirname, "public"), publicDevPath);
  }
};

exports.onPostBuild = () => {
  const publicPath = path.join(__dirname, "public");
  const publicDevPath = path.join(__dirname, "public_dev");
  const buildPath = path.join(__dirname, "build");

  if (fs.existsSync(publicPath)) {
    fs.renameSync(publicPath, buildPath);
  }

  if (fs.existsSync(publicDevPath)) {
    fs.renameSync(publicDevPath, publicPath);
  }
};

exports.onCreateNode = ({ node, getNodesByType, actions }) => {
  const { createNodeField, createParentChildLink } = actions;
  if (node.internal.type === "Directory") {
    const parentDirectory = path.normalize(node.dir + "/");
    const parent = getNodesByType("Directory").find(
      (n) => path.normalize(n.absolutePath + "/") === parentDirectory
    );
    if (parent) {
      node.parent = parent.id;
      createParentChildLink({
        child: node,
        parent,
      });
    }
  }
  if (node.internal.type === "Mdx" || node.internal.type === "Md") {
    const slugPath = getSlugPath(node.fields.slug);
    createNodeField({
      node,
      name: "topLevelDir",
      value: slugPath[0],
    });

    createNodeField({
      node,
      name: "parentDir",
      value: slugPath[1] || " ",
    });

    createNodeField({
      node,
      name: "subDir",
      value: slugPath[slugPath.length - 1],
    });
  }
};
