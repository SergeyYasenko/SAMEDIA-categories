
// Получаем имя проекта
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`;
const srcFolder = `./src`;

export const path = {
   build: {
      js: `${buildFolder}/js/`,
      css: `${buildFolder}/css`,
      html: `${buildFolder}/`,
      images: `${buildFolder}/img/`,
      // fonts: `${buildFolder}/fonts/`,
      files: `${buildFolder}/files/`
   },
   src: {
      js: `${srcFolder}/js/app.js`,
      images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
      svg: `${srcFolder}/img/**/*.svg`,
      styl: `${srcFolder}/styl/style.styl`,
      html: `${srcFolder}/*.pug`,
      files: `${srcFolder}/files/**/*.*`,
      svgicons: `${srcFolder}/svgicons/*.svg`,
   },
   watch: {
      js: `${srcFolder}/js/**/*.js`,
      styl: `${srcFolder}/styl/**/*.styl`,
      html: `${srcFolder}/**/*.pug`,
      images: `${srcFolder}/img/**/*.{jpg,jpeg,png,svg,gif,ico,webp}`,
      files: `${srcFolder}/files/**/*.*`
   },
   clean: buildFolder,
   buildFolder: buildFolder,
   srcFolder: srcFolder,
   rootFolder: rootFolder,
   ftp: `test`
}