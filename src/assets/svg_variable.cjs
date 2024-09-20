const fs = require("fs");
const path = require("path");

// Directory containing SVG files
const svgDir = path.join(__dirname, "images");
console.log(svgDir);

// SCSS output file path
const outputFilePath = path.join(__dirname, "sass", "_svg_icons.scss");

// Function to encode SVG content to URI format
function encodeSVG(svgString) {
  return svgString
    .replace(/\n/g, "") // Remove newlines
    .replace(/\t/g, "") // Remove tabs
    .replace(/\s\s+/g, " ") // Replace multiple spaces with a single space
    .replace(/"/g, "'") // Replace double quotes with single quotes
    .replace(/</g, "%3C") // Encode <
    .replace(/>/g, "%3E") // Encode >
    .replace(/#/g, "%23") // Encode #
    .replace(/{/g, "%7B") // Encode {
    .replace(/}/g, "%7D"); // Encode }
  // .replace(/%/g, "%25"); // Encode %
}

// Function to inject fill="currentColor" into SVG
// function injectCurrentColor(svgContent) {
//   console.log(svgContent);
//   // Use regex to find <path> or other tags and add fill="currentColor" if not already present
//   return svgContent.replace(/<path|<rect|<circle|<polygon|<line/gi, (match) => {
//     console.log({ val: svgContent.includes("fill='none'"), match });
//     if (!svgContent.includes("fill=") || svgContent.includes('fill="none"')) {
//       console.log("here");
//       return `${match} fill="currentColor"`;
//     }
//     return match;
//   });
// }

// Function to create SCSS variables from SVG files
function createScssFile() {
  let scssContent = "";

  // Read all SVG files from the folder
  fs.readdirSync(svgDir).forEach((file) => {
    const filePath = path.join(svgDir, file);

    if (path.extname(file) === ".svg") {
      const fileName = path.basename(file, ".svg");
      let svgContent = fs.readFileSync(filePath, "utf8");
      // svgContent = injectCurrentColor(svgContent);
      const encodedSvg = encodeSVG(svgContent);

      // Create SCSS variable for each encoded SVG
      scssContent += `$${fileName}-icon: "data:image/svg+xml,${encodedSvg}";\n`;
    }
  });

  // Write the SCSS content to the output file
  fs.writeFileSync(outputFilePath, scssContent);
  console.log(`SCSS file created: ${outputFilePath}`);
}

// Run the function to create the SCSS file
createScssFile();
