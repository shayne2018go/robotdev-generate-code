import { generateProgrammingSchema as programming } from './programming/generate-schema';
import { generateCssSchema as css } from './markup/css/generate-schema';
import { generateJsonSchema as json } from './markup/json/generate-schema';
import { generateXmlSchema as xml } from './markup/xml/generate-schema';

export const generateAstSchema = {
  programming,
  css,
  json,
  xml,
};
